import { FaTrashAlt,FaPlus } from 'react-icons/fa'
import { useRouter } from 'next/router'

export const GroupLayout = ({img,name,date,members,href,styles,textStyles}:any):JSX.Element => {
    const router = useRouter() 
    return(
        <>
                <div onClick={() => router.replace(`/users/${name}/category`)} className={`${styles} rounded-[21px] flex justify-center items-center w-[256px] h-[268px] flex-col p-4`} style={ {boxShadow: "0px 14px 40px rgba(42, 80, 118, 0.25)" } }>
                    <img className="rounded-full bg-white md:w-[90px] md:h-[90px]"  src="" alt="" />
                    <div className={`${textStyles} font-semibold text-center text-[16px] pt-4 pb-2 `}>{name}</div>
                    <p className={` pb-4`}>{date}</p>
                    
                    <div className=" border-t w-full flex justify-between items-center">
                        
                        { members ? <div className='pt-4'>
                            <p className="text-[11px]">Багийн гишүүд</p>
                            <div className="flex gap-2 ">
                                <div className="imgs flex gap-2">
                                    <img className="rounded-full bg-white w-[24px] h-[24px]" src="" alt="" />
                                    <img className="rounded-full bg-white w-[24px] h-[24px]" src="" alt="" />
                                    <img className="rounded-full bg-white w-[24px] h-[24px]" src="" alt="" />
                                </div>
                                <button className=" border-2 rounded-full  w-[24px] h-[24px] p-1 flex justify-center items-center"><FaPlus className='text-lg' /></button>
                            </div>
                        </div>: <div className="flex justify-between items-center w-full pt-4">
                            <button className="rounded-full bg-[#087592] text-white p-1 md:p-2 font-semibold text-[12px] md:text-[14px] tracking-wide"> +НЭМЭХ</button>
                            <div className='bg-white rounded-full p-2'>
                                <FaTrashAlt className='text-[#FF3546] text-lg' />
                            </div>
                        </div>}
                    </div>
                </div>
        </>
    )
}