import React, {useTransition} from 'react';
import {Button} from "@/components/ui/button";
import {answers} from "@/db/schema";
import {getAnswers} from "@/db/queries";
import Answer from "@/app/(main)/challenges/answer";
type Props={
    answers:typeof answers.$inferSelect[];
    onClick:(id:number)=>void;
    // onStay:()=>void;
    pending:boolean;
    selectedAnswerId?:number
    status:"correct"|"wrong"|"none"|"finish",
    correctAnswerId?:number
}

const Answers = ({status,answers,onClick,pending,selectedAnswerId,correctAnswerId}:Props) => {
    return (
        <>
            <div className={"flex flex-col gap-y-4"}>
                {answers?.map((answer)=>(
                    <>
                        <Answer correctAnswerId={correctAnswerId===answer.id} status={status} selected={selectedAnswerId===answer.id} pending={pending} key={answer.id} id={answer.id} answer={answer.answer} correct={answer.correct} onClick={onClick}/>
                    </>
                ))}
            </div>

        </>
    );
};

export default Answers;

// const router=useRouter();
// const [pending,startTransition]=useTransition();
// const nextPage=unitID+1
// const onClick=(correct:boolean)=>{
//     if(pending){return;
//     }
//     startTransition(()=>{
//         if(correct){
//             router.push(`/challenges/${nextPage}`)
//         }else {
//             return ;
//         }
//     })
//     //丸付けがない,
// }