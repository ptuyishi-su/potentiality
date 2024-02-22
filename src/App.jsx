import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import './App.css'
import Home from "./components/pages/home";
import About from './components/pages/about'
import Resources from "./components/pages/resources"
import Members from "./components/ui/Members"
import Navbar from "./components/ui/NavBar"
import Contact from "./components/pages/Contact"
function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Contact" element= {<Contact/>}/>
       </Routes>

    </>
  )
}
export default App
