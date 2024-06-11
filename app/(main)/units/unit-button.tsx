import React from 'react';
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {revalidatePath} from "next/cache";
type Props={
    id:number,
    unitName:string,
    completed?:boolean,
    percentage?:number,
    disabled:boolean,
    onClick:(id:number)=>void,
}

const UnitButton = ({id,unitName,completed,disabled,onClick}:Props) => {


    return (
        <>
            {/*<Link  href={`/challenges/${id}`} className={"w-fit h-fit"}>*/}
            {/*<h1 className={cn("text-3xl bg-slate-200 min-w-[300px]",*/}
            {/*completed&&"text-3xl bg-green-500 min-w-[300px]",*/}
            {/*disabled&&"pointer-events-none opacity-50"*/}
            {/*)}>*/}
            {/*    {unitName}*/}
            {/*</h1>*/}
            {/*</Link>*/}
            <Button variant={"blueBack"}
            className={cn("text-3xl bg-slate-200 w-[200px] lg:w-[300px]",
                completed&&"text-3xl bg-green-500 max-w-[300px]",
                disabled&&"pointer-events-none opacity-50")}
                    onClick={()=>onClick(id)}
            >
                {unitName}
            </Button>
            </>
    );
};

export default UnitButton;