import React from 'react';
import {Progress} from "@/components/ui/progress";


type Props = {
    percentage:number
}

const Percentage = ({percentage}: Props) => {
    // const num:boolean[]=[];
    // {challenges.map((challenge) =>(
    //     num.push(challenge.challengeProgress[0].completed===true)
    // ))}
    // console.log("hhhh")
    // console.log({challenges})
    // console.log(challenges.length)
    // console.log("hhhh")
    // const percentage=(num.length)*100/challenges.length
    return (
        <div>
            <Progress value={percentage} className={"lg:w-[200px] h-8 bg-slate-300 w-[200px]"}/>
        </div>
    );
};

export default Percentage;