import { useState } from "react"


const DropUl = ({name}:any):JSX.Element => {
    const [open, setOpen] = useState(false)
    const openLi= () => {
        setOpen(!open)
    }
    return(
        <>
            <div className={`p-4 ${open ? "text-white bg-[#087592]" : ""}`} onClick={() => openLi()}>{name}</div>
            <ul className={`${open ? "block" : "hidden"} `}>
                <li className="pl-4 py-1">li No 1</li>
                <li className="pl-4 py-1">li No 1</li>
                <li className="pl-4 py-1">li No 1</li>
            </ul>
        </>
    )
}
export default DropUl