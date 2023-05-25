import {useState, useEffect } from "react";

export const addBook = async (e)=>{
    e.preventDefault();
    
    const title = e.target.title.value;
    const author = e.target.author.value;
    const price = Number(e.target.price.value);
    const desc = e.target.desc.value;
    const url = process.env.REACT_APP_URL;
    
    const body = {
        title: title,
        author: author,
        description: desc,
        price: price
    };

    let post = await fetch(`${url}/api/books/`, {
        method: "POST",
        headers: new Headers({
            "Content-type": "application/json"
        }),
        body: JSON.stringify(body)
    }).then((res)=>res.json());

    console.log(post);
}