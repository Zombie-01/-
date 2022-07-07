import React, { useState, createContext, useEffect, useContext } from 'react';
import Cookies from 'js-cookie'
import  { useRouter } from 'next/router'
import api from '../pages/api/api';
import Spinner from '../components/spiner';

const initialState = {
    saving: false,
    logIn: false,
    err: null,
    token: null,
    userId: null,
    expireDate: null
}
const UserContext = createContext();

export const UserStore = ( { children } ) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(initialState);
    const router = useRouter()
    
    useEffect(() => {
      async function loadUserFromCookies(){
        const token = Cookies.get("token");
        if(token){
            console.log("zombie got a token");
            api.defaults.headers.Authorization = `Bearer ${token}`;
            const { data: user} = await api.get('users/me');
            if(user) setUser(user);
        }
        setLoading(false);
      }
      loadUserFromCookies() 
    }, [])
    // logout
    const logout = () => {
        Cookies.remove('token')
        setUser(null)
        delete api.defaults.headers.Authorization
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        setState(initialState);
        router.pathname= '/login'
        console.log("logout");
    }
    
    
    // signupUser
    const signupUser = async (email, password) => {
        setState({...state, saving: true});
        console.log("sigup");
        const { data: token } = await api.post('auth/signUp', { email, password });

        const data = {
            email,
            password,
            returnSecureToken: true
        }
        if(token){
            console.log("we  got a first token");
            Cookies.set('token', token, { expires: 60 });
            api.defaults.headers.Authorization = `Bearer ${token.token}`
            const { data: user } = await api.get('users/me')
            setUser(user)
        }

        // axios.post("baseUrl",data).then(result => {
        //     const token = result.data.idToken;
        //     const userId = result.data.localId;

        //     localStorage.setItem('token', token);
        //     localStorage.setItem('userId', userId);

        //     setState({...state,token, userId});
        // }).catch(err => {
        //     setState({...state,err: err.message});
        // })
        console.log("signup");
    }

        // loginuser
    const loginUser = async (email, password) => {
        console.log("login");
        const { data: token } = await api.post('auth/login', { email, password });
        if(token){
            console.log("we  got a token");
            Cookies.set('token', token, { expires: 60 });
            api.defaults.headers.Authorization = `Bearer ${token.token}`
            const { data: user } = await api.get('users/me')
            setUser(user)
            console.log("Got user", user)
        }
        // return function() {
        //     setState({...state, logIn: true})
        //     const data = {
        //         email,
        //         password,
        //         returnSecureToken: true
        //         };
        //         axios.post("baseUrl",data).then(result => {
        //             const token = result.data.idToken;
        //             const userId = result.data.localId;
        //             const expiresIn = result.data.expiresIn;
        //             const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
        
        //             localStorage.setItem("token", token);
        //             localStorage.setItem("userId", userId);
        //             localStorage.setItem("expireDate", expireDate.toString());
        
        //             setState({...state,token, userId,logIn:true,err:null});
        //         }).catch(err => {
        //             setState({...state,err: err.message});
        //         })
        //     }

    };
    const forgetPassword = (email) => {
        console.log("forgotpass");
        // return function(){
        //     setState({...state,email});
        //     const data = {
        //         email
        //     }
        //     axios.post("baseUrl",data).then(result => {
        //         setState({...state,email});
        //     }).catch(err => {
        //         setState({...state,err: err.message});
        //     })
        // }
    }
    return (
        <UserContext.Provider value={ { isAuthenticated: !!user, user, loading, state, signupUser, loginUser, logout, forgetPassword } }>
             { children }
        </UserContext.Provider>
    );
}

export const useAuth = () => useContext(UserContext)

export const ProtectRoute = ({ children }) => {
    const router = useRouter()
    const { isAuthenticated, isLoading } = useAuth();
    if (isLoading || (!isAuthenticated && router.pathname !== '/login' )){
      return(  router.pathname === '/' ? children : <Spinner />); 
    } 
    return children;
  };