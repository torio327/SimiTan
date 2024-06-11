"use client"
import React, {useEffect, useTransition} from 'react';
import {challengeProgress, challenges, courses, units} from "@/db/schema";
import UnitButton from "@/app/(main)/units/unit-button";
import {useRouter} from "next/navigation";
import {Progress} from "@/components/ui/progress";
import Percentage from "@/app/(main)/units/percentage";
import {revalidatePath} from "next/cache";
import Card from "@/app/(main)/units/card";
type Props={
    units:(typeof units.$inferSelect &{
        percentage:number,
        completed:boolean,
        challenges:(typeof challenges.$inferSelect&{
            challengeProgress:typeof challengeProgress.$inferSelect[]
        })[],
    })[];
    activeCourse:typeof courses.$inferSelect|null|undefined;
}
const List = ({units,activeCourse}:Props) => {
    const router=useRouter();
    const [pending,startTransition]=useTransition();
    const onClick=(id:number)=>{
        if (pending)return;
        startTransition(()=>{
            router.push(`/challenges/${id}`)
        })
    }

    return (
        <div className="p-4 w-full flex justify-center flex-col gap-y-4">
            <div className={"flex justify-center items-center h-24 w-full bg-blue-500 rounded-xl animate-bounce"}><h1 className={"text-4xl tracking-wider text-white"}>{activeCourse?.courseName}</h1></div>
            <div className={"flex flex-col  justify-center space-y-4"}>
                {units.map((unit, index: number) => (
                <div key={unit.id}>
                    <Card unit={unit} pending={pending} onClick={onClick}/>
                </div>
            ))}
            </div>
        </div>
    );
};

export default List;

//ssr,csr