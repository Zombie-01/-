import HeaderManage from "../../components/headerManage/headerManage.conponent";
import Sidebar from "../../components/sidebar";
import { CardLayout } from "../../components/layout/cardLayout";
import styles from "./users.module.scss"

const UserBudget = ():JSX.Element=> {

    return (
        <>
           <div className="flex">
                <Sidebar />
                <div className=" w-full ">
                    <HeaderManage / >
                    <div id="body" className=" p-2 md:p-[30px]">
                        <div className="flex justify-between">
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start items-center">
                            <CardLayout name="Хэрэглээнд" href="/users/budget" icon="none" color="bg-[#61FF33]" />
                            <CardLayout name="Хэрэглээнд" href="/users/budget" icon="none" color="bg-[#3390FF]" />
                            <CardLayout name="Хэрэглээнд" href="/users/budget" icon="none" color="bg-[#FF33E3]" />
                            {/* <button onClick={() => console.log('asd')}>
                                <div className={`${styles.card} bg-white border p-2 md:p-[32px] flex flex-col m-2 w-40 h-40 md:h-[230px] md:w-[240px] relative rounded-[21px] `}>
                                    <h2 className="font-semibold text-[34px] h-full flex justify-center items-center text-[#121127] "><FaFolderPlus /></h2>
                                    
                                </div>
                            </button> */}
                        </div>
                    </div>
                </div>
           </div>
            
        </>
    )
}

export default UserBudget;