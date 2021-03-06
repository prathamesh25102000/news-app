import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NewsContextProvider } from './NewsContext';
import Footer from "./components/Footer";

const container=document.getElementById('root')
const root=ReactDOM.createRoot(container)

root.render(
  <>
    <App/>
    <Footer />
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
