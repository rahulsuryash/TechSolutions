import React from 'react'

import "../styles/Nav.scss"
import {HashLink} from "react-router-hash-link";

const Nav = () => {
  return (
    <div>
      <nav>
      <h1>Tech Star</h1>
   
        <main>
        
          <HashLink to={"/"}>home</HashLink>
          <HashLink to={"/contact"}>contact</HashLink>
          <HashLink to={"/#about"}>about</HashLink>
          <HashLink to={"/#brands"}>brands</HashLink>
          <HashLink to={"/Services"}>Services</HashLink>
        </main>
      </nav>
    </div>
  )
}

export default Nav