import { useRouter } from 'next/router'
import Sidebar from '../../../components/sidebar/sidebar.component';

const Accounts = ():JSX.Element => {
    const router = useRouter();
    const query = router.query.uid;

    return (
        <>
        <div className="flex">
            <Sidebar />
            <div>acc name : { query }</div>
        </div>
        </>
    )
}
export default Accounts