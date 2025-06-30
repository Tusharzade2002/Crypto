import React from 'react'
import logo from '../assets/logo.png'
import arrow_icon from '../assets/arrow_icon.png'
function Navbar() {
  return (
    <div className='flex items-center justify-around p-4 text-cyan-100 border-b-2'>
         <img src={logo} alt='' className='w-24' />
         <ul className='flex items-center gap-4 text-lg'>
             <li className='pointer'>Home</li>
             <li className='pointer'>Features</li>
             <li className='pointer'>Pricing</li>
             <li className='pointer'>Blog</li>
         </ul>
         <div className='flex items-center gap-4'> 
            <select className='px-2 py-1 rounded-md bg-transparent text-white border-2 '>
              <option className='bg-cyan-500 text-white' value="usd">USD</option>
              <option className='bg-cyan-500 text-white' value="eur">EUR</option>
              <option className='bg-cyan-500 text-white' value="inr ">INR</option>
            </select>
            <button className='pointer flex items-center gap-1 px-2 py-1 rounded-3xl bg-white text-black'>Sign Up <img className='w-4' src={arrow_icon} alt='' /></button>
         </div>
    </div>
  )
}

export default Navbar