import { useState,useCallback } from "react";
import { useRouter } from "next/router";
import Sidebar from "../../components/sidebar/sidebar.component";
import SectionOne from "../../components/reportSections/sectionOne";
import SectionTwo from "../../components/reportSections/sectionTwo";
import SectionThree from "../../components/reportSections/sectionThree"
import HeaderManage from "../../components/headerManage";

const Reports = (): JSX.Element => {
    const router =useRouter()
    const [count, setCount] = useState(0);
    const callback = useCallback((count: number) => {
        setCount(count);
      }, []);
      const reportRoutes = [
        {
            section: "one",
            div: <SectionOne />
        },
        {
            section: "two",
            div: <SectionTwo />
        },
        {
            section: "three",
            div: <SectionThree />
        },
    ];
    const findReportElements = (count: any) =>reportRoutes.find((cpm =>{
        // console.log(count);
        return count === cpm.section
    })) 
    return(
        <>
            <div className="flex">
            <Sidebar />
                <div className="w-full">
                    <HeaderManage parentCallback ={callback} />
                    { router.asPath !== "/home/reports" ? count : findReportElements(count)?.div  }
                </div>
            </div>
        </>
    )
}

export default Reports;