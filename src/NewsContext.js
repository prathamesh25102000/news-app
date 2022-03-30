import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data, setData] = useState()
    const apiKey = '41debd5ce2cf4e76a85d929fe7f8d811'

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=technology&from=2022-03-19&sortBy=publishedAt&lang=en&apiKey=${apiKey}`)
        .then((response) => setData(response.data))
        .catch((error) => console.error(error))
    },[data])
    
    return (
        <NewsContext.Provider value={{data}}>{props.children}</NewsContext.Provider>
    )
}  
