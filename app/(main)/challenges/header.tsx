import React from 'react';
import {Progress} from "@/components/ui/progress";
type Props={
    percentage:number;
}

const Header = ({percentage}:Props) => {
    return (
        <>
            <header className={"flex justify-center gap-x-2"}>
                <Progress value={percentage} className={"w-[500px] h-7 bg-slate-400"} />
                <p>{Math.round(percentage)}</p>
            </header>
        </>
    );
};

export default Header;