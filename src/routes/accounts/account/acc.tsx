import { useRouter } from 'next/router'
import HeaderManage from '../../../components/headerManage';
import Sidebar from '../../../components/sidebar/sidebar.component';

const Accounts = ():JSX.Element => {
    const router = useRouter();
    const query = router.query.uid;

    return (
        <>
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <HeaderManage / >
                    {query}
            </div>
        </div>
        </>
    )
}
export default Accounts