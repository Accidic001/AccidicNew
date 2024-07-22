import React from 'react'
import {Route, Routes} from "react-router-dom"
import NavBar from './assets/Navbar'
import './App.css'
import News from './assets/News'
import Bussiness from './assets/Bussiness'
import Technology from './assets/Technology'
import Sport from './assets/Sport'
import Science from './assets/Science'
import Entertainment from './assets/Entertainment'
import NewsLetter from './assets/NewsLetter'
import Footer from './assets/Footer'


function App() {
  
  return (
    <div className='container'>
      <NavBar />
      <Routes>
        <Route path="/"  element={<News />} />
        <Route path="/Bussiness"  element={<Bussiness />} />
        <Route path="/Technology"  element={<Technology />} />
        <Route path="/Sport"  element={<Sport />} />
        <Route path="/Science"  element={<Science />} />
        <Route path="/Entertainment"  element={<Entertainment />} />
        <Route path="/newsletter"  element={<NewsLetter />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
