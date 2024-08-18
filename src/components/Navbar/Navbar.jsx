import React from 'react'
import Logo from '../../assets/Logo.svg'
const Navbar = () => {
  return (
    <div>
        <div>
           <a href=''>
                <img src={Logo} alt='Logo'/>
            </a>
        </div>
        <div>
            <a href=''>
                HOME
            </a>
            <a href=''>
                SHOP
            </a>
            <a href=''>
                FEATURES
            </a>
            <a href=''>
                CONTANT
            </a>
            <a href=''>
                <img src=''/>
            </a>
            <div>
                <h4>LOGIN</h4>
            </div>
        </div>
    </div>
  )
}

export default Navbar
