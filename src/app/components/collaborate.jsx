import Image from "next/image";

const Collaborate = () => {
    return(
        <section className="py-[40px] md:py-[120px] w-full">
                 <div className="max-w-[1248px] mx-auto px-[16px] md:px-[20px] xl:px-0">
                 <h1 className="text-[16px] tracking-[16%] text-[#354764] uppercase">Support, Partner, Collaborate</h1>
                  <h3 className="font-clash font-[600] my-[16px] text-[#0A1A18] text-[26px] md:text-[46px] leading-[100%] tracking-[3%] flex text-left flex-row flex-wrap md:items-center gap-y-[11px] md:gap-y-0 gap-x-[5px]">
                  <span>Let&#39;s Build Something</span>
                   <div className="flex gap-x-[12px]">
                    <span>Bigger</span>
                  <div className="relative w-[32px] md:w-[46px] h-[32px] md:h-[46px] rounded-full shrink-0">
                    <Image src="/img/build.png" fill alt="thribe community" className="object-fit rounded-full shrink-0" />
                    </div>
                    </div>
                  {/* <Image src="/img/build.png" width={46} height={46} alt="thribe community testimonial" className="object-fit shrink-0" /> */}
                </h3>
                 <h3 className="tracking-[2%] text-secondaryColor mt-[8px]">Partner With Us: We&#39;re open to brand collaboration, speaker partnerships, and startup support.</h3>
                <div className="mt-[40px] md:mt-[80px] flex flex-wrap lg:flex-nowrap justify-between gap-[40px]">
                <div className="rounded-[16px] sm:rounded-[40px] border border-[#17A194] bg-[#B7E2DE] p-[24px] sm:p-[40px] min-h-[459px] sm:min-h-[653px] w-full sm:w-[600px] mx-auto">
                  <div className="relative w-full h-[213px] sm:h-[373px] rounded-[11px] sm:rounded-[20px] mx-auto">
                    <Image src="/img/build2.png" fill alt="build with thribe community" className="object-center rounded-[20px]" />
                  </div>
                  <div className="mt-[16px] sm:mt-[24px] space-y-[13px] sm:space-y-[24px] text-[#0A1A18]">
                    <h2 className="font-clash leading-[120%] tracking-[3%] font-[clash} font-[600]">Sponsor a THR!BE member</h2>
                    <p className="text-[16px] tracking-[2%]">
                      Help someone learn, grow, and THR!VE. Your support unlocks access to tools, events, and life-changing opportunities. 
                      Pay it forward
                    </p>
        
                    <div>
                       <button className={`cursor-pointer bg-[#107269] w-[104px] shadow-[4px_4px_0px_0px_#003E39] font-[500] text-[18px] text-[#fff] h-[44px] sm:h-[56px] rounded-[100px]`}>
                         hello
                      </button>
                    </div>
                  </div>
                </div>
        
                 <div className="rounded-[16px] sm:rounded-[40px] border border-[#E8CD8A] bg-[#FFF1D0] p-[24px] sm:p-[40px] min-h-full sm:min-h-[653px] w-full sm:w-[600px] mx-auto">
                  <div className="relative  w-full h-[213px] sm:h-[373px] rounded-[20px] mx-auto bg-[#D3D7DA]">
                    <Image src="/img/build3.png" fill alt="build with thribe community" className="object-center rounded-[20px]" />
                  </div>
                  <div className="mt-[16px] sm:mt-[24px] space-y-[13px] sm:space-y-[24px] text-[#0A1A18]">
                    <h2 className="leading-[120%] tracking-[3%] font-[clash} font-[600]">Buy THR!BE Merch</h2>
                    <p className="text-[16px] tracking-[2%]">
                      Rock the vibe, rep the tribe. Every tee, hoodie and sticker fuels the mission. Style your purpose - grab yours now!
                    </p>
        
                    <div>
                       <button className={`cursor-pointer bg-[#107269] w-[190px] shadow-[4px_4px_0px_0px_#003E39] font-[500] text-[18px] text-[#fff] h-[44px] sm:h-[56px] rounded-[100px]`}>
                         Coming soon
                      </button>
                    </div>
                  </div>
        
                </div>
                </div>
                 </div>
        
              </section>
    )
}

export default Collaborate;