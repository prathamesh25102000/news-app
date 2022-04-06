import React from "react";
import NavBar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react'
// import axios from 'axios'
import '../App.css'

function Navb() {

    //const [data, setData] = useState()
    const apiKey = '0bcbe0c7e8154bd7bbbc035e4ab13a13'
    let [v, setV] = useState()
    let [w, setW] = useState()
    let[qur,setQur] = useState('general')
    const [f, setF] = useState(0)
    let [query,setQuery]=useState()
    async function np() {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'current-news.p.rapidapi.com',
                'X-RapidAPI-Key': 'ae89180d60msh3a68fc31e7e4932p1a2a00jsn3ba988931826'
            }
        }; 
        let resp=await(await fetch(`https://current-news.p.rapidapi.com/news/${qur}`, options,{mode:'cors'})).json()
        console.log(resp.news)

        let p = resp.news.map((y, j) => {
            return (
                <div key={j} className="news">
                    <img src={y.urlToImage} alt="Image not available" />
                    <h3 className='news__title'>{y.title}</h3>
                    <p className='news__description'>{y.description}</p>
                    <a href={y.url}>Read more....</a>
                    <span className='news__author'>{y.author}</span><br />
                    <span className='news__published'>{y.publishedAt}</span>
                    <span className='news__source'>{y.source.name}</span>
                </div>
            )
        })
        setW(p)

    }
    if (f === 0) {
        np()
    }
    //console.log(f)
    function Change(event) {
        //console.log(event.target)
        //setQuery(event.target.id);
        //console.log(event.target.id)
        query=event.target.id
        setF(f + 1)
        async function nw() {

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'current-news.p.rapidapi.com',
                    'X-RapidAPI-Key': 'ae89180d60msh3a68fc31e7e4932p1a2a00jsn3ba988931826'
                }
            };
            let res = await(await fetch(`https://current-news.p.rapidapi.com/news/${query}`, options,{mode:'cors'})).json()
            console.log(res.news)
            let q = res.news.map((e, i) => {
                return (
                    <div key={i} className="news">
                        <img src={e.urlToImage} alt="Image not available" />
                        <h3 className='news__title'>{e.title}</h3>
                        <p className='news__description'>{e.description}</p>
                        <a href={e.url}>Read more....</a>
                        <span className='news__author'>{e.author}</span><br />
                        <span className='news__published'>{e.publishedAt}</span>
                        <span className='news__source'>{e.source.name}</span>
                    </div>
                )
            })
            setV(q)

        }
        nw()
    }
    //console.log(f)
    function type(){
        return (f==0?qur:query)
    }

    //console.log(type())
    function bool(){
        return (f==0?w:v)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">THE BULLETIN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#general" id="general" onClick={Change}>General</Nav.Link>
                            <Nav.Link href="#tech" id="technology" onClick={Change}>Technology</Nav.Link>
                            <Nav.Link onClick={Change} href="#science" id="science">Science</Nav.Link>
                            <Nav.Link onClick={Change} href="#sports" id="sports">Sports</Nav.Link>
                            <Nav.Link onClick={Change} href="#health" id="health">Health</Nav.Link>
                            <Nav.Link onClick={Change} href="#entertain" id="entertainment">Entertainment</Nav.Link>
                            <Nav.Link onClick={Change} href="#business" id="business">Business</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <h2 className="qur">{type()}</h2>
            <div className='all__news'>{bool()}</div>

        </div>
    )
}

export default Navb
