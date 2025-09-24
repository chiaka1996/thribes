"use client"

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useAllContext } from "../context/allcontext";
import { usePathname } from "next/navigation";

const NavigationBar = () => {
    const {toggleMobileNavbarFunction} = useAllContext();
    const pathname = usePathname();

    return(
        <div className="w-full px-[16px] md:px-[20px] py-[24px]">
        <nav className="tracking-[3%] leading-[150%] max-w-[1248px] mx-auto h-[88px] flex justify-between items-center md:px-[32px]  border border-l-0 md:border-l-[6px] border-t-0 border-r-[0] border-b-[0] border-l-[#E36A02]">
            <div className="relative w-[99px] md:w-[119px] h-[30px] md:h-[36px]">
            <Image 
             src="/img/white-logo.png"
             alt="thribe community logo"
             fill
             className="object-center"
             />
             </div>

             <div className="hidden md:block flex flex-row justify-between text-[16px] text-[#C2C7D0] font-[600] items-center space-x-[40px]">
               <Link href="/"  className={pathname==="/" ? "text-[#087C72]" : ""}>Home</Link>
                 <Link href="/about" className={pathname==="/about" ? "text-[#087C72]" : ""}>About</Link>
                  <Link href="/events" className={pathname==="/events" ? "text-[#087C72]" : ""}>Events</Link>
                   <Link href="/blog" className={pathname==="/blog" ? "text-[#087C72] font-[600]" : ""}>Resources</Link>
             </div>

               {/* <div className="flex w-[152px] justify-between items-center">
                <Button name="Join Us" classname="w-[101px] h-[47px] md:w-[141px] bg-[#107269]"/>
                <div className="relative w-[24px] h-[24px]">
                <Image src="/img/open_menu_white.png" fill alt="thribe community menu option" className="object-center md:hidden shrink-0" />
                </div>
                </div> */}

                <div className="flex w-[30px] md:w-[152px] justify-between items-center ">
                <Button name="Join Us" classname="w-[101px] h-[47px] md:w-[141px] bg-[#107269] hidden md:block"/>
                <div className="relative w-[24px] h-[24px]" onClick={toggleMobileNavbarFunction}>
                <Image src="/img/open_menu_white.png" fill alt="thribe community menu option" className="object-center md:hidden shrink-0" />
                </div>
                </div>
        </nav>
        </div>
    )
}

export default NavigationBar;