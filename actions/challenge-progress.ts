"use server";

import db from "@/db/drizzle";
import {eq} from "drizzle-orm";
import {challengeProgress, challenges} from "@/db/schema";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export const upsertChallengeProgress=async (challengeId:number)=>{
    const challenge=await db.query.challenges.findFirst({
        where:eq(challenges.id,challengeId)
    })
    if (!challenge){
        throw new Error("challenge does not exist")
    }

    const unitId=challenge.unitId;

    const existingChallengeProgress=await db.query.challengeProgress.findFirst({
        where:eq(challengeProgress.challengeId,challengeId)
    })

    const isPractice=!!existingChallengeProgress
    if(isPractice){
        await db.update(challengeProgress).set({
            completed: true
        }).where(
            eq(challengeProgress.challengeId,challengeId)
        );
        revalidatePath("/units");
        revalidatePath(`/challenges/${unitId}`);
        redirect(`/challenges/${unitId}`)
    }

    await db.insert(challengeProgress).values({
        challengeId,
        completed: true,
    })
    revalidatePath("/units");
    revalidatePath(`/challenges/${unitId}`);
    redirect(`/challenges/${unitId}`)
}

export const upsertChallengeProgressWrong=async(challengeId:number)=>{

    const challenge=await db.query.challenges.findFirst({
        where:eq(challenges.id,challengeId)
    })
    if(!challenge){
        throw new Error("challenge does not exist");
    }

    const unitId=challenge?.unitId

    const existingChallengeProgress=await db.query.challengeProgress.findFirst({
        where:eq(challengeProgress.challengeId,challengeId)
    })
    const isPractice=!!existingChallengeProgress

    if(isPractice){
        await db.update(challengeProgress).set({
            completed: false
        }).where(
            eq(challengeProgress.challengeId,challengeId)
        )
        revalidatePath("/units")
        revalidatePath(`/challenges/${unitId}`)
        redirect(`/challenges/${unitId}`)
    }
    await db.insert(challengeProgress).values({
        challengeId,
        completed: false
    })

    revalidatePath("/units")
    revalidatePath(`/challenges/${unitId}`)
    redirect(`/challenges/${unitId}`)
}