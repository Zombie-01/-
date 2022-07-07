import {FaBell,FaRegCommentAlt} from "react-icons/fa"
const IconItems = ():JSX.Element => {
    return(
        <>
            <ul className="flex  items-center gap-4 pr-4 text-[#E0E0E0]">
                <li><FaRegCommentAlt className="text-sm md:text-2xl" /></li>
                <li className="relative"><FaBell className="text-sm md:text-2xl "/>
                <span className="absolute top-[-8px] right-[-6px] w-3 md:w-4 h-3 md:h-4 rounded-full bg-red-700 text-white flex justify-center items-center text-[8px] md:text-[14px]">1</span></li>
            </ul>
        </>
    )
}
export default IconItems