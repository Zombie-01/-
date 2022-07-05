import React from "react";
import { useRouter } from "next/router";
import styles from './footer.module.scss';

const  { footers } = styles

export default function Footer(): JSX.Element {
    const router = useRouter()
    return(
        <>
           {
            router.pathname === "/login" ? "" :  
            <div className={ footers }>
                Footer
            </div>
           }
        </>
    )
} 

