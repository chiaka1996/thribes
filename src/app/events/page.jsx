import NavigationBar from "../components/navigation";
import Image from "next/image";
import Button from "../components/Button";
import Event_banner from "../components/Event_banner"

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
            <main className="w-full bg-[#0A1A18]">
            <section className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 py-[120px] tracking-[1%]">
               <h3 className="text-[16px] leading-[150%] tracking-[16%] text-[#C2C7D0]">NEW!</h3>
                <h2 className="flex items-center gap-x-[12px] font-clash font-[600] text-[48px] leading-[120%] tracking-[1%] text-[#fff]">
                <span>Upcoming Events</span>
                <Image src="/icons/calender.png" width={46} height={46} alt="thribe community" className="object-center" />
                </h2>

                <div className="mt-[48px] ">
                <Event_banner
                img="/img/event-banner1.png"
                type="Webinar"
                description="Ever wondered why some products just click and others frustrate you? The secret is simple: they were (or weren&#39;t) made for humans."
                background="bg-[#E8F6F4]" 
                btnClassname="bg-[#107269] w-[190px]" 
                 btnText="Attend Event"
                name="Khadijah Kuku" 
                role="UX Designer" 
                date="Sept 19" 
                time="2025 | 5pm WAT" 
                venue="Google meet"
                />
                </div>

                <div className="mt-[80px]">
                    <h3 className="text-[16px] leading-[150%] tracking-[16%] text-[#C2C7D0]">YOU MISSED...</h3>
                    <h2 className="flex items-center gap-x-[12px] font-clash font-[600] text-[48px] leading-[120%] tracking-[1%] text-[#fff]">
                    <span>Past Events</span>
                    <Image src="/img/clock.png" width={46} height={46} alt="thribe community" className="object-center" />
                    </h2>
                    <div className="mt-[48px] ">
                    <Event_banner
                    img="/img/event-banner3.png"
                    type="Webinar"
                    description="We all know the grind: long hours in a chair, eyes glued to a screen. It's a rite of passage for techies, but it comes with a real physical toll - the dreaded stiff neck."
                    background="bg-[#F5F6F7]" 
                    btnClassname="bg-[#8AA6A3] w-[190px] shadow-[4px_4px_0px_0px_#64C0B7]" 
                    btnText="View Event"
                    name="Dr. Ebenezer G." 
                    role="Medical Doctor" 
                    date="August 23" 
                    time="2025 | 6pm WAT" 
                    venue="Google meet"
                    />
                </div>
                </div>
            </section>
            </main>
        </main>
    )
}

export default Events;