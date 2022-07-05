
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { UserStore } from '../context/userContext';
import {store} from '../stores';
import '../assets/css/tailwind.css'
import '../styles/main.scss';


export default function MyApp({ Component, pageProps }: AppProps):JSX.Element {
  return (
    <>
      <UserStore>
        {/* <ProtectRoute> */}
          <Provider store= { store }>
                <Component {...pageProps} />
          </Provider>
        {/* </ProtectRoute> */}
      </UserStore>
        
    </>
      
  )
}

