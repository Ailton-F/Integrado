import {useState, useEffect } from "react";

export const addBook = async (bookData)=>{

    const url = process.env.REACT_APP_URL;
    

    let post = await fetch(`${url}/api/books/`, {
        method: "POST",
        body: bookData
    });

    if(!post.ok){
        throw new Error('Failed to add book')
    }

    const data = await post.json();
    return data
}


  