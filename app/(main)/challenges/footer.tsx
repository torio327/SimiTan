import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {Circle, X} from "lucide-react";
type Props={
    status:string;
    onCheck:()=>void;
    pending:boolean
}

const Footer = ({status,onCheck,pending}:Props) => {


    return (
        <>
            <div className={"h-full mx-auto flex items-center gap-x-8 lg:gap-x-40 justify-between px-6 lg:px-10"}>
                {status==="correct"&&(
                    <div className={"flex items-center gap-x-8"}>
                        <Circle className={"text-green-500 w-20 h-20"}/>
                        <h1 className={"text-4xl"}>Correct!</h1>

                    </div>
                )}
                {status==="wrong"&&(
                    <div className={"flex items-center gap-x-8"}>
                        <X className={"text-rose-500 w-20 h-20"}/>
                        <h1 className={"text-4xl"}>Wrong...Try again</h1>
                    </div>
                )}
                <Button variant={"blueBack"} disabled={pending} onClick={onCheck}>Continue</Button>
            </div>

        </>
    );
};

export default Footer;