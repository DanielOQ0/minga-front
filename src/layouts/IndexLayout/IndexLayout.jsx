import React from 'react'
import './IndexLayout.css'
import NavBar from '../../components/NavBar/NavBar.jsx'

export default function IndexLayout(props) {
  return (
    <><NavBar/>
    {props.children}
    </>
  )
}
