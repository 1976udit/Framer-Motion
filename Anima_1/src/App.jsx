import { useState } from 'react'
import './App.css'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

function App() {


  return (
    <>

    <motion.div 
    // animate={{opacity:0.5,marginTop: 200, rotateY:180}}
    animate={{}}
    className="home container">
      <motion.h2 animate={{x:100 , y:-100, color:"red", fontWeight:"bolder"}}>
        Welcome to Motion
      </motion.h2>
      <Link to="/base">
         <motion.button animate={{scale:2}}>
           Create you Anima
         </motion.button>
      </Link>
    </motion.div>
    </>
  )
}

export default App

// animate is used to provide specific animation to the element 
// intital is used to define the intial posiition or porperties of the element
