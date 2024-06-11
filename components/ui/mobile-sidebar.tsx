import React from 'react';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import Sidebar from "@/components/ui/sidebar";
import {Menu} from "lucide-react";

const MobileSidebar = () => {
    return (
        <>
            <Sheet>
                <SheetTrigger>
                    <Menu className={"w-12 h-12"}/>
                </SheetTrigger>
                <SheetContent className={"p-0 "} side={"left"}>

                        <Sidebar/>

                </SheetContent>
            </Sheet>

        </>
    );
};

export default MobileSidebar;