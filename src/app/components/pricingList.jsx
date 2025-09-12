import Image from "next/image";

const PricingList = ({title}) => {
    return(
    <li className="flex gap-x-[16px] block items-start">
        <div className="shrink-0"><Image src="/img/check.png" width={20} height={20} alt="thribe community pricing" className="shrink-0" /></div>
        <div className="mt-[-3px]">{title}</div>
    </li>
    )
}

export default PricingList;