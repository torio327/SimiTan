import React from 'react';
import MobileSidebar from "@/components/ui/mobile-sidebar";
import {cn} from "@/lib/utils";
type Props={
    className?:string
}
const MobileHeader = ({className}:Props) => {
    return (
        <nav className={cn(
            "bg-rose-500 w-full ",
            className
        )}>
            <MobileSidebar/>
        </nav>
    );
};

export default MobileHeader;