"use client";
import React, {useTransition} from 'react';
import {courses, userProgress} from "@/db/schema";
import Card from "@/app/(main)/learn/card";
import {useRouter} from "next/navigation";
import {upsertUserProgress} from "@/actions/user-progress";
import {toast} from "sonner";
import {cn} from "@/lib/utils";
type Props={
    courses:typeof  courses.$inferSelect[];
    activeCourseId?:typeof userProgress.$inferSelect.activeCourseId;
}
const List = ({courses,activeCourseId}:Props) => {
    const router=useRouter();
    const [pending,startTransition]=useTransition();
    const onClick=(id:number)=>{
        if(pending)return ;
        if(id===activeCourseId){
            return router.push("/units")
        }
           startTransition(()=>{
               upsertUserProgress(id).catch(()=>toast.error("something went wrong"))
           })
    }

    return (
        <div className={cn("p-4 justify-center gap-x-2 gap-y-4 lg:gap-x-8 lg:grid lg:grid-cols-3 flex flex-col ",
        )}>
            {courses.map((course,key:number)=>(
                <Card onClick={onClick} disabled={pending} id={course.id} courseName={course.courseName} courseImage={course.courseImage} key={course.id}/>
            ))}
        </div>
    );
};

export default List;