import React from 'react'
import { FaCopyright } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='bg-[#861616] flex flex-col gap-1 items-center'>
    <div><p className='text-white'>Let’s build something great together.</p></div>
    <div><p className='flex items-center gap-2 text-white'>ALL Rights reserved <FaCopyright/> 2025 By Gasser Zakarya</p></div>
    </div>
  )
}

export default Footer