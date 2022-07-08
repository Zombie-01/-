
const User = ():JSX.Element => {
    return(
        <>
            <div className="mx-2 py-2 md:py-[30px] md:mx-[30px] flex justify-between items-center border-b-2">
            <div>
                <h2 className="text-[#087592] text-[16px] md:text-[30px] leading-none font-semibold">Групп</h2>
                <p className="text-[12px] md:text-[14px] text-[#5f5e61] font-semibold"> All project in current month</p>
            </div>
            <button className="rounded-full bg-[#81D0DF] text-white p-1 md:p-2 font-semibold text-[12px] md:text-[14px] tracking-wide"> +НЭМЭХ</button>
        </div>
        </>
    )
}
export default User