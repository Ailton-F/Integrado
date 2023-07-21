import { createContext, useEffect, useState } from "react";
import jwt from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);

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
    
        const url = process.env.REACT_APP_API_KEY;
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
        
        window.localStorage.setItem('token', JSON.stringify(res.token));
        
        setAuthenticated(true);
        

        window.location = "/";
    }

    return (
        <AuthContext.Provider value={{ authenticated, userData, loading, logIn}}>
            {children}
        </AuthContext.Provider>
    );
}