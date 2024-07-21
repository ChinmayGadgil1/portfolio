import React from 'react'
import Link from 'next/link'
import { FaPhone,FaHome,FaProjectDiagram,FaUser } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='flex justify-end items-center bg-blue-950 text-2xl p-2 '>
      {/* <div className='text-6xl font-extrabold'>Chinmay Gadgil</div> */}
      <div className='flex gap-5 text-4xl'>
        <Link href='/'><FaHome/>Home</Link>
        <Link href='/'><FaUser/>About</Link>
        <Link href='/'><FaProjectDiagram/>Projects</Link>
        <Link href='/'><FaPhone/>Contact Me</Link>
      </div>
    </div>
  )
}

export default Navbar