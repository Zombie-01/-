import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "../../context/userContext";
//import Loader from "react-loader";

//import BounceLoader from "react-spinners/BounceLoader";

import styles from './loading.module.scss'
const { App } = styles; 




function Spinner() {
  const [loaded, setLoaded] = useState(true);
  const ctx = useAuth()

  useEffect(() => {
    // visible true -> false
    if (!loaded) {
      setTimeout(() => setLoaded(true), 10000); 
    }

    //setLoaded(loaded);
  }, [loaded]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" ,alignItems: "center", height: "100vh"}}>
        <div className=" flex flex-col">
          <p className="text-3xl">loading</p>
          { ctx.state.token ? "" : <Link href="./login"><p className="text-cyan-600 text-3xl">Нэвтрэх</p></Link>}
        </div>
      </div>
    </>
  );
}
export default Spinner;
