import {useState, useEffect } from "react";
import jwt from "jwt-decode";

export const logIn = async (e)=>{
    e.preventDefault();
    
    const reqOpt = {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify({
            email: e.target.email.value,
            password: e.target.password.value
        })
    }
    let req = await fetch('http://127.0.0.1:8000/api/login', reqOpt)
    let res = await req.json()
    let res_decoded = jwt(res.token)

    console.log();
}

export const cad = async (e)=>{
    e.preventDefault();
    
    const reqOpt = {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify({
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        })
    }

    let req = await fetch('http://127.0.0.1:8000/api/register', reqOpt)
    let res = await req.json()
    console.log()
}