import {useState, useEffect } from "react";
import Cookies from "universal-cookie";
import jwt from "jwt-decode";

const cookie = new Cookies();

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
    cookie.set("jwt", res.token, {
        expires: new Date(res_decoded.exp * 1000),
        httpOnly: true,
    });
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