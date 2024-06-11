import React from 'react';
import UnitButton from "@/app/(main)/units/unit-button";
import Percentage from "@/app/(main)/units/percentage";
import {challengeProgress, challenges, units} from "@/db/schema";
type Props ={
    unit:(typeof units.$inferSelect &{
        percentage:number,
        completed:boolean,
        challenges:(typeof challenges.$inferSelect&{
            challengeProgress:typeof challengeProgress.$inferSelect[]
        })[],
    });
    pending:boolean;
    onClick:(id:number)=>void;
}
const Card = ({unit,pending,onClick}:Props) => {
    return (
        <>
            <div className={"py-3 flex flex-col items-center justify-center gap-y-4 lg:flex-row  lg:gap-x-40 border-2 border-blue-500 rounded-xl "} key={unit.id}>
                <div className={""}>
                    <UnitButton key={unit.id} id={unit.id} disabled={pending} unitName={unit.unitName}
                                completed={unit.completed}
                                percentage={unit.challenges.length} onClick={onClick}/>
                </div>
                <div className={""}>
                    <Percentage key={unit.id} percentage={unit.percentage}/>
                </div>
            </div>
        </>
    );
};

export default Card;