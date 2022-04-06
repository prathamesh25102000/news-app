import React from 'react'
import '../App.css'
function NewsArticle({data}){
    return (
        <div className='news'>
           <img src={data.urlToImage} />
           <h3 className='news__title'>{data.title}</h3>
           <p className='news__description'>{data.description}</p>
           <a href={data.url}>Read more....</a>
           <span className='news__author'>{data.author}</span><br/>
           <span className='news__published'>{data.publishedAt}</span>
           <span className='news__source'>{data.source.name}</span> 
        </div>
    )
}

export default NewsArticle