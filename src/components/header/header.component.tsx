import React from "react";
import styles from './header.module.scss';

const  { header } = styles

export default function Header(): JSX.Element {

    return(
        <>
            <header className={ header }>
                Header
            </header>
        </>
    )
} 

