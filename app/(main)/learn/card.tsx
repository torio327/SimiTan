import React from 'react';
import {cn} from "@/lib/utils";
import Image from "next/image";
type Props={
    id:number,
    courseName:string,
    courseImage:string,
    onClick:(id:number)=>void,
    disabled:boolean
}
const Card = ({id,courseName,courseImage,onClick,disabled}:Props) => {
    return (
        <div onClick={()=>onClick(id)} className={cn(
            "min-w-[220px] min-h-[350px] border-2 border-blue-400 border-b-4 active:border-b-0 hover:bg-blue-200 cursor-pointer rounded-xl",
            disabled &&"pointer-events-none opacity-50"
        )}>
            <div className={"h-2/3 w-full flex items-center justify-center object-cover"}><Image src={courseImage} alt={courseName} width={200} height={200} className={"object-cover"}/></div>
            <div className={"h-1/3 flex items-center justify-center"}><p className={"text-4xl "}>{courseName}</p></div>
        </div>
    );
};

export default Card;