import { useState, useEffect} from "react";
import { useRouter } from "next/router";
import { FaArrowDown,FaWallet,FaChartBar,FaArrowRight,FaUserPlus,FaListUl } from 'react-icons/fa';
import { SideMainBtn,DialogBtn,SideSecondaryBtn } from "../../buttons";
import styles from "../sidebar.module.scss"
const { body,relEl } = styles;

const be = [
    {
        icon: <FaWallet className="text-lg md:text-xl" />,
        name: "Тооцоо",
        href: "/users/budget",
    },
    {
        icon: <FaChartBar className="text-lg md:text-xl" />,
        name: "График",
        href: "/users/reports",
    },
    {
        icon: <FaListUl className="text-lg md:text-xl"/>,
        name: "Ангилал",
        href: "/users/accounts",
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
        case "/home/budget":
            return setActive("1")
        case "/home/reports":
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
        <div id="btns" className="flex flex-col gap-1 justify-center items-center py-3">
                {be.map( (el,key) => 
                    <SideMainBtn key={key} icon={el.icon} name={el.name} href={el.href} mini={mini}/>
                )}
                
            </div>
        <div id="collapses" onClick={()=> setBudgetarrow(!budgetarrow)} className="flex w-full cursor-pointer px-2 sm:px-6 items-center gap-2">
        {budgetarrow ? <FaArrowRight className="text-md w-6" /> : <FaArrowDown className="text-md w-6 " />}<div className="flex w-full justify-between items-center "><h4 id={body} className={`${mini ? "hidden" : ""}`} >Ангиллууд</h4 ><h4 id={body} className={`${mini ? "hidden" : ""}`}>$0.00</h4></div>
        </div>
        {budgetarrow ? "" :<ul id={relEl} className={`list-none px-0 sm:px-6 py-1 ${mini ? " relative" : ""}`}>
                {
                    bemini.map( (el,key) => <SideSecondaryBtn key={key} name={el.name} cost={el.cost} mini={mini}/>)
                }
            </ul>}
        <DialogBtn mini={mini} name={"add acount"} icon={<FaUserPlus className="text-xl"  />}/>
         
        </>
    )
}

export default UsersSidebar;