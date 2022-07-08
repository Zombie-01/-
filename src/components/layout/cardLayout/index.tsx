import { useRouter } from 'next/router'
import { FaRegClock,FaHome } from 'react-icons/fa'
import styles from './cardLayout.module.scss'
import { MiniBtn } from "../../buttons"

export const CardLayout = ({name,href,icon, color}:any):JSX.Element => {
    const router = useRouter()
    const userHref = href.replace("category", name)
    console.log(userHref);
    return(
        <>
            <div onClick={()=> router.replace(`${userHref}`)} className={`${styles.card} bg-white border p-4 md:p-[20px] flex flex-col m-2 md:w-[240px] relative rounded-[21px] `}>
                <span style={{boxShadow: "0px 10px 11px -6px rgba(253, 113, 175, 0.5)"}} className={`absolute w-[38px] h-[38px] rounded-full ${color} top-[-15px] left-0 md:left-[30px] flex justify-center items-center `}>{icon}</span>
                <h2 className="font-semibold text-[14px] text-[#121127] pb-[20px] pt-[10px]">{name}</h2>
                <div className="flex gap-2 py-2"><span className="w-[20px]"><FaRegClock className="text-lg " /></span><span className="text-[#5f5e61] text-[12px] ">Гэр ахуй руу 1’000’000₮</span></div>
                <div className="flex gap-2  py-2"><span className="w-[20px]"><FaHome className="text-lg " /></span><span className="text-[#5f5e61] text-[12px] leading-none ">Байгууллагаас авдаг тогтмол 
орлого юм</span></div>
                <div className="border-t pt-[20px]  flex justify-between items-center">
                    <div>
                        <span className="text-[8px] font-medium text-[#5f5e61]">Орлого</span>
                        <h5 className="text-[8px] text-[#00b0d7] font-medium">2'000'000</h5>
                    </div>
                    <MiniBtn style={"bg-[#00b0d7] text-white text-[10px] "} item={"2'000'000"} />
                    <div>
                        <span className="text-[8px] font-medium text-[#5f5e61]">Зарлага</span>
                        <h5 className="text-[8px] text-[#00b0d7] font-medium">2'000'000</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
