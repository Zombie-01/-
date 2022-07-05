import HeaderManage from "../../components/headerManage/headerManage.conponent";
import {FaFolderPlus} from "react-icons/fa"
import Sidebar from "../../components/sidebar";
import { CardLayout } from "../../components/layout/cardLayout";

const Users = ():JSX.Element=> {
    return (
        <>
           <div className="flex">
                <Sidebar />
                <div className=" p-5 md:p-10 ">
                    <div id="header-title" className="text-2xl font-bold pb-4 border-b-2 w-full" >Миний санхүү</div>
                    <div id="body" className=" flex flex-wrap justify-center items-center">
                        <CardLayout name="Хэрэглээнд" href="/users/budget" img="none" date="өнөөдөр"/>
                        <button onClick={() => console.log('asd')}>
                            <div className="border p-2 flex flex-col m-2 w-40 h-40 md:h-52 md:w-52 text-center justify-center items-center">
                                <div className="w-full h-full flex justify-center items-center text-6xl text-[#465685]" ><FaFolderPlus/></div>
                                <div className="text pb-4">
                                    <h2>санхүү нэмэх</h2>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
           </div>
            
        </>
    )
}

export default Users;