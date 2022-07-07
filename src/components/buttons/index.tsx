import { useState } from 'react';
import { useRouter } from 'next/router';
import  { FaAutoprefixer,FaArrowDown } from 'react-icons/fa'
import UserManage from "../userManage/userManage.component";
import Link from 'next/link';

import styles from './buttons.module.scss'
const { body,profile,abEl,SideMainBtns } = styles;


export const SideMainBtn = ({icon, name, href, mini}: any) => {
    const router = useRouter()

    return(
        <Link href={href}><div  className={`${SideMainBtns} ${mini ? "" : "md:w-72"} flex w-full cursor-pointer items-center  justify-center sm:justify-start  gap-0 sm:gap-4  md:h-20  px-2 sm:px-6 py-2 group rounded-lg ease-in-out duration-200 hover:text-white`} >
        {icon}
        <h2 id={body} className={` text-sm md:text-lg font-bold  ${mini ? "hidden" : ""}`}>{name}</h2>
    </div></Link>
    )
}

export const SideSecondaryBtn = ({ name, cost, mini}: any) => {
    const router = useRouter()

    return(
        <li id={abEl} style={{top: "42px"}} onClick={()=> router.push(`/users/accounts/${name}`)} className={`${mini ? "absolute w-24" : ""} flex w-auto cursor-pointer items-center group justify-between p-2 rounded-lg ease-in-out bg-cyan-800 duration-200 hover:bg-cyan-900 ml-8 sm:ml-6`}><h5>{name}</h5><h5>{cost}</h5></li>
    )

}
export const MainBtn = ({ href, name,color,textColor }:any) => {
    const router = useRouter()

    return(
        <>
            <button onClick={ () => router.push(href)}><div className={`${color} text-white hover:drop-shadow-lg focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none focus:shadow-lg  ${textColor} `}>{name}</div></button>
        </>
    )
}

export const MainIconicBtn = ({icon, name, href, color}:any)=> {
    const router = useRouter();

    return (
        <>
            <button onClick={ () => router.push(href)}><div className={`${color} rounded-lg px-2 py-1 text-white `}><div>{icon}</div><div>{name}</div></div></button>
        </>
    )

}
export const DialogBtn = ({icon, name, mini}:any) => {
    const [ dialog, setDialog] = useState(false);

    return (
        <>
        <div id="addBtn" onClick={()=>setDialog(true)} className="flex mx-2 my-4 p-1 gap-2 text-md rounded-md bg-slate-400 w-max cursor-pointer hover:bg-slate-500 sm:mx-6">{icon}<div id={body} className={`${mini ? "hidden" : ""}`}>{name}</div> </div>
        </>
    )
}

export const UserProfile = ({mini}:any) => {
    const [ userProfile, setUserProfile] = useState(false);
    return(
        <>
            <div id={profile} onClick={() => setUserProfile(!userProfile)} className={`${SideMainBtns} flex gap-0 sm:gap:4 justify-center items-center rounded-lg py-2 ease-in duration-200 cursor-pointer my-2 hover:bg-cyan-900`}>
                    <FaAutoprefixer className="text-3xl" />
                    <div id={body} className={`flex gap-4 md:gap-6 justify-center items-center relative ${mini ? "hidden" : ""}`}>
                        <div id="textarea" className="flex flex-col">
                            <h2 className=" text-lg md:text-xl font-bold">My badget</h2>
                            <p className="text-gray-400">mm6816557@gmail.com</p>
                        </div>
                        <FaArrowDown className="text-xl"/>
                </div>
                {userProfile ?  < UserManage />: ""}
                </div>
        </>
    )

}
export const MiniBtn = ({style, item}:any) => {
    return(
        <>
            <span className={`font-medium text-[8px] flex justify-center items-center w-[66px] h-[22px] rounded-[5px] p-1 ${style}`}>{item}</span>
        </>
    )
}

