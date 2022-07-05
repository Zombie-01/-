import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectAuthenticated } from "../../stores/user/userSlice";

export default function useUser(){
    const user = useSelector(selectAuthenticated)
    return useMemo(()=> ({user}),[user])
}