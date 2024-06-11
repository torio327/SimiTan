import React from 'react';
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

type Props={
    answer:string,
    correct:boolean,
    onClick:(id:number)=>void,
    id:number,
    pending:boolean,
    selected?:boolean,
    status:"correct"|"wrong"|"none"|"finish",
    correctAnswerId?:boolean
}
const Answer = ({status,selected,answer,correct,onClick,id,pending,correctAnswerId}:Props) => {
    return (
        <>
            <Button disabled={pending} onClick={()=>onClick(id)} variant={"answers"} className={cn("mx-auto min-w-[350px]",
                selected&&"bg-blue-200 text-black border-2 border-b-4 border-blue-500 hover:bg-blue-200 active:border-b-0 ",
                pending&&"pointer-events-none opacity-50",
                correctAnswerId&&"border-green-500 bg-green-200 border-2 hover:bg-green-200",
                selected&&status==="correct"&&"border-green-500 bg-green-200 border-2 hover:bg-green-200",
                selected&&status==="wrong"&&"border-rose-500 bg-rose-200 border-2 hover:bg-rose-200",

            )}>
                <p>{answer}</p>
            </Button>
        </>
    );
};

export default Answer;
//pending ... 押せないようにする