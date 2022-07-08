import { useState,useCallback } from "react";
import HeaderManage from "../../components/headerManage/headerManage.conponent";
import { useRouter } from "next/router";
import {FaFolderPlus,FaBars,FaChevronDown} from "react-icons/fa"
import Sidebar from "../../components/sidebar";
import { CardLayout } from "../../components/layout/cardLayout";
import styles from "./userBudget.module.scss"
import { DatePicker } from "../../components/datePicker";
import { MiniBtn } from "../../components/buttons";

const UserBudget = ():JSX.Element=> {
    const router = useRouter()
    console.log(router.asPath);
    const [ dateBar,setDateBar ] = useState(false)
    const DateBarFunc = () => {
        setDateBar(!dateBar)
    }
    return (
        <>
           <div className="flex">
                <Sidebar />
                <div className=" w-full ">
                    <HeaderManage / >
                    <div id="body" className=" p-2 md:p-[30px]">
                        <div className="flex justify-between">
                            <div className="flex flex-col md:flex-row gap-4 pb-2 md:pb-[30px] justify-center items-center">
                                <h3 className=" flex  justify-center gap-4 items-center text-[14px] font-semibold text-[#121127]">Бүгд <span className="md:hidden"><FaChevronDown /></span>
                                <MiniBtn style={"text-[#00b0d7] border  border-[#00b0d7]" } item={"2,500,000"}/>
                                </h3>
                                <h3 className=" flex  justify-center gap-4 items-center text-[14px] font-semibold text-[#5F5E61]">Орлого <MiniBtn style={"text-[#5F5E61] bg-white "} item={"2,500,500"}/> </h3>
                                <h3 className=" flex  justify-center gap-4 items-center text-[14px] font-semibold text-[#5F5E61]">Зарлага <MiniBtn style={"text-[#5F5E61] bg-white "} item={"500,500"}/></h3>
                            </div>
                            <div className="flex gap-[11px] pb-2 md:pb-[30px] justify-center items-center">
                                <div className="rounded-5px bg-white">Jul 2022 </div>
                                <div  className="border rounded-[5px] p-1 border-[#00b0d7] text-[#00b0d7] relative"><FaBars onClick={() => DateBarFunc()} className="cursor-pointer" />{dateBar ? <DatePicker  func={DateBarFunc}/>: ""}</div>
                                <div className=" rounded-[5px] p-1 text-[#5F5E61]"><FaBars/></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start items-center">
                            <CardLayout name="Хэрэглээнд" href={router.asPath} icon="none" color="bg-[#61FF33]" />
                            <CardLayout name="Хэрэглээнд" href={router.asPath} icon="none" color="bg-[#3390FF]" />
                            <CardLayout name="Хэрэглээнд" href={router.asPath} icon="none" color="bg-[#FF33E3]" />
                            
                            {/* <button onClick={() => console.log('asd')}>
                                <div className={`${styles.card} bg-white border p-2 md:p-[32px] flex flex-col m-2 w-40 h-40 md:h-[230px] md:w-[240px] relative rounded-[21px] `}>
                                    <h2 className="font-semibold text-[34px] h-full flex justify-center items-center text-[#121127] "><FaFolderPlus /></h2>
                                    
                                </div>
                            </button> */}
                        </div>
                    </div>
                </div>
           </div>
            
        </>
    )
}

export default UserBudget;