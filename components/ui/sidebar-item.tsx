import React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Props={
    title:string,
    imageSrc:string,
    href:string
}

const SidebarItem = ({title,imageSrc,href}:Props) => {
    return (
        <div>
            <Button variant={"blueBack"} className={" w-full"}>
                <Link href={href} className={"flex items-center justify-start w-full  gap-x-4"}>
                    <Image src={imageSrc} alt={title} width={40} height={40}/>
                    <p className={"text-center"}>{title}</p>
                </Link>

            </Button>
        </div>
    );
};

export default SidebarItem;