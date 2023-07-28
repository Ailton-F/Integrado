import {useState, useEffect } from "react";
import axios from 'axios';

export const addBook = async (bookData)=>{
    const api_url = process.env.REACT_APP_API_KEY;

    const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }

    // let post = await fetch(`${api_url}/api/books/`, {
    //     method: "POST",
    //     headers: {"Content-Type": "multipart/form-data"},
    //     body: bookData
    // });

    let req = await axios.post(`${api_url}/api/books/`, bookData, config);
}


  