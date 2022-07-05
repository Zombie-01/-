import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from '../../context/userContext';
import { FaBars } from 'react-icons/fa'
import { MainBtn } from "../buttons";
import styles from './header.module.scss';

const  { header,btns,barAnimation } = styles

export default function Header(): JSX.Element {
    const ctx = useAuth()
    const router = useRouter()
    const [ scroll, setScroll ] = useState(false)
    const [bar, setBar] = useState(false)
    const logOut = () => {
        ctx.logout()
        router.push("/login")
    }
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.pageYOffset > 0){
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    )
    })

    return(
        <>
            <div className={`w-full h-auto ${header} fixed top-0 left-0 ease-in-out duration-200 z-20 ${scroll ? "bg-white": ""}`} >
                <div className="max-w-6xl m-auto flex px-4 justify-between items-center h-16">
                    <div className="text-2xl w-24 h-10"><img src={scroll? "/Logo.png" : "/blackLogo.png"} alt="app logo" /></div>
                    <FaBars className="text-2xl md:hidden" onClick={()=> setBar(!bar)} />
                    <div className={`${bar? barAnimation : "hidden "} top-0 md:flex justify-center items-center gfp-4 bg-white rounded-xl p-4 md:p-0 md:bg-transparent md:gap-36 flex-col md:flex-row absolute md:relative right-0 e`}>
                        <ul id="items" className={` md:flex  `}>
                            <li>Menu</li>
                            <li>Menu</li>
                            <li>Menu</li>
                            <li>Menu</li>
                        </ul>
                        <ul id={btns} className="flex gap-4 flex-col md:flex-row">
                            <MainBtn href={""} name="Санхүүгийн тооцоо" color="bg-[#81D0DF]" textColor={"text-white"}/>
                            <MainBtn href={"/login"} name="Нэвтрэх" textColor="text-black border" />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
} 

