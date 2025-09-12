import Image from "next/image";
import Button from "./Button";

const JoinCommunity = () => {
    return (
        <section className="bg-[#FFF6DF] py-[120px]">
          <div className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0">
           <h1 className="text-[16px] leading-[150%] tracking-[16%] text-[#107269]">THR!BE WITH US FOR Free</h1>
                <h3 className="font-clash font-[600] my-[16px] text-[#0A1A18] text-[46px] leading-[100%] tracking-[3%] flex items-center gap-x-[12px]">
                <span>Join the Community</span>
                <Image src="/img/join.png" width={46} height={46} alt="thribe community testimonial" className="object-fit shrink-0" />
            </h3>

            <div className="leading-[150%] tracking-[3%] w-full mt-[48px] flex gap-x-[24px] gap-y-[40px] flex-wrap items-end">
                    <label htmlFor="names" className="">My name is</label>
                    <input id="names" type="text" placeholder="Enter your full name"  className="w-[278px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/>
                    <label htmlFor="job" className="">and I am a </label>
                    <div><input id="job" type="text" placeholder="What field are you in? (developer, designer...)"  className="w-[384px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/> .</div>
                    <label htmlFor="job" className="">My email address is</label>
                    <div><input id="job" type="text" placeholder="Enter your email address?"  className="w-[396px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/> .</div>
                    <label htmlFor="job" className="">I will love to join THRIBE because </label>
                    <div><input id="job" type="text" placeholder="Tell us why you would love to join THR!BE"  className="w-[502px] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/></div>
                    <div className="block min-w-[100%]"><input id="job" type="text" placeholder="Tell us why you would love to join THR!BE"  className="w-[100%] placeholder-[#87857F] text-[18px]  border border-x-0 border-t-0  border-b-[#0A1A18] inline px-[5px] outline-none"/></div>
            </div>
            <div className="mt-[48px]">
             <Button name="Submit" classname="w-[141px] bg-[#107269]"/>
             </div>
          </div>
        </section>
    )
}

export default JoinCommunity;