"use client"
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useAllContext } from "../context/allcontext";
import { usePathname } from "next/navigation";

const MobileNavigationBar = () => {
    const {toggleNavbar, toggleMobileNavbarFunction} = useAllContext();
    const pathname = usePathname();
    
    return(
        <div className={`z-50 w-full px-[16px] md:px-[20px] py-[24px] fixed top-0 left-0 w-full h-[100vh] bg-[#fff] ${!toggleNavbar ? "hidden" : ''}`}>
        <nav className="tracking-[3%] leading-[150%] md:max-w-[1248px] mx-auto h-[48px] md:h-[88px] flex justify-between items-center md:px-[32px]  border border-l-0 md:border-l-[6px] border-t-0 border-r-[0] border-b-[0] border-l-[#E36A02]">
            <div className="relative w-[99px] md:w-[119px] h-[30px] md:h-[36px]">
            <Image 
             src="/logo.png"
             alt="thribe community logo"
             fill
             className="object-center"
             />
             </div>
            
                <div className="relative w-[24px] h-[24px]" onClick={toggleMobileNavbarFunction}>  
                <Image src="/icons/close-square.png" fill alt="thribe community menu option" className="object-center md:hidden shrink-0" />
                </div>

        </nav>

            <ul className="text-[16px] text-[#354764] tracking-[2%] space-y-[40px] py-[40px] w-full font-[600]">
                <li><Link href="/" className={pathname==="/" ? "text-[#087C72]" : ""}>Home</Link></li>
                <li> <Link href="/about" className={pathname==="/about" ? "text-[#087C72]" : ""}>About</Link></li>
                <li> <Link href="/events" className={pathname==="/events" ? "text-[#087C72]" : ""}>Events</Link></li>
                <li> <Link href="/blog" className={pathname==="/blog" ? "text-[#087C72]" : ""}>Blog & News</Link></li>
                 <li className="flex gap-x-[10px] items-center"> 
                    <Link href="#">Podcast</Link>
                    <button className="w-[112px] h-[32px] bg-[#FEF1E6] rounded-[16px] py-[4px] px-[8px] text-[16px] leading-[150%] tracking-[2%] text-[#B15301]">Coming Soon</button>
                </li>
                <Button name="Join Us" classname="w-[141px] h-[56px] bg-[#107269]"/>
            </ul>
    
        <div className="absolute bg-[#E36A02] w-full h-[6px] bottom-0 left-0"></div> 
        </div>
    )
}

export default MobileNavigationBar;