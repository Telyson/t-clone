import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

export default function BurgerNav({toggle}) {
  return (
    <div className='burgerNav'>

    <div  className='burgerNavClose' onClick={toggle}>
      <AiOutlineClose /> 
    </div>

    <li><a href="#">Model S</a></li>
    <li><a href="#">Model 3</a></li>
    <li><a href="#">Model X</a></li>
    <li><a href="#">Model Y</a></li>
    <li><a href="#">Solar Roof</a></li>
    <li><a href="#">Solar Panels</a></li>
    <li><a href="#">Exiting Inventory</a></li>
    <li><a href="#">use Inventory</a></li>
    <li><a href="#">Trade-In</a></li>
    <li><a href="#">Cybertruck</a></li>
    <li><a href="#">Roadster</a></li>
    <li><a href="#">Semi</a></li>
    <li><a href="#">Chargin</a></li>
    <li><a href="#">Powerwall</a></li>
    <li><a href="#">Commercial energy</a></li>
    <li><a href="#">Utilities</a></li>
    <li><a href="#">Test drive</a></li>
  </div>
  )
}
