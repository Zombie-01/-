import React from "react";
import styles from './footer.module.scss';

const  { footers } = styles

export default function footer(): JSX.Element {

    return(
        <>
            <footer className={ footers }>
                Footer
            </footer>
        </>
    )
} 

