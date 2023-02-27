import React from 'react'
import './Index.css'
import Hero from '../Hero/Hero.jsx'
import Register from '../Register/Register.jsx'
import NavBar from '../NavBar/NavBar.jsx'

export default function Index() {
  return (
    <div id='index'>
        <NavBar/>
        <Hero/>
        <Register/>
    </div>
  )
}
