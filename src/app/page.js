import Image from "next/image";
import NavigationBar from "./components/navigation";
import Button from "./components/Button";
import Community from "./components/community";
import Activities from "./components/Activities";
import PricingList from "./components/pricingList";
import JoinCommunity from "./components/joinCommunity";
import Testimaonial from "./components/testimonials";
import Collaborate from "./components/collaborate";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div className="overflow-x-hidden">
    <NavigationBar />
    <section className="text-[#354764] tracking-[1%] leading-[150%] max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 pt-[80px] md:pt-[105px] text-center">
      <div className="space-y-[16px] tracking-[1%] ">
      <h2 className="text-[16px] md:text-[18px] font-[400] ">Belong. Grow. Thrive!</h2>
      <h1 className="font-clash font-[600] leading-[100%] text-[32px] md:text-[66px] text-[#107269] flex justify-center">
        <span>Welcome to</span>
        <div className="relative w-[126px] md:w-[260px] h-[32px] md:h-[69px]">
          <Image src="/img/thribe.png" fill alt="thribe community" className="object-center" />
        </div>
         </h1>

         <div className="font-[400] max-w-[590px] mx-auto">
          A vibrant, inclusive tech community for all tech builders, thinkers, and doers ready to connect, grow, and thrive together.
         </div>

    <div className="mt-[32px] flex justify-center">
     <button className={`flex items-center space-x-[5px] justify-center bg-[#107269] w-[244px] md:w-[284px] h-[47px] md:h-[56px] cursor-pointer shadow-[4px_4px_0px_0px_#003E39] font-[500] text-[18px] text-[#fff] rounded-[100px]`}>
        <span>Join The community</span>
        <Image src="/img/arrow-right.png" width={24} height={24} alt="thribe community" className="" />
     </button>
     </div>  
      </div>

      {/* image collage for mobile view */}
      <div className="flex flex-col md:hidden justify-between gap-y-[16px] mt-[40px]">
        <div className="flex gap-x-[7px] w-full">
        <div className="relative w-[50%] h-[182px]">
          <Image src="/img/frame1.png" fill alt="thribe community" className="object-fit" />
        </div>    
        <div className="relative w-[50%] h-[182px]">
          <Image src="/img/frame3.png" fill alt="thribe community" className="object-fit" />
        </div>
        </div>
        <div className="relative w-full h-[182px]">
          <Image src="/img/frame2.png" fill alt="thribe community" className="object-fit" />
        </div>
      </div>
      {/* end of image collage for mobile view */}

      {/* image collage for desktop view */}
      <div className="hidden md:flex justify-between space-x-[24px] items-end mt-[-56px]">
        <div className="relative w-[360px] h-[392px]">
          <Image src="/img/frame1.png" fill alt="thribe community" className="object-fit" />
        </div>
        <div className="relative w-[480px] h-[256px]">
          <Image src="/img/frame2.png" fill alt="thribe community" className="object-fit" />
        </div>
        <div className="relative w-[360px] h-[392px]">
          <Image src="/img/frame3.png" fill alt="thribe community" className="object-fit" />
        </div>
      </div>
      {/* image collage for desktop view ends here */}
    </section>
    <div className="relative w-full h-[62px] mt-[40px] md:mt-[120px] md:hidden">
      <Image src="/img/carousel-mobile.png" fill alt="thribe community" className="object-center" />
    </div>
    <div className="relative w-full h-[122px] mt-[40px] md:mt-[120px] hidden md:block">
      <Image src="/img/carousel.png" fill alt="thribe community" className="object-center" />
    </div>


    {/* what is thribe */}
    <section className="py-[40px] md:py-[120px] max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0 flex flex-col xl:flex-row gap-[40px]">
      <div className="w-full xl:w-[600px] space-y-[24px]">
        <div className="font-clash font-[600]">
          <h1 className="text-primaryColor font-[400] text-[16px]">WHAT IS THR!BE?</h1>
          <h2 className="text-[26px] md:text-[46px] leading-[100%] tracking-[3%] mt-[16px]">THR!BE is more than a </h2>
          <h2 className="leading-[120%] text-[26px] md:text-[48px] tracking-[1%] text-primaryColor flex space-x-[12px] mt-[8px]">
            <span>Tech Community</span>
            <div className="relative w-[32px] md:w-[66px] h-[22px] md:h-[46px]">
            <Image src="/img/community.png" fill alt="thribe community" className="object-fit" />
            </div>
            </h2>
        </div>
        <div className="mt-[24px] tracking-[2%] text-secondaryColor">
          A human-first tech community built on connection, growth and collaboration. This is not just another tech group. 
          This is your THR!BE - The tribe that thrives.
        </div>
        <Button name="Join The tribe Now" classname="w-[196px] md:w-[236px] h-[47px] md:h-[56px] bg-primaryColor" />
      </div>

      <div className="w-full xl:w-[600px]">
        <div className="w-full grid-container gap-[40px]">
         <Community
          number="01"
          heading="Learn & Grow"
          paragraph="Stay sharp. Whether you're just starting or scaling, THR!BE gives you access to insights, tools, and real people who help you level up."
          />
         <Community
          number="02"
          heading="Collaborate & Connect"
          paragraph="No one builds alone. Connect with techies across fields, join hands on exciting projects, and form genuine friendships along the way."
          />
           <Community
          number="03"
          heading="Build & Belong"
          paragraph="Build real ideas, shape products, and finally feel like you&#39;re part of something big with purpose, impact, and a community that truly sees you."
          />
         <Community
          number="04"
          heading="Collaborate & Connect"
          paragraph="Your skills can change the world. At THR!BE, we don&#39;t just talk tech - we build solutions that matter. Let&#39;s shape the future."
          />
          </div>
      </div>
    </section>

    {/* why TRibe */}
    <section className="py-[40px] md:py-[120px] w-full bg-[#FEF1E6]">
      <div className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0">
        <div className="space-y-[16px]">
          <h2 className="text-[16px] font-[400] leading-[150%] tracking-[16%] text-[#E36A02]">WHY THR!BE?</h2>
          <h1 className="font-clash text-[26px] md:text-[46px] leading-[100%] font-[600] tracking-[3%]">Why <span className="text-[#E36A02]">THR!BE</span> Exists</h1>
        </div>

        <div className="flex flex-col md:flex-row mt-[24px] md:mt-[48px] justify-between md:gap-x-[24px] gap-y-[24px] md:gap-y-0">
         <div className="relative w-[343px] md:w-[711px] h-[173px] md:h-[360px]">
          <Image src="/img/vid.png" fill alt="thribe community" className="object-center" />
        </div>
        <div className="w-full md:w-[513px] leading-[150%] tracking-[2%] text-[#52514D]">
          <p>
            Tech can feel cold, competitive, and isolating. We&#39;re here to change that. THR!BE was built for humans first, not hustle culture. We mix learning with laughter, growth with community, and celebration with impact. We’re building loudly, not quietly.
            We&#39;re here to grow together. We believe in showing up fully, flaws and all.
          </p>
          <p className=" mt-[30px] md:mt-[60px] mb-[24px]">
            This is not just another tech group. This is your tribe.
          </p>
          <Button name="Join THR!BE" classname="bg-[#B15301] w-[144px] md:w-[184px] h-[47px] md:h-[56px] shadow-[4px_4px_0px_0px_#693101]" />
        </div>
        </div>
      </div>
    </section>

    {/* what we do inside thribe */}
    <section className="py-[40px] md:py-[120px] w-full bg-[#013D37]">
      <div className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0">
        <div className="space-y-[16px] text-[#C2C7D0] leading-[150%]">
        <h1 className=" text-[16px] tracking-[16%] ">WHAT WE DO INSIDE THR!BE</h1>
        <h2 className="flex items-center gap-x-[12px] font-clash font-[600] text-[26px] md:text-[46px] leading-[100%] tracking-[3%] text-[#fff]">
          <span>Community Activities</span>
            <div className="relative w-[32px] md:w-[46px] h-[32px] md:h-[46px] rounded-full">
            <Image src="/img/community2.png" fill alt="thribe community" className="object-fit rounded-full" />
            </div>
          
          </h2>
          <h3 className="tracking-[2%]">There&#39;s never a dull moment in here. We keep it real. We keep it moving. We learn. We laugh. We launch. Repeat.</h3>
        </div>

        <div className="mt-[40] md:mt-[80px] flex flex-row flex-wrap px-0 md:px-[30px] justify-between gap-y-[40px] md:gap-y-[120px]">
          <Activities 
            image="/img/microphone.png"
            title="THR!BE Lives & AMAs"
          />
           <Activities 
            image="/img/paint.png"
            title="Challenges & Build Weeks"
          />
           <Activities 
            image="/img/chat.png"
            title="Chit-Chat Fridays"
          />
          <Activities 
            image="/img/group.png"
            title="Community-Led Events"
          />
          <Activities 
            image="/img/mentorship.png"
            title="Mentorship Sessions"
          />
          <Activities 
            image="/img/hut.png"
            title="Hut Conversations"
          />

        </div>
      </div>
    </section>

    {/* testimonials */}
    <Testimaonial />

    {/* pricing */}
    <section className="py-[120px] leading-[150%]">
      <div className="mx-auto max-w-[1248px] px-[16px] md:px-[20px] xl:px-0">
        
        <h1 className="text-[16px] tracking-[16%] text-[#107269]">PRICING</h1>
        <h3 className="font-clash font-[600] my-[16px] text-[#0A1A18] text-[46px] leading-[100%] tracking-[3%] flex items-center gap-x-[12px]">
          <span>Choose Your THR!BE Experience</span>
          <Image src="/img/pricing.png" width={46} height={46} alt="thribe community testimonial" className="object-fit shrink-0" />
        </h3>

        <div className="mt-[80px] flex gap-x-[28px] justify-between">
          <div>
            <h3 className="font-[600] text-[20px] tracking-[3%] text-[#354764]">Payment frequency</h3>
            <ul className="mt-[40px] text-secondaryColor space-y-[24px]">
              <li className="flex items-center gap-x-[24px]">
                <input type="radio" id="monthly" name="payment" value="monthly" />
                <label htmlFor="monthly">Monthly</label>
              </li>
               <li className="flex items-center gap-x-[24px]">
                <input type="radio" id="quarterly" name="payment" value="quaterly" />
                <label htmlFor="quarterly">Quaterly (save 15%)</label>
              </li>
              <li className="flex items-center gap-x-[24px]">
                <input type="radio" id="yearly" name="payment" value="yearly" />
                <label htmlFor="yearly">Yearly (save 20%)</label>
              </li>
            </ul>
          </div>

          <div className="relative bg-[#FEF1E6] p-[60px] rounded-[40px] w-[480px]">
            <div className="space-y-[40px]">
              <h2 className="text-[20px] font-[600] leading-[120%] tracking-[3%] text-[#0A1A18]">Free Membership</h2>
              <h3 className="text-[32px] font-clash font-[600] text-[#F97502] leading-[100%] tracking-[3%]">Always Free</h3>
              <h4 className="text-[20px] leading-[100%] tracking-[2%] text-secondaryColor">The free  plan includes:</h4>

              <ul className="space-y-[16px] mt-[24px]">
                <PricingList title="Access to the main community" />
                <PricingList title="Join all general lives & chats" />
                <PricingList title="Access blog/podcast content" />
                <PricingList title="Participate in challenges & general community activities" />
                <PricingList title="Access to collaboration" />
                <PricingList title="Access to job listings & posts" />
              </ul>
            </div>

             <div className="absolute bottom-[60px] left-[60px] w-[calc(100%-120px)] ">
               <Button name="Join THR!BE for free" classname="bg-[#B15301] w-[100%] shadow-[4px_4px_0px_0px_#693101]" />
            </div>
          </div>

          <div className="relative bg-[#E8F6F4] p-[60px] rounded-[40px] w-[480px] min-h-[742px]">
            <div className="space-y-[40px]">
              <h2 className="text-[20px] font-[600] leading-[120%] tracking-[3%] text-[#0A1A18]">Premium Membership</h2>
              <h3 className="text-[32px] font-clash font-[600] text-[#107269] leading-[100%] tracking-[3%]">N96,000/Year</h3>
              <h4 className="text-[20px] leading-[100%] tracking-[2%] text-secondaryColor">The premium  plan includes:</h4>

              <ul className="space-y-[16px] mt-[24px]">
                <PricingList title="Everything in free plan" />
                <PricingList title="Monthly Masterclasses" />
                <PricingList title="Discounts on external paid events" />
                <PricingList title="Project reviews" />
                <PricingList title="Exclusive job boards" />
                <PricingList title="Legal employment contract reviews and advise." />
                <PricingList title="Yearly merch & rewards" />
              </ul>
            </div>

            <div className="absolute bottom-[60px] left-[60px] w-[calc(100%-120px)] ">
               <Button name="Join the waiting list" classname="bg-primaryColor w-full shadow-[4px_4px_0px_0px_#003E39]" />
            </div>
          </div>

        </div>
      </div> 
    </section>

      <Collaborate />
      <JoinCommunity />
      <Footer />
   </div>
  );
}
