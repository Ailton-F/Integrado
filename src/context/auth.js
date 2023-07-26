import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import jwt from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = process.env.REACT_APP_API_KEY;

    useEffect(()=>{
        const token = window.localStorage.getItem('token')
        if(token){
            setAuthenticated(true)
            let res_decoded = jwt(token);
            setUserData(res_decoded);
        }
        
        setLoading(false);
    }, [])

    const logIn = async (e)=>{  
        e.preventDefault();

        const reqOpt = {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
            })
        }
        let req = await fetch(`${url}/api/users/login/`, reqOpt);
        let res = await req.json();
        
        console.log(req.status);
        
        if(req.status != 200){
            toast.error('Senha ou email incorretos, tente novamente!');
        } else {
            window.localStorage.setItem('token', JSON.stringify(res.token));
            setAuthenticated(true);
            window.location = "/";
        };
    }

    const logOut = async (e) => {
        e.preventDefault();
        const reqOpt = {
            method: "POST",
            headers: {"content-type":"application/json"},
        }
        let req = await fetch(`${url}/api/users/logout/`, reqOpt);
        let res = await req.json();

        window.localStorage.removeItem('token');
        setAuthenticated(false);

        window.location = "/";
    }

    return (
        <AuthContext.Provider value={{ authenticated, userData, loading, logIn, logOut}}>
            {children}
        </AuthContext.Provider>
    );
}