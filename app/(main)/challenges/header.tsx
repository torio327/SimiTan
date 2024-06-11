import React from 'react';
import {Progress} from "@/components/ui/progress";
type Props={
    percentage:number;
}

const Header = ({percentage}:Props) => {
    return (
        <>
            <header className={"flex flex-col justify-center gap-y-2"}>
                <p className={"text-center"}>{Math.round(percentage)}</p>
                <Progress value={percentage} className={"mx-auto w-[350px] lg:w-[500px] h-7 bg-slate-400"}/>
            </header>
        </>
    );
};

export default Header;