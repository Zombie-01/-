import React, { useState} from "react";
import { useRouter } from 'next/router'
import Head from 'next/head'
import {useAuth} from "../../context/userContext";
import styles from './login.module.scss';
import { useDispatch } from "react-redux";
import { MainBtn } from "../../components/buttons";
import { setAuthenticated } from "../../stores/user/userSlice";
import BorderLayout from "../../components/layout/borderlayout";
import useUser from "../../hooks/user/useUser";



const { container,body,head,btns,label } = styles

const Register = (): JSX.Element => {
    
    const router = useRouter();
    const [wrongPasswords, setWrongPasswords] = useState(false);
    const userContext = useAuth();
    const dispatch = useDispatch();
   
   
    
    const register = async (event: any) => {
        event.preventDefault();
        if(event.target.password1.value === event.target.password2.value){
            userContext.signupUser( event.target.gmail.value, event.target.password1.value);
            console.log( event.target.gmail.value, event.target.password1.value);
            
        }
    }

    return (
        <>
            <Head>
                <title>Бүртгүүлэх</title> 
            </Head>
            <div className={ container }>
                 <form onSubmit={ register } method="post" >
                    <BorderLayout>
                    <div className={head}>
                            <h3>Тавтай морилно уу!</h3>
                            <h1>E-CARD</h1>
                        </div>
                        <div className="mb-6">
                            <label id={label}  className="block mb-2 text-sm font-medium text-gray-900">Нэвтрэх нэр</label>
                            <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="email" required />
                        </div>
                        <div className="mb-6">
                            <label id={label}  className="block mb-2 text-sm font-medium text-gray-900">Нууц үг</label>
                            <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Утасны дугаар" required />
                        </div>
                        <div className="mb-6">
                            <label id={label}  className="block mb-2 text-sm font-medium text-gray-900">Утасны дугаар</label>
                            <input type="string" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Утасны дугаар" required />
                        </div>
                        <div className="mb-6">
                            <label id={label}  className="block mb-2 text-sm font-medium text-gray-900">Утасны дугаар</label>
                            <input type="string" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Утасны дугаар" required />
                        </div>

                        { wrongPasswords ? <p style={{ color: "red"}}>Буруу байна</p> : ""}
                        
                        <div className="bg-[#81D0DF] py-3 px-4 rounded-lg cursor-pointer text-white hover:bg-cyan-700 text-center my-4"><button type="submit" name="login" id="login" className="w-full">Бүртгүүлэх</button></div>
                        <div className={ btns }>
                            <p>Та бүртгэлтэй юу? </p> <div className=" cursor-pointer text-base text-[#465685] " onClick={() => router.push("/login")}>Нэвтрэх </div>                   
            
                        </div>
                       </BorderLayout>
               </form> 
                
            </div>
        </>
    );
}

export default Register;