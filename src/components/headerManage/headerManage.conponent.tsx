import { useEffect,useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { FaChevronLeft } from 'react-icons/fa';

import BudgeHeader from './budgetHeader';
import AccHeader from './acc';
import Reportheader from './reports';


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
    ];
   
    const findSlugMatchingCmp = () =>routes.find((cmp => {
        return cmp.route === router.asPath
    }));

    const link = findSlugMatchingCmp()?.div
    
    
    return (
        <>
        <div className="w-full h-fit bg-slate-300 flex items-center justify-start gap-4" >
            {link}        
        </div>
        </>
    )
}

export default HeaderManage;