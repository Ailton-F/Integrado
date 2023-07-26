import {useState, useEffect } from "react";

export const addBook = async (bookData)=>{

    const api_url = process.env.REACT_APP_API_KEY;
    

    let post = await fetch(`${api_url}/api/books/`, {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: bookData
    });


    if(!post.ok){
        throw new Error('Failed to add book')
    }

    const data = await post.json();
    return data
}


  