import { useEffect } from "react";
import HeaderManage from "../../components/headerManage/headerManage.conponent";

import Sidebar from "../../components/sidebar";

const Budget = ({}):JSX.Element => {
    
    return(
        <>
        <div className="flex">
        <Sidebar  />
            <div className="w-full">
                <HeaderManage / >
            </div>
                
        </div>
        </>
    )
}
export default Budget;