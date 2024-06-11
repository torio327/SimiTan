import React from 'react';
import Sidebar from "@/components/ui/sidebar";
import MobileSidebar from "@/components/ui/mobile-sidebar";
import MobileHeader from "@/components/ui/mobile-header";
type Props={
    children:React.ReactNode;
}
const Layout = ({children}:Props) => {
    return (
        <div className={"flex flex-col"}>
                <MobileHeader className={"lg:hidden"}/>
                <Sidebar className={"hidden lg:flex"}/>
            <main className="h-full lg:pl-[256px]">
                <div className={"pt-[50px] max-w-[1056px] mx-auto h-full lg:m-3"}>
                   {children}
                </div>
            </main>

        </div>

    );
};

export default Layout;