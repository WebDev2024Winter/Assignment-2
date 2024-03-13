"use client"
import React from 'react'
import Header from "../components/Header";
import Students from "./Students";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer"


const page = () => {
  return (
    <body>
      <Header/>
      <Navigation/>
      <Students/>
      <Footer/>
    </body>
  )
}

export default page