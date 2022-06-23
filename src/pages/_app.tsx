import '../styles/globals.css';
import type { AppProps } from 'next/app';
import  Header from '../components/header';
import Footer from '../components/footer';

export default function MyApp({ Component, pageProps }: AppProps):JSX.Element {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

