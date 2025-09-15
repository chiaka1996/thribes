import NavigationBar from "../components/navigation";
import Image from "next/image";

const Events = () => {
    return(
        <main>
            <NavigationBar />
            <section className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[148px] pb-[159px] tracking-[1%] space-y-[40px]">
            <div className="max-w-[1170px]">
                <h1 className="text-[16px] leading-[150%] tracking-[16%] text-[#087C72]">THR!BE EVENTS</h1>
                <h2 className="font-[600] leading-[120%] text-[#0A1A18] text-[66px] tracking-[1%] font-clash">Events That Make Tech Feel Human</h2>
                <p className="max-w-[760px] text-[20px] leading-[150%] tracking-[1%] text-secondaryColor">
                Not just panels. Not just vibes. 
                These are conversations, masterclasses, and challenges designed to bring real techies together.
                </p>

                <div className="mt-[40px]">
                   <button className={`flex gap-x-[24px] items-center justify-center w-[292px] bg-[#107269] cursor-pointer shadow-[4px_4px_0px_0px_#003E39] font-[500] text-[18px] text-[#fff] h-[56px] rounded-[100px]`}>
                    <span>See What&#39;s Comming</span>
                    <Image src="/icons/arrow-white.png" width={24} height={24} alt="thribe community" className="object-center" />
                  </button> 
                </div>
            </div>
            </section>
            <div className="w-full h-[12px] relative">
                <Image src="/img/legal-nav.png" fill alt="navigation" />
            </div> 
            <section className="bg-[#0A1A18] max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pY-[120px] tracking-[1%] space-y-[40px]">
                upcoming events
            </section>
        </main>
    )
}

export default Events;