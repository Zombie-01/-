import Link from "next/link"
export const CardLayout = ({img,name,href,date}:any):JSX.Element => {
    return(
        <>
        <Link href={href}>
            <div className="border p-2 flex flex-col m-2 w-40 h-40 md:h-52 md:w-52 text-center justify-between items-center cursor-pointer">
                <div className="w-full h-36 border bg-slate-200">{img}</div>
                <div className="text flex flex-col items-center justify-center">
                    <h2 className="text-xl">{name}</h2>
                    <p>{date}</p>
                </div>
            </div>
        </Link>
        </>
    )
}
