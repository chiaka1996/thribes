import NavigationBar from "../components/navigation2";
import Image from "next/image";
import TeamCard from "../components/teamCard";
import Testimaonial from "../components/testimonials";
import Collaborate from "../components/collaborate";
import JoinCommunity from "../components/joinCommunity";
import Footer from "../components/Footer";

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

            <div className="mt-[120px] bg-[#F5F6F7]">
            <section className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 py-[80px] bg-[#F5F6F7] flex items-center gap-[80px]">
                <h2 className="leading-[100%] text-[46px] font-clash font-[600] tracking-[3%] text-[#0A1A18] flex space-x-[12px] shrink-0">
                <span>Our Partners</span>
                <Image src="/img/relationship.png" width={56} height={56} alt="thribe community" className="object-fit" />
                </h2>
                
                <div className="flex justify-between w-full">
                    <Image src="/img/partner1.png" width={98} height={30} alt="thribe community" className="object-fit" /> 
                    <Image src="/img/partner3.png" width={131} height={30} alt="thribe community" className="object-fit" /> 
                    <Image src="/img/partner2.png" width={49} height={32} alt="thribe community" className="object-fit" /> 
                    <Image src="/img/partner1.png" width={98} height={30} alt="thribe community" className="object-fit" /> 
                    <Image src="/img/partner3.png" width={131} height={30} alt="thribe community" className="object-fit" /> 

                </div>
            </section>
            </div>

            {/* meet the team */}
            <div className="bg-[#001A17]">
            <section className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 py-[120px]">
            <div className="space-y-[16px] text-[#C2C7D0] leading-[150%]">
                <h1 className=" text-[16px] tracking-[16%] ">COMMUNITY ELDERS</h1>
                <h2 className="flex items-center gap-x-[12px] font-clash font-[600] text-[46px] leading-[100%] tracking-[3%] text-[#fff]">
                <span>Meet The Team</span>
                <Image src="/img/meet.png" width={46} height={46} alt="thribe community" className="object-center rounded-full" />
                </h2>
                <h3 className="text-[20px] tracking-[2%]">Our bold team holds the vision, energy, and safety of the village.</h3>
            </div>
            <div className="mt-[80px] flex justify-between flex-wrap">
             <TeamCard classname="bg-[#E8F6F4]" name="Thanau Abbas" nickname="AKA Sultana"  role="The Vision Holder" img="/img/member1.png" />
             <TeamCard classname="bg-[#FEF1E6]" name="Jesse Croffie" nickname="AKA Khing"  role="The Strategist" img="/img/member2.png" />
            <TeamCard classname="bg-[#FFF6DF]" name="Mubarak Shittu" nickname="AKA M.O Shittu"  role="The Grounder " img="/img/member3.png" />
            <TeamCard classname="bg-[#DFE2E6]" name="Kehinde Qudus" nickname="AKA KQ"  role="The Culture Guardian" img="/img/member4.png" />
            
            </div>
            </section>
            </div>

            {/* why join thribe */}
            <div className="bg-[#693101]">
              <section className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 py-[120px]">
                <div className="flex flex-wrap justify-between items-start">
                    <div className="w-[448px]">
                        <h5 className="text-[16px] leading-[150%] tracking-[16%] uppercase text-[#FFE198]">WHY join THR!BE?</h5>
                        <h2 className="font-clash font-[600] text-[46px] leading-[100%] tracking-[3%] text-[#fff] mt-[16px]">
                        Why <span className="text-[#FFE198]">THR!BE</span> Feels 
                        </h2>
                        <h2 className="flex items-center gap-x-[12px] font-clash font-[600] text-[46px] leading-[100%] tracking-[3%] text-[#fff]">
                        <span>Different</span>
                        <Image src="/img/join-team.png" width={46} height={46} alt="thribe community" className="object-center rounded-full" />
                        </h2>
                        <div className="mt-[45px]">
                            <button className="w-[192px] h-[47px] border border-[#FFE198] text-[#FFE198] rounded-[100px] flex gap-[24px] py-[10px] justify-center">
                                <span>Join THR!BE</span>
                                <Image src="/icons/arrow-right.png" width={24} height={24} alt="thribe community" className="object-center rounded-full" />
                            </button>
                        </div>
                    </div>

                    <div className="w-[731px] text-[20px] leading-[150%] tracking-[1%] text-[#fff] space-y-[24px]">
                        <p>There are a lot tech communities but very few feel like home. We don&#39;t gatekeep. We pass the mic. 
                            Come for the growth. Stay for the vibes. THR!BE is your space to:
                        </p>

                        <div className="flex gap-x-[24px] items-center">
                            <Image src="/icons/arrow-right.png" width={24} height={24} alt="thribe community" className="object-center rounded-full" />
                            <span>Connect beyond titles</span>
                        </div>
                        <div className="flex gap-x-[24px] items-center">
                            <Image src="/icons/arrow-right.png" width={24} height={24} alt="thribe community" className="object-center rounded-full" />
                            <span>Learn without shame</span>
                        </div>
                        <div className="flex gap-x-[24px] items-center">
                            <Image src="/icons/arrow-right.png" width={24} height={24} alt="thribe community" className="object-center rounded-full" />
                            <span>Laugh, grow, and build together</span>
                        </div>
                    </div>
                </div>
              </section>
            </div>

            {/* testimonial */}
            <Testimaonial />

            {/* collaborate */}
            <Collaborate />

            {/* join community */}
            <JoinCommunity />

            <Footer />
        </main>
    )
}

export default About;