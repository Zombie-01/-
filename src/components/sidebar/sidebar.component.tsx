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
        <div className="flex flex-col justify-between max-w-xs   bg-cyan-800 min-h-screen h-full">
            <div className=" relative top-0 left-0 p-2 flex flex-col align-middle ease-in-out duration-300 text-white">
                <UserProfile mini={mini} />
                {router.asPath == "/users"? <DefaultElement mini={mini}/>: <UsersSidebar mini={mini}/>}
            </div>
            <div className="p-4 flex flex-end justify-end text-white text-xl">{ mini ?<FaCaretSquareRight className="cursor-pointer" onClick={() => setMini(!mini)} /> : <FaCaretSquareLeft className="cursor-pointer" onClick={() => setMini(!mini)}/>}</div>
        </div>
    </>)

}
export default Sidebar; 