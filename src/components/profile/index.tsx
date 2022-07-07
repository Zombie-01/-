import {FaAngleDown} from 'react-icons/fa'
const Profile = ():JSX.Element => {
    return(
        <>
        <div className="h-full w-s md:w-[235px] rounded-lg border flex">
            <img className="rounded-l-lg bg-amber-500 w-8 md:w-[60px] m-0"  src="" alt="" />
            <div className=" p-[10px] w-full flex justify-between items-center">
                <div>
                    <h3>Adminastor</h3>
                    <p>ID: 12345678</p>
                </div>
                <FaAngleDown/>
            </div>
        </div>
        </>
    )
}
export default Profile;