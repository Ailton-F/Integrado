import {useState, useEffect } from "react";

export const addBook = async (bookData)=>{

    const url = process.env['REACT_APP_URL'];
  
    console.log(url)
    let post = await fetch(`https://integrado-backend.ailtonborges.repl.co/api/books/`, {
        method: "POST",
        body: bookData
    });


    if(!post.ok){
        throw new Error('Failed to add book')
    }

    const data = await post.json();
    return data
}


  