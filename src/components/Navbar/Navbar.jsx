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
        <div>
            <nav className= "p-3 bg-custom-orange md:p-3 md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                        <img className="px-12 w-36 h-[25px] lg:h-4/5 inline cursor-pointer" src={Logo} alt='Logo' />
                        
                    <span className = "text-3xl cursor-pointer mx-2 md:hidden block">
                        <ion-icon name={iconName}  onClick={Menu}></ion-icon>
                    </span>
                </div>
                <ul id="menu-list" className=" flex flex-col items-cente float-right md:flex md:flex-row md:items-center z-[-1] md:z-auto md:static md:m-1 absolute w-full left-0 md:w-auto md:h-1 md:py-0 py-4 md:pl-0 px-10 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 " >
                    <li className="md:items-center mx-8 my-6 lg:mx-8 md:mx-4 md:my-0"><a href='' className="md:text-base lg:text-xl text-xl hover:text-product-green duration-500 cormorant-garamond-semibold" >HOME</a></li>
                    <li className="mx-8 my-6 lg:mx-8 md:mx-4 md:my-0"><a href='' className="md:text-base lg:text-xl text-xl hover:text-product-green duration-500 cormorant-garamond-semibold">SHOP</a></li>
                    <li className="mx-8 my-6 lg:mx-8 md:mx-4 md:my-0"><a href='' className="md:text-base lg:text-xl text-xl hover:text-product-green duration-500 cormorant-garamond-semibold">FEATURES</a></li>
                    <li className="mx-8 my-6 lg:mx-8 md:mx-4 md:my-0"><a href='' className="md:text-base lg:text-xl text-xl hover:text-product-green duration-500 cormorant-garamond-semibold">CONTANT</a></li>
                    <li className="mx-8 lg:mx-8 md:mx-4 hidden lg:block"><a href=''><ion-icon name="cart"></ion-icon></a></li>
                    <button className="border-green lg:mx-10 lg:py-2 lg:px-4 sm:mr-4 sm:ml-8 sm:py-1 sm:px-2 sm:text-xs border-1 rounded-xl duration-500 cormorant-garamond-semibold">LOGIN</button>
                </ul>
          
        </nav>
        </div>
    </div>
  )
}



export default Navbar