import HeaderManage from "../../components/headerManage/headerManage.conponent";
import Sidebar from "../../components/sidebar";
import { GroupLayout } from "../../components/layout/groupLayout";
import styles from "./users.module.scss"

const UserBudget = ():JSX.Element=> {

    return (
        <>
           <div className="flex">
                <Sidebar />
                <div className=" w-full ">
                    <HeaderManage />
                    <div id="body" className=" p-2 md:p-[30px]">
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-[33px]">
                            <GroupLayout styles="bg-[#81D0DF] text-white" name="Группын нэр"  date="Feb 12 - Feb 14" href={`/users/groups/budget`}/>
                            <GroupLayout styles="bg-white text-[#8f8f8f] " name="Группын нэр"  date="Feb 12 - Feb 14" href={`/users/groups/budget`} textStyles="text-black" members={true}/>
                        </div>
                    </div>
                </div>
           </div>
            
        </>
    )
}

export default UserBudget;