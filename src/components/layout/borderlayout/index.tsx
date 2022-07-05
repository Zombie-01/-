import styles from './auth.module.scss'

const {linearGradient,main} = styles
export default function BorderLayout ({ children }:any) {

    return (
        <>
            <div className="flex w-screen h-screen">
                <div className={`flex flex-col justify-center items-start p-6 xl:p-40 ${main}`}>
                    <div className=" w-full xl:w-96 ">{children}</div>
                </div>
                <div className={` ${linearGradient}`} ><div></div></div>
            </div>
        </>
    )
}