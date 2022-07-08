import { useEffect,useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { FaUsers,FaAngleRight } from 'react-icons/fa';
import IconItems from './items';

import Profile from '../profile';
import BudgeHeader from './budgetHeader';
import AccHeader from './acc';
import Reportheader from './reports';
import UsersHeader from './groups';
import DropDownLayout from '../layout/dropdownLayout';


const HeaderManage = ({ parentCallback }:any):JSX.Element => {
    const router = useRouter();
    const [openUl, setOpenUl] = useState(false);
    const callback = useCallback((count: string) => {
        parentCallback(count)
      }, []);

    const reportpage =<Reportheader parentCallbackReport={callback} />
    
    const routes = [
        {
            route: "/users/budget",
            div: <BudgeHeader/>,
        },
        {
            route: "/users/reports",
            div: reportpage,
        },
        {
            route: "/users/accounts",
            div: <AccHeader/>,
        },
        {
            route: "/users",
            div: <UsersHeader/>,
        },
    ];
   
    const findSlugMatchingCmp = () =>routes.find((cmp => {
        return cmp.route === router.asPath
    }));

    const link = findSlugMatchingCmp()?.div
    
    
    return (
        <>
        <div className="w-full h-[60px] bg-white md:h-[87px] flex p-2 md:px-[32px] md:py-[15px] justify-between items-center" >
            <div  className="flex items-center gap-2 border border-[#E0E0E0] px-2 py-2 rounded-[10px] md:px-[20px] md:py-[15px] relative"><div onClick={()=>setOpenUl(!openUl) } className="flex justify-center items-center gap-2" ><FaUsers className='text-lg text-[#087592]'/> 
            <h4  className="hidden md:block">Миний хувийн санхүү</h4><FaAngleRight /></div>
            {openUl ? <DropDownLayout /> : ""}
            </div>
            <div className="flex">
                <IconItems />
                <Profile/>     
            </div>
        </div>
        <div>
            {link}   
        </div>
        </>
    )
}

export default HeaderManage;