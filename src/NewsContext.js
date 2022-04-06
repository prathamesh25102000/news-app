import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
import Navb from "./components/NavBar";
import query from "./components/NavBar"
export const NewsContext = createContext()


export const NewsContextProvider = (props) => {
    const [data, setData] = useState()
    const apiKey = 'ef0e5f4f6f4a4d07bb95996c4f217748'
    const qur='sports'
    useEffect(() => {
        
        axios.get(`https://newsapi.org/v2/everything?q=${qur}&sortBy=publishedAt&lang=en&apiKey=${apiKey}`)
        .then((response) => setData(response.data))
        .catch((error) => console.error(error))
        
    },[data])
    
    return (
        <NewsContext.Provider value={{data}}> {props.children}</NewsContext.Provider>
    )
}  
