import React from 'react'
import { useState } from 'react';
import logo1 from '../images/logo.svg'

import BurgerNav from './BurgerNav';

export default function Header() {

  const [ toggleNav, setToggleNav] = useState(false)

  const toggle = () => {
    setToggleNav(prevVal => !prevVal)
  }
  
  return (
    <div className='container'>
      <div className='logoImg'>
        <a>
          <img src={logo1} alt="logo" />
        </a>
      </div>

      <div className='menuCenter'>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </div>

      <div className='groupRight'>
        <div className='menuRight'>
          <a href="#">Shop</a>
          <a href="#">Account</a>
        </div>

        <div className='menuLast'>
          <a href="#" onClick={toggle}>Menu</a>
        </div>
      </div>

      {toggleNav && <BurgerNav toggle={toggle} />}



    </div>
  )
}
