import React, { useState } from "react";
import Dialog from "../dialog/dialog.component";
import { useRouter } from "next/router";
import { FaCaretSquareLeft,FaCaretSquareRight } from 'react-icons/fa'
import UsersSidebar from "./usersSidebarElements";
import DefaultElement from "./defaulSidebarElements";
import { UserProfile } from "../buttons";






const Sidebar = (): JSX.Element=> {
    const [mini, setMini] = useState(false);
    const router = useRouter()
    
    return(
    <>
        <div className="flex flex-col justify-between max-w-sm border min-h-screen h-full bg-white">
            <div className={`${mini ? "p-2":"md:p-[32px]"} relative top-0 left-0  flex flex-col align-middle ease-in-out duration-300 text-[#1E1E1E]`}>
                <UserProfile mini={mini} />
                {router.asPath == "/users/groups"? <DefaultElement mini={mini}/>: <UsersSidebar mini={mini}/>}
            </div>
            <div className="p-4 flex flex-end justify-end text-black text-xl">{ mini ?<FaCaretSquareRight className="cursor-pointer hidden md:block" onClick={() => setMini(!mini)} /> : <FaCaretSquareLeft className="cursor-pointer hidden md:block" onClick={() => setMini(!mini)}/>}</div>
        </div >
    </>)

}
export default Sidebar; 