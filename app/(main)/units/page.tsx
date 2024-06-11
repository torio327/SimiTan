import React, {cache} from 'react';
import {calcPercentage, getCourse, getUnits, getUserProgress} from "@/db/queries";
import UnitButton from "@/app/(main)/units/unit-button";
import {revalidatePath} from "next/cache";
import List from "@/app/(main)/units/list";
import Title from "@/components/ui/title";

const Page = async () => {
    const activeCourseData=await getCourse();

    const unitsData=await getUnits();
    const [units,activeCourse]=await Promise.all([unitsData,activeCourseData])
   console.log("")
    // const percentage=await calcPercentage()

    const idLocked=true;
    revalidatePath("/units")
    return (
        <div className={""}>
            <Title title={"Unit"}/>
            <List units={units} activeCourse={activeCourse}/>
        </div>
    );
};

export default Page;


