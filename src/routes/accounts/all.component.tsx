import Sidebar from "../../components/sidebar/sidebar.component"
import HeaderManage from "../../components/headerManage"

const All =():JSX.Element =>{
    return (
        <>
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                < HeaderManage/>
            </div>
        </div>
        </>
    )
}

export default All