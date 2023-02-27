import React from 'react'
import Footer from '../../components/Footer/Footer.jsx'
import './MainLayout.css'
export default function MainLayout(props) {
  return (
    <><NavBar/>
    {props.children}
    <Footer/>
    </>
  )
}
