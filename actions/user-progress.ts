"use server";

import { getCourseById, getUserProgress} from "@/db/queries";
import db from "@/db/drizzle";
import {challengeProgress, userProgress} from "@/db/schema";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {eq} from "drizzle-orm";

export const upsertUserProgress=async(courseId:number)=>{
    const course=await getCourseById(courseId);
    if(!course){
        throw new Error("Course not found")
    }

    if(!course.units.length){
        throw new Error("Course is empty")
    }

    const existingUserProgress=await getUserProgress();
    //userProgressがあったら、アップデート, なかったらinsert
    if(existingUserProgress){
        await db.update(userProgress).set({
            activeCourseId: courseId,
        });
        revalidatePath("/learn")
        revalidatePath("/units")
        redirect("/units");
    }

    await db.insert(userProgress).values({
        activeCourseId: courseId,
    });
    revalidatePath("/learn")
    revalidatePath("/units")
    redirect("/units")
}

