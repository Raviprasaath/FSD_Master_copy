import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Search from './Components/Search/Search.jsx'
import Support from './Components/Support/Support.jsx'
import Info from './Components/Info/Info.jsx'
import Longue from './Components/Longue/Longue.jsx'
import Travelers from './Components/Travelers/Travelers.jsx'
import Subscribers from './Components/Subscribers/Subscribers.jsx'
import Footer from './Components/Footer/Footer.jsx'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Search/>
      <Travelers/>
      <Support/>
      <Info/>
      <Longue/>
      <Subscribers/>
      <Footer/>
    </>
  )
}

export default App
