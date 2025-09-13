const Community = ({number, heading, paragraph}) => {
    return (
            <div className="w-[282px]">
                <div className="font-[600] text-[20px] leading-[120%] tracking-[1%] text-[#087C72]">{number}</div>
                <h3 className="text-[20px] leading-[120%] tracking-[3%] text-[#0A1A18] font-clash font-[600] mt-[16px] mb-[24px]">{heading}</h3>
                <p className="leading-[150%] tracking-[2%] text-secondaryColor">
                {paragraph}
                </p>
          </div>
    )
}

export default Community;