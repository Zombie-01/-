import { useEffect } from "react";
import { useRouter } from "next/router";
import HeaderManage from "../../components/headerManage/headerManage.conponent";

import Sidebar from "../../components/sidebar";

const Budget = ({}):JSX.Element => {
    const router = useRouter()
    const query = router.asPath.toString()
    
    return(
        <>
        <div className="flex">
        <Sidebar  />
            <div className="w-full">
                <HeaderManage / >
                    {/* {query} */}
            </div>
                
        </div>
        </>
    )
}
export default Budget;