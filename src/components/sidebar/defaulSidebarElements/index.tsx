import styles from "../sidebar.module.scss"
import {SideMainBtn} from '../../buttons' 
import { FaPhotoVideo,FaBookOpen,FaHeadphonesAlt } from 'react-icons/fa'
const { body,relEl } = styles;

const DefaultElement = ({mini}:any): JSX.Element => {

    return(
        <>
            <div id="btns" className={`flex flex-col gap-1 justify-center items-center py-0 md:py-3 ${body}`}>
                <ul >
                    <li className="flex gap-4 w-full group"><SideMainBtn icon={<FaPhotoVideo className="text-lg md:text-xl text-[#087592] group-hover:text-white" /> } name={"Санхүүгийн тооцоо"} href={""} mini={mini}/></li>
                    <li className="flex gap-4 w-full group"><SideMainBtn icon={<FaBookOpen className="text-lg md:text-xl text-[#087592] group-hover:text-white" /> } name={"Заавар унших"} href={""} mini={mini}/></li>
                    <li className="flex gap-4 w-full group"><SideMainBtn icon={<FaHeadphonesAlt className="text-lg md:text-xl text-[#087592] group-hover:text-white" /> } name={"Заавар сонсох"} href={""} mini={mini}/></li>
                </ul>
            </div>
            
        </>
    )
}

export default DefaultElement