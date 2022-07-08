import DropUl from  "./dropUl"

const DropDownLayout = ():JSX.Element => {
    return (
        <>
        <div style={{boxShadow: "4px 24px 60px rgba(109, 141, 173, 0.25)"}} className="rounded-[21px] z-40 bg-white top-[40px] md:top-[60px] left-0 w-[200px]  md:w-[320px] flex flex-col absolute jusify-center items-center">
            <div className="p-4 text-center border-b">
                <h2 className="text-[14px] text-black">Миний хувийн санхүү</h2>
                <p className="text=[#8f8f8f] text-[12px]">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className="w-full flex flex-col justify-center  py-2">
                <DropUl name={"Групын нэр 1"} />
                <DropUl name={"Групын нэр 2"} />
                <DropUl name={"Групын нэр 3"} />
            </div>
            <div className="p-4 w-full text-center border-t flex justify-between">
                <button>Бүгд</button>
                <button className="rounded-full bg-[#81D0DF] text-white p-1 md:p-2 font-semibold text-[12px] md:text-[14px] tracking-wide"> +НЭМЭХ</button>
            </div>

        </div>
        </>
    )
}
export default DropDownLayout