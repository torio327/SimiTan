"use client"
import React, {cache, startTransition, useState, useTransition} from 'react';
import Footer from "@/app/(main)/challenges/footer";
import Answers from "@/app/(main)/challenges/answers";
import {useRouter} from "next/navigation";
import {useAudio} from "react-use";
import Header from "@/app/(main)/challenges/header";
import answer from "@/app/(main)/challenges/answer";
import {challenges, answers, challengeProgress} from "@/db/schema";
import {upsertChallengeProgress, upsertChallengeProgressWrong} from "@/actions/challenge-progress";
import {toast} from "sonner";
import Card from "@/app/(main)/challenges/card";
import Percentage from "@/app/(main)/units/percentage";
import {Confetti} from "svelte-confetti";
import ReactConfetti from "react-confetti";

let num: number = 0
type Props = {
    // challenges: {
    //     id: number;
    //     question: string;
    //     order: number;
    //     unitId: number;
    //     answers: {
    //         id: number;
    //         order: number;
    //         answer: string;
    //         correct: boolean;
    //         challengeId: number;
    //     }[]
    // }[];
    challenges:(typeof challenges.$inferSelect&{
        answers:typeof answers.$inferSelect[];
    })[];
    initialPercentage:number;
    missChallengeProgress?:{
        id:number,
        order:number,
        challengeId:number,
        completed:boolean
    }[]
}

const Quiz = ({challenges,initialPercentage,missChallengeProgress}: Props) => {
    const router=useRouter();
    const [pending,startTransition]=useTransition();

    const [missChallenges, setMissChallenges] = useState<string[]>([])
    const [status, setStatus] = useState<"wrong"|"finish"|"correct"|"none">("none")
    const [selectedAnswer, setSelectedAnswer] = useState<number>()
    const [percentage, setPercentage] = useState(()=>{
        return initialPercentage===100?0:initialPercentage
    })
    const [correctAnswerId, setCorrectAnswerId] = useState<number>()

    const [finish, setFinish] = useState(false)

    const [correctAudio,_c,correctControls]=useAudio({src:"/correct.mp3"})
    const [inCorrectAudio,_i,inCorrectControls]=useAudio({src:"/incorrect.mp3"})
    const [clappingAudio]=useAudio({src:"/clapping.mp3",autoPlay:true});
    const [celebrateAudio]=useAudio({src:"/celebrate.mp3",autoPlay:true})
    const [Challenges]=useState(challenges);

    const challenge=Challenges[num]
    const answers=Challenges[num]?.answers ?? [];

    const numLength=Challenges.length
    console.log(numLength)
    // const NextPage=()=>{
    //     if(num<numLength){
    //         setStatus("correct")
    //         num+=1
    //     }else{
    //         setStatus("finish")
    //     }
    // }
    const onClick=(id:number)=>{
        if(status!=="none")return;
       setSelectedAnswer(id);
    }

    const onNext=()=>{
        if (num<numLength-1){
        num+=1;
        return num;
        }else {
            setFinish(true)
            num=0
            return num;
        }
    }

    const onContinue=()=>{
        if(!selectedAnswer)return;
        if(status==="wrong"){
            onNext();
            setStatus("none")
            setSelectedAnswer(undefined)
            return;
        }
        if(status==="correct"){
            onNext();
            setStatus("none")
            setSelectedAnswer(undefined)
            return;
        }
        const correctAnswer=answers.find((answer)=>answer.correct);
        if(!correctAnswer){
            return;
        }
        const correctAnswerId=correctAnswer.id
        if(correctAnswerId===selectedAnswer){
            startTransition(()=>{
                upsertChallengeProgress(challenge.id).then((response)=>{
                    correctControls.play();
                    setCorrectAnswerId(correctAnswerId);
                    setStatus("correct");
                    setPercentage((prev)=>prev+100/Challenges.length)
                    return;
            }).catch(()=>toast.error("something went wrong. Please try again"))
            })
        }else{
            startTransition(()=>{
                upsertChallengeProgressWrong(challenge.id).then(()=>{
                    inCorrectControls.play();
                    setMissChallenges([...missChallenges,challenge.word]);
                    console.log(missChallenges);
                    setCorrectAnswerId(correctAnswerId);
                    setStatus("wrong");

                    return missChallenges;
                }).catch(()=>toast.error("something went wrong. Please try again"))
            })
        }
    }

    if(finish){
        const checkMissChallenges=missChallenges
        return(
            <>
                {clappingAudio}
                {!missChallenges[0]&&(<ReactConfetti width={window.innerWidth} height={window.innerHeight}/>)}
                <div className="flex flex-col gap-y-10">
                    <h1 className="text-7xl text-center text-blue-500">Finish</h1>
                    {missChallenges[0]?(<h1 className={"text-4xl text-center text-rose-500"}>Check the words below again!</h1>): (
                        <h1 className={"text-4xl text-center text-yellow-400"}>Excellent Job!!</h1>)}
                    <div className={"mx-auto justify-center gap-6 grid grid-cols-2"}>
                        {missChallenges.map((challenge) => (
                            <>
                                <Card missChallenge={challenge}/>
                            </>
                        ))}
                    </div>

                    <Footer status={"finish"} pending={pending} onCheck={() => router.push("/units")}/>
                </div>

            </>
        )
    }

    return (
        <>
            {correctAudio}
            {inCorrectAudio}
            <div className="flex flex-col gap-y-10">
                <Header percentage={percentage}/>
                <div className="flex gap-x-20 justify-center flex-col lg:flex-row">
                    <h1 className={" text-2xl ml-3 border-b-2 border-slate-200 text-center mb-4 lg:ml-0 lg:mb-0"}>Question {num + 1}</h1>
                    <h1 className=" text-3xl text-center">{Challenges[num]?.question}</h1>
                </div>

                <div className={"flex justify-center items-center  bg-yellow-300"}>

                </div>
                <Answers
                    correctAnswerId={correctAnswerId}
                    answers={Challenges[num]?.answers}
                    selectedAnswerId={selectedAnswer}
                    onClick={onClick}
                    pending={pending}
                    status={status}
                />
                <Footer status={status} onCheck={onContinue} pending={pending}/>
            </div>
        </>

    );
};

export default Quiz;

//quizでonClick作って、Answersに渡す

//challenge.idをpropsで渡して,そのanswersをgetAnswersを使って取り出す

//serverサイドでデータを取ってくる。コンポーネントにばらまき、client-sideの記述。パーツごとにコンポーネントを作成。三項演算子などを使用して、条件表示を行う


export const per=Percentage