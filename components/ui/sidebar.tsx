import React from 'react';
import SidebarItem from "@/components/ui/sidebar-item";
import Link from "next/link";
import {cn} from "@/lib/utils";

type Props={
    className?:string
}
const Sidebar = ({className}:Props) => {
    return (
        <>
            <div className={cn(
                "flex flex-col left-0 top-0 lg:fixed bg-red-500 lg:w-[256px] h-full ",
                className
            )}>
                <div className={"flex justify-center"}>
                    <Link href={"/"} className=" text-3xl text-white p-4">SimiTan</Link>
                </div>
                <div className={"mt-10 flex flex-col gap-y-7 px-2"}>
                    <SidebarItem title={"about"} imageSrc={"/house.svg"} href={"/"}/>
                    <SidebarItem title={"learn"} imageSrc={"/book-plus.svg"} href={"/learn"}/>

                </div>

            </div>
        </>

    );
};

export default Sidebar;