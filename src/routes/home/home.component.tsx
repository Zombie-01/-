import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from "react"
import Header from '../../components/header'
import Footer from '../../components/footer'
import { useRouter } from 'next/router'
import {useAuth} from '../../context/userContext';
import styles from './home.module.scss'
import { MainBtn } from '../../components/buttons'
const { header,sectionHeader,btns } = styles

const Home: NextPage = (): JSX.Element => {
  const ctx = useAuth();
  const router = useRouter();
  // нэвтэрсэн тохиолдолд алга болгоод нэвтрээгүй үед Логин хуудас уруу үсрүүлнэ

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`w-screen ${header} text-center min-h-[700px] md:h-[795px] `}>
        <Header />
        <div className={sectionHeader}>
          <h1 className=" text-4xl px-2 md:text-6xl leading-tight text-[#121127]">Санхүүгийн Хяналт</h1>
          <p className=" text-xl md:text-3xl leading-relaxed px-3">Цалингаас цалин авахаа боль,өрнөөс гарч, <br />
            илүү их мөнгө хэмнээрэй</p>
          <div id={btns} className='flex gap-4'>
            <MainBtn href={""} name="Заавар" color="bg-[#81D0DF]" textColor="text-white p-3"/>
            <MainBtn href={"/register"} name="Бүртгүүлэх" textColor="text-black border p-3" />
          </div>
        </div>
        <div className='flex justify-center items-center w-full h-full '><img className=" max-w-[936] absolute top-[450px]  md:top-96 drop-shadow-xl " src="/assests/home.png" alt="" /></div>
      </header>
      <div className={`${styles.container} mt-0 sm:mt-40 md:mt-64` }>
        <main className={styles.main}>
          <div className={" inline-grid grid-cols-3 gap-4"}>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Home
