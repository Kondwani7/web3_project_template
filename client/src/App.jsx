import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from "../components/Navbar"
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
import Transactions from '../components/Transactions'
import Services from '../components/Services'
function App() {

  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App
