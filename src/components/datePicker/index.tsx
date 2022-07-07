import { useCallback,useState } from 'react'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import { Month } from './month'
const date = [
    { green:"1",
    index: 1,month: "1 ",red: 2007.00 },
    { green:"2",type:"none",index: 2,month: "",red: 2007.00 },
    { green:"3",type:"none",index: 3,month: "",red: 2007.00 },
    { green:"4",type:"none",index: 4,month: "",red: 2007.00 },
    { green:"5",type:"none",index: 5,month: "" ,red: 2007.00},
    { green:"6",type:"none",index: 6,month: "" ,red: 2007.00},
    { green:"7",type:"none",index: 7,month: "" ,red: 2007.00},
    { green:"8",type:"none",index: 8,month: "" ,red: 2007.00},
    { green:"9",type:"none",index: 9,month: "" ,red: 2007.00},
    { green:"10",type:"none",index: 10,month: "" ,red: 2007.00},
    { green:"11",type:"none",index: 11,month: "",red: 2007.00 },
    { green:"12",type:"none",index: 12,month: "",red: 2007.00 },
]

export const DatePicker = ({func}:any):JSX.Element => {
    const [selectedCell , setSelectedCell] = useState<number>(1);
    const [ dateIn, setdateIn] = useState(<p>JuL 2022</p>)
    const callBack = (el:number) => {
        setSelectedCell(el);
    }
    const DateInput = () => {
        setdateIn(<input type="string" id="name" name="name" required />);
    }
    return(
            <div style={{boxShadow: "4px 24px 60px rgba(109, 141, 173, 0.25)"}} className="absolute z-40 right-6 top-[-4px] rounded-[21px] bg-white w-[240px] md:w-80 h-72 text-[#81D0DF] flex flex-col justify-center items-center ">
                <div className="flex h-14 w-full justify-between px-[15px] py-[21px]">
                    <FaChevronLeft className='text-lg hover:text-[#087592] cursor-pointer' />
                    <div onClick={() => DateInput()} className="text-[#087592] font-bold text-[16px]">{dateIn}</div>
                    <FaChevronRight className='text-lg hover:text-[#087592] cursor-pointer' />
                </div>
                <div className="grid grid-cols-4 justify-between  ">
                    {date.map((el,key) => <Month selectedCell={selectedCell} key={key} green={el.green} func={callBack} red={el.red} type={el.type} index={el.index}/>)}
                </div>
                <div className="p-[16px] w-full flex justify-end">
                    <button onClick={()=>func()} className="btn bg-[#F4F5F6] rounded-[21px] w-[125px] h-[31px] text-[#5F5E61] hover:bg-slate-200 shadow-lg">Цуцлах</button>
                </div>

            </div>
    )
}