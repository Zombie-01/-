import { useState, useEffect} from "react";
import { useRouter } from "next/router";
import { FaArrowDown,FaWallet,FaChartBar,FaArrowRight,FaUserPlus,FaListUl } from 'react-icons/fa';
import { SideMainBtn,DialogBtn,SideSecondaryBtn } from "../../buttons";
import styles from "../sidebar.module.scss"
const { body,relEl,SideMainBtns } = styles;

const be = [
    {
        icon: <FaWallet className="text-lg md:text-xl text-[#087592] group-hover:text-white" />,
        name: "Санхүүгийн тооцоо",
        href: "/users/groups",
    },
    {
        icon: <FaChartBar className="text-lg md:text-xl text-[#087592] group-hover:text-white" />,
        name: "График",
        href: "/users/graph",
    },
]

const bemini = [
    {
        name: "name",
        cost: "0.00",
    },
    {
        name: "name2",
        cost: "0.00",
    },
]

const UsersSidebar = ({mini}:any):JSX.Element => {
    const router = useRouter()
    const [budgetarrow,setBudgetarrow] = useState(true);
    
    const [active,setActive] = useState('');
    
    useEffect(() => {
      const x = router.asPath;
      switch (x){
        case "/home/users":
            return setActive("1")
        case "/home/graph":
            return setActive("2")
        case "/home/accounts":
            return setActive("3")
        case `/home/accounts/${name}`:
            return setActive(name)
      }
    }, [])
    console.log(active);
    const name = "name";
    const name2 = "name2";

    return(
        <>
        {mini ? "" :<div className={`hidden md:block justify-start ${mini ? "p-2" : "md:px-[24px]"}`}><h4 className="text-[#828282] text-[12px] text-start">Хяналтын хэсэг</h4></div>}
        <div id="btns" className="flex flex-col gap-1 justify-center items-center">
                {be.map( (el,key) => 
                    <SideMainBtn key={key} icon={el.icon} name={el.name} href={el.href} mini={mini} />
                )}
                
            </div>
        <div id="collapses" onClick={()=> setBudgetarrow(!budgetarrow)} className={`flex w-full cursor-pointer ${mini ? "p-0" : "md:px-6"} items-center gap-2`}>
        
            <div className={`${SideMainBtns} ${mini ? "w-full" : "md:w-[298px] px-2"} flex w-full cursor-pointer items-center  justify-center   gap-0   md:h-[56px] py-2 group rounded-lg ease-in-out duration-200 hover:text-white text-lg md:text-xl text-[#121127] mb-4 group-hover:text-white`} >
                <div className={`flex w-full ${mini ? " px-2" : "md:gap-4"} gap-4 cursor-pointer justify-center sm:justify-start`}>
                    <FaListUl className=" text-lg md:text-xl text-[#087592] group-hover:text-white"/>
                    <h2 id={body} className={` text-sm md:text-[16px] font-semibold  ${mini ? "hidden" : ""}`}>Ангиллууд</h2>
                </div>
                {mini ? "":budgetarrow ? <FaArrowRight className=" hidden md:block text-md w-6" /> : <FaArrowDown className="hidden md:block text-md w-6 " />}</div ></div>
        {budgetarrow ? "" :<ul id={relEl} className={`list-none px-0 sm:px-6 py-1 z-40 ${mini ? " relative" : ""}`}>
                {
                    bemini.map( (el,key) => <SideSecondaryBtn key={key} name={el.name} cost={el.cost} mini={mini}/>)
                }
            </ul>}
            {mini ? "" :<div className={`hidden md:block justify-start  ${mini ? "p-2" : "md:px-[24px]"}`}><h4 className="text-[#828282] text-[12px] text-start">Хувийн хэсэг</h4></div>}
            <div id="btns" className="flex flex-col gap-1 justify-center items-center">
                <SideMainBtn icon={<FaWallet className="text-lg md:text-xl text-[#087592] group-hover:text-white" />} name={"Миний тохиргоо"} href={""} mini={mini} />
                <SideMainBtn icon={<FaWallet className="text-lg md:text-xl text-[#087592] group-hover:text-white" />} name={"Гарах"} href={""} mini={mini} />
                
            </div>
         
        </>
    )
}

export default UsersSidebar;