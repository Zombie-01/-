import { useEffect,useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { FaChevronLeft } from 'react-icons/fa';
import IconItems from './items';

import Profile from '../profile';
import BudgeHeader from './budgetHeader';
import AccHeader from './acc';
import Reportheader from './reports';
import UsersHeader from './users';


const HeaderManage = ({ parentCallback }:any):JSX.Element => {
    const router = useRouter();
    const [count, setCount] = useState('');
    const callback = useCallback((count: string) => {
        setCount(count);
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
            <div>Миний хувийн санхүү</div>
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