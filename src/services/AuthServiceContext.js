import { createContext, useState, useEffect } from "react";

const AuthServiceContext = createContext();

export default AuthServiceContext;

export const AuthProvider = ({children}) => {
    let [user, setUser] = useState(null);
    let [authTokens, setAuthTokens] = useState(null);

    let logUser = async (e)=>{
        e.preventDefault();
    
        let res = await fetch('http://127.0.0.1:8000/token/', {
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                'username': e.target.email.value, 
                'password': e.target.password.value
            })
        });
        let data = await res.json();
        console.log('data: ',data)
    }
    let contextData = {logUser:logUser};
    return(
        <AuthServiceContext.Provider value={contextData}>
            {children}
        </AuthServiceContext.Provider>
    );
}