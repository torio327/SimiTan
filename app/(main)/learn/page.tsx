import React from 'react';
import {getCourses, getUserProgress} from "@/db/queries";
import List from "@/app/(main)/learn/list";
import Title from "@/components/ui/title";

const Page =async () => {
    const courseData=getCourses();
    const userProgressData=getUserProgress();

    const [courses,userProgress]=await Promise.all([courseData,userProgressData]);

    return (
        <div>
            <Title title={"Course"}/>
            <List courses={courses} activeCourseId={userProgress?.activeCourseId}/>
        </div>
    );
};

export default Page;