"use server"
import {cache} from "react";
import db from "@/db/drizzle";
import {answers,challenges, courses, units} from "@/db/schema";
import {asc, eq} from "drizzle-orm";


export const getCourses = cache(async () => {
    const data = await db.select().from(courses).orderBy(asc(courses.id))
    return data;
})

export const getCourse=cache(async()=>{
    const userProgress=await getUserProgress();
    if (!userProgress){
        // throw new Error("userProgress does not exist")
        return null;
    }
    const activeCourseId=userProgress.activeCourseId;
    if(!activeCourseId){
        // throw new Error("activeCourse does not exist")
        return null;
    }

    const data=await db.query.courses.findFirst({
        where:eq(courses.id,activeCourseId),
    })
    return data;
})

export const getUnits = cache(async () => {
    const userProgress = await getUserProgress();
    if (!userProgress?.activeCourseId) {
        return [];
    }
    const data = await db.query.units.findMany({
        orderBy: (units, {asc}) => [asc(units.order)],
        where: eq(units.courseId, userProgress.activeCourseId),
        with: {
            challenges: {
                orderBy: (challenges, {asc}) => [asc(challenges.order)],
                with: {
                    challengeProgress:{}
                }
            }
        }
    })
    const unitsWithCompletedStatus = data.map((unit) => {
        if (unit.challenges.length === 0) {
            return {...unit,percentage:0,completed:false};
            // return {...unit,completed:false};
        }
        const TrueChallenges=unit.challenges.filter((challenge)=>{
         const completed=  challenge.challengeProgress&&challenge.challengeProgress.length>0&&challenge.challengeProgress.every((progress)=>progress.completed)
            return completed
            // const percentage=Math.round((completedNumber/unit.challenges.length))
        })
        console.log("rraikan")

        const percentage=Math.round((TrueChallenges.length/unit.challenges.length)*100)


        const allCompletedChallenges=unit.challenges.every((challenge)=>{
            return challenge.challengeProgress&&challenge.challengeProgress.length>0&&challenge.challengeProgress.every((progress)=>progress.completed);
        });
        return {...unit,percentage:percentage,completed: allCompletedChallenges}
        // return {...unit,completed: allCompletedChallenges}
    })
    console.log(unitsWithCompletedStatus)
return unitsWithCompletedStatus;
})

export const getUnitProgress=cache(async()=>{
    const data=await db.query.unitProgress.findFirst({
        with:{
            activeUnit:true
        }
    })
    return data;
})

export const getChallenges=cache(async(unitId:number)=>{
    const data=await db.query.challenges.findMany({
        where:eq(challenges.unitId,unitId),
        orderBy:(challenges,{asc})=>[asc(challenges.order)],
        with:{
            answers:true,
            challengeProgress:true
        }
    })
    return data;
})

export const getAnswers=cache(async(challengeId:number)=>{
    const data=await db.query.answers.findMany({
        orderBy:(answers,{asc})=>[asc(answers.order)],
        where:eq(answers.challengeId,challengeId)
    })
    return data;
})

export const getUserProgress = cache(async () => {
    const data = await db.query.userProgress.findFirst({
        with: {
            activeCourse: true
        }
    })
    return data;
})
//getUserProgressがないと、course選択で選択したcourseをデータベースからとってくることができなくなる

export const getCourseById = cache(async (courseId: number) => {
    const data = await db.query.courses.findFirst({
        where: eq(courses.id, courseId),
        with: {
            units: {
                orderBy: (units, {asc}) => [asc(units.order)],
            }
        }
    })
    return data;
})

// export const getMissChallenge=cache(async(unitId:number)=>{
//     const data=await db.query.challengeProgress.findMany({
//         where:eq(challengeProgress.unitId,unitId),
//     })
//     return data;
// })

export const getUnit=cache(async(unitId:number)=>{
    const data= await db.query.units.findFirst({
        where:eq(units.id,unitId),
        with:{
            challenges:{
                orderBy:(challenges,{asc})=>[asc(challenges.order)],
                with:{
                    challengeProgress:true
                }
            }
        }
    })
    if(!data||!data.challenges){
        return null;
    }
    const normalizedChallenges=data.challenges.map((challenge)=>{
        const completed=challenge.challengeProgress&&challenge.challengeProgress.length>0&&challenge.challengeProgress.every((progress)=>progress.completed)
        return {...challenge,completed};
    })
    return {...data,challenges:normalizedChallenges}
})

export const calcPercentage=cache(async(unitId:number)=>{
    const unitProgress=await getUnitProgress()
    if(!unitProgress){
        return 0;
    }
    //パーセントを返す関数を作っているから、値が存在しない条件の時は0を返す
    const unit=await getUnit(unitProgress.activeUnitId)
    if(!unit){
        return 0;
    }
    const completedChallenges=unit.challenges.filter((challenge)=>challenge.completed);
    const percentage=Math.round((completedChallenges.length/unit.challenges.length)*100)
    return percentage
    // const challenges=await getChallenges(unitId)
    // const num:boolean[]=[];
    //     {challenges.map((challenge) =>(
    //         num.push(challenge.challengeProgress[0].completed===true)
    //     ))}
    // const percentage=(num.length)*100/(challenges.length)
    // return percentage;
})

//challengeProgressでcompletedがfalseだったchallengeを取得したい

//complitedがfalseのchallengeProgressをqueryで得る。missしたchallengeIdをget, getChallengeに代入して配列に格納

//unitのchallenges.filter((challenge)=>challenge.completed)

//そのunitをとってきて、その中のchallengesのchallengeProgressのcompletedの数で計算する
//challengesにcompletedのfield を追加する

//challengeProgressなどにactiveChallengeIdなどを作成して、activeChallengeIdを更新して、activeChallengeIdとあう、challengeを見つけて、返すqueryを作る。