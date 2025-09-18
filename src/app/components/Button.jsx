
const Button = ({name, classname}) => {
    return(
     <button className={`${classname} cursor-pointer shadow-[4px_4px_0px_0px_#003E39] font-[500] text-[18px] text-[#fff] h-[47px] md:h-[56px] rounded-[100px]`}>
        {name}
     </button>   
    )
}
export default Button;