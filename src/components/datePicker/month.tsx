export const Month = ({green, red, func, selectedCell,index}:any): JSX.Element => {
    return(
        <>
            <div onClick={() =>func(index)} className={`md:w-[79px] h-[60px] cursor-pointer flex flex-col p-1 border border-[#f6f6f6] hover:bg-slate-100 ${selectedCell === index ? 'bg-[#087592] hover:bg-[#087598]' : ""}`}>
                <span className={`w-full font-normal text-[8px] pl-4 md:pl-8 ${selectedCell === index ? 'text-white' : ""}`}>{green}</span>
                <span className="w-full font-normal text-[8px] pl-4 md:pl-8 text-[#EB5757] ">{red}</span>
                <h2 className={`w-full text-center pt-2 ${selectedCell === index ? 'text-white' : ""}`}>Jul</h2>
            </div>
        </>
    )
} 