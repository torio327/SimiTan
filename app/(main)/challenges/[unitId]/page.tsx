"use server"
import React from 'react';
import {getAnswers, getChallenges} from "@/db/queries";
import Quiz from "@/app/(main)/challenges/quiz";
import {revalidatePath} from "next/cache";
type Props={
    params:{unitId:number}
}

const Page = async ({params}:Props) => {
    const challengesData=await getChallenges(params.unitId);
    // const ChallengeProgressData=await getMissChallenge();

    const [challenges]=await Promise.all([challengesData]);
//     const num=challenges.length
//     const limitChallengeProgress=ChallengeProgress.slice(-num)
//     const limitMissChallengeProgress=limitChallengeProgress.filter((challengeProgress)=>challengeProgress.completed===false)
// console.log(limitMissChallengeProgress)
    const initialPercentage=0
    revalidatePath(`/challenges/${params.unitId}`)
    return (
        <div>
            <Quiz challenges={challenges} initialPercentage={initialPercentage} />

            <br/>
            {/*{challenges.map((challenge,index:number)=>(*/}
            {/*    <>*/}
            {/*        {JSON.stringify(challenge.question)}*/}
            {/*        {JSON.stringify(challenge.answers)}*/}
            {/*    </>*/}
            {/*))}*/}
        </div>
    );
};

export default Page;

//challenge.idをpropsで渡して,そのanswersをgetAnswersを使って取り出す