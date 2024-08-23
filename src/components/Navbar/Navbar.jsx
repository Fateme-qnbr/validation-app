import React, { useState } from 'react';
import Logo from '../../assets/Logo.svg'
const Navbar = () => {
    const [iconName, setIconName] = useState('menu');
    const Menu = () => {
        let list = document.getElementById('menu-list');
    
        if (iconName === 'menu') {
          setIconName('close');
          list.classList.add('top-[80px]');
          list.classList.add('opacity-100');
        } else {
          setIconName('menu');
          list.classList.remove('top-[80px]');
          list.classList.remove('opacity-100');
        }
      };

  return (
    <div>
        {/* flex flex-wrap items-center justify-between container mx-a0uto px-1 cormorant-garamond-semibold */}
        <div className= "">
            <nav className= "p-5 bg-white md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                        <img className="lg:h-10 inline cursor-pointer md:h-6 h-3-sm" src={Logo} alt='Logo' />
                        
                    <span className = "text-3xl cursor-pointer mx-2 md:hidden block">
                        <ion-icon name={iconName}  onClick={Menu}></ion-icon>
                    </span>
                </div>
                <ul id="menu-list" className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 " >
                    <li className="mx-8 my-6 md:my-0"><a href='' className="text-xl hover:text-product-green duration-500 cormorant-garamond-semibold" >HOME</a></li>
                    <li className="mx-8 my-6 md:my-0"><a href='' className="text-xl hover:text-product-green duration-500 cormorant-garamond-semibold">SHOP</a></li>
                    <li className="mx-8 my-6 md:my-0"><a href='' className="text-xl hover:text-product-green duration-500 cormorant-garamond-semibold">FEATURES</a></li>
                    <li className="mx-8 my-6 md:my-0"><a href='' className="text-xl hover:text-product-green duration-500 cormorant-garamond-semibold">CONTANT</a></li>
                    <li className="mx-8 hidden lg:block"><a href=''><ion-icon name="cart"></ion-icon></a></li>
                    <button className="border-green mx-12 py-2 px-6 border-1 rounded-xl duration-500 cormorant-garamond-semibold hidden md:block">LOGIN</button>
                </ul>
          
        </nav>
        </div>
    </div>
  )
}



export default Navbar