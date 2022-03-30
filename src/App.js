import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
import './App.css';
import { NewsContextProvider } from './NewsContext';
import News from './components/News'
import Navb from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <NewsContextProvider>
      <Navb />
      <News />
    </NewsContextProvider>
    </div>
  );
}

export default App;
