import { FaPlus,FaRegFolder,FaCog,FaUserFriends,FaWrench,FaFileDownload,FaUserAlt,FaLandmark,FaRegListAlt,FaSignOutAlt } from 'react-icons/fa'

const UserManage = (): JSX.Element => {

    return(
        <>
            <div className="w-56 py-4 absolute top-20 left-10 h-auto rounded-md flexflex-col justify-center items-center ease-in-out duration-150  bg-white text-slate-800">
                <ul className='py-2'>
                    <li className="flex justify-center items-center gapy-2 text-lg hover:bg-slate-200" ><FaPlus /> new badget</li>
                    <li className="flex justify-center items-center gapy-2 text-lg hover:bg-slate-200" ><FaRegFolder /> new badget</li>
                </ul>
                <ul className='border-2 py-2'>
                    <p className='text-start ml-12 text-md'>current budget</p>
                    <li className="flex justify-center items-center gap-2 text-lg hover:bg-slate-200" ><FaCog /> new badget</li>
                    <li className="flex justify-center items-center gap-2 text-lg hover:bg-slate-200" ><FaUserFriends /> new badget</li>
                    <li className="flex justify-center items-center gap-2 text-lg hover:bg-slate-200" ><FaWrench /> new badget</li>
                    <li className="flex justify-center items-center gap-2 text-lg hover:bg-slate-200" ><FaFileDownload /> new badget</li>
                </ul>
                <ul className="border-b-2 py-2">
                    <p className='text-start ml-12 text-md'>account</p>
                    <li className="flex justify-center items-center gap-2 text-lg hover:bg-slate-200" ><FaUserAlt /> new badget</li>
                    <li className="flex justify-center items-center gap-2 text-lg hover:bg-slate-200" ><FaLandmark /> new badget</li>
                </ul>
                <ul className="py-2">
                    <li className="flex justify-center items-center gap-2 text-lg hover:bg-slate-200" ><FaSignOutAlt /> new badget</li>
                </ul>
            </div>
        </>
    )


}

export default UserManage;