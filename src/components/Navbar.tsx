import React from 'react'
import Link from 'next/link'
import { FaPhone,FaHome,FaProjectDiagram,FaUser } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='flex h-[10vh] justify-between items-center bg-[#6a23a8] text-2xl p-2 w-screen'>
      <div className='text-6xl font-extrabold'>Chinmay Gadgil</div>
      <div className='flex gap-10 text-4xl'>
        <Link href='/' className='flex flex-col justify-center items-center p-2 m-1'><FaHome/>Home</Link>
        <Link href='/'  className='flex flex-col justify-center items-center p-2 m-1'><FaUser/>About</Link>
        <Link href='/'  className='flex flex-col justify-center items-center p-2 m-1'><FaProjectDiagram/>Projects</Link>
        <Link href='/'  className='flex flex-col justify-center items-center p-2 m-1'><FaPhone/>Contact Me</Link>
      </div>
    </div>
  )
}

export default Navbar