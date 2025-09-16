import Image from "next/image";
import Button from "./Button";

const EventBanner = ({img, type, description, background, btnClassname, name, role, date, time, btnText, venue}) => {
    return(
         <div className="text-[20px] leading-[150%] tracking-[1%]">
                    <div className={`p-[40px] w-full rounded-[40px] ${background} flex justify-between items-center`}>
                        <div className="w-[150px] h-[212px] bg-[#fff] flex justify-center items-center"> 
                            <div className="relative w-[129px] h-[192px]">
                            <Image src={img} fill alt="thribe community event" className="bg-cover rounded-[5px]"/>
                            </div>
                        </div>

                        <div className="w-[547px]">
                            <h2 className="font-[700] text-[#0A1A18]">{type}</h2>
                            <p className="mt-[12px] text-secondaryColor"> 
                            {description}
                            </p>
                             <div className="mt-[24px]">
                            <h5 className="font-[500] text-[#0A1A18]">{name}</h5>
                            <p className="text-[18px] text-secondaryColor">{role}</p>
                        </div>
                        </div>

                        <div className="flex flex-col gap-y-[12px] text-secondaryColor text-right">
                            <h3 className="font-[600] text-[32px] text-[#0A1A18]">{date}</h3>
                            <span>{time}</span>
                            <span>{venue}</span>
                        </div>

                        <Button name={btnText} classname={`${btnClassname}`}/>
                    </div>

                </div>
    )
}

export default EventBanner;