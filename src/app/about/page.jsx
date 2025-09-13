import NavigationBar from "../components/navigation2";
import Image from "next/image";

const About = () => {
    return (
        <main>
            <section className=" bg-[linear-gradient(180deg,rgba(2,18,16,0.54)_25.03%,rgba(2,18,16,0.9)_79.92%),url('https://res.cloudinary.com/chiaka/image/upload/v1757761490/thribe_hyoxv7.png')] bg-cover bg-center w-full pb-[142px]">
                <NavigationBar />
                <div className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 text-[#fff] tracking-[1%] space-y-[40px]">
                    <h2 className="font-clash mt-[369px] font-[600] leading-[100%] text-[66px] flex items-center gap-x-[12px]">
                    <span>Our Goal</span>
                    <div className="relative w-[48px] h-[48px]">
                    <Image src="/img/goal.png" fill alt="thribe community goal" className="object-cover shrink-0" />
                    </div>
                    </h2>
                    <div className="text-[20px] leading-[150%] max-w-[764px]">
                        Is to build a tech-powered, value-driven community where individuals 
                        don&#39;t just exist but build valuable relationships, gain visibility, collaborate and 
                        contribute to real-world impact. 
                        A tribe of people that thrive through connection, collaboration, and collective growth.
                    </div>
                </div>
            </section>
            
            <section className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[120px] space-y-[40px]">
                <div className="flex justify-between items-center">
                    <div className="relative w-[480px] h-[446px] rounded-[20px]">
                    <Image src="https://res.cloudinary.com/chiaka/image/upload/v1757778453/thribe3_sd49zi.png" fill alt="thribe community goal" className="object-center rounded-[20px]" />
                    </div>
                    <div className="max-w-[726px] space-y-[24px] text-[20px] leading-[150%] text-secondaryColor tracking-[1%]">
                        <h2 className="font-[600] font-clash text-[46px] text-[#0A1A18] leading-[100%]"><span className="text-primaryColor">THR!BE</span> began as a quiet escape</h2>
                        <p>A place to laugh, breathe, and break free from the chaos of work and burnout.
                            What started as one person looking for connection became a movement of techies, creatives, 
                            and builders craving something deeper: a human space in tech. We didn&#39;t want just another curated, 
                            cold community, we wanted something warm. Real. Imperfect. A village where people could grow, rest, pivot, 
                            laugh, mess up and still belong.
                        </p>

                        <p>THR!BE exists because we were never meant to do this alone. We&#39;re building the space we wish we 
                            had and leaving the door wide open for the next person. Not just to join… but to thrive.
                        </p>
                    </div>
                </div>

                {/* who we are */}
               <div className="w-full bg-[#000] flex justify-between items-center p-[40px] rounded-[20px] bg-[#E8F6F4]">
                    <div className="w-[679px] space-y-[12px] text-[20px] leading-[150%] text-secondaryColor tracking-[1%]">
                        <h2 className="font-[600] font-clash text-[46px] text-[#087C72] leading-[100%]">Who We Are</h2>
                        <div>THR!BE is not your regular tech community. We&#39;re a collective of thinkers, makers, designers, developers, 
                            product managers, and creative minds building with heart. We&#39;re creating connection. 
                            We&#39;re not just here to upskill, we&#39;re here to thrive.
                        <p>
                        This is your space to grow, laugh, collaborate, cry a little, and build work that matters. 
                        </p>
                        </div>
                    </div>
                    <div className="relative w-[445px] h-[253px] rounded-[20px] bg-[#C2C7D0]">
                    <Image src="https://res.cloudinary.com/chiaka/image/upload/v1757778243/thribe1_n0s9i8.png" fill alt="thribe community goal" className="object-cover rounded-[20px]" />
                    </div>
                </div>

                {/* where we're headed */}
                 <div className="w-full flex justify-between items-center p-[40px] rounded-[20px] bg-[#FEF1E6]">
                    <div className="w-[679px] space-y-[12px] text-[20px] leading-[150%] text-secondaryColor tracking-[1%]">
                        <h2 className="font-[600] font-clash text-[46px] text-[#B15301] leading-[100%]">Where We&#39;re Headed</h2>
                        <div>We want to be the most intentional, human-first tech community on the continent. 
                            A space that doesn&#39;t just celebrate the loud wins, but sees the quiet efforts
                        <p>We&#39;re growing a network of support, learning, opportunity, and fun.</p>
                        <p>
                        THR!BE is becoming a movement and you&#39;re part of it.
                        </p>
                        </div>
                    </div>
                    <div className="relative w-[445px] h-[253px] rounded-[20px] bg-[#C2C7D0]">
                    <Image src="https://res.cloudinary.com/chiaka/image/upload/v1757778349/thribe2_kfrqrc.png" fill alt="thribe community goal" className="object-cover rounded-[20px]" />
                    </div>
                </div>
                
                {/* our vision */}
                 <div className="w-full flex justify-between items-center p-[40px] rounded-[20px] bg-[#FFF6DF]">
                    <div className="w-[679px] space-y-[12px] text-[20px] leading-[150%] text-secondaryColor tracking-[1%]">
                        <h2 className="font-[600] font-clash text-[46px] text-[#6B5F40] leading-[100%]">Our Vision</h2>
                        <div>
                            To become the most empowering and connected tech tribe in Africa and beyond. 
                            A tribe of people from any background who can thrive through community, build with purpose, 
                            and rise with others. We see a future where collaboration beats competition, 
                            access replaces gatekeeping and growth is shared, not siloed.             
                        </div>
                    </div>
                    <div className="relative w-[445px] h-[253px] rounded-[20px] bg-[#C2C7D0]">
                    <Image src="https://res.cloudinary.com/chiaka/image/upload/v1757778258/Rectangle_17083_yson1l.png" fill alt="thribe community goal" className="object-cover rounded-[20px]" />
                    </div>
                </div>


            </section>
        </main>
    )
}

export default About;