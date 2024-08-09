'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaPhone,FaHome,FaProjectDiagram} from 'react-icons/fa'
import Image from 'next/image'
import { FaCross } from 'react-icons/fa6'
import { FiCrosshair } from 'react-icons/fi'

function Navbar() {

  const [clicked, setClicked] = useState<boolean>(false)

  const handleClick=()=>{
    setClicked(!clicked);
  }

  

  return (
    <>
    <div className='hidden md:flex h-fit justify-between items-center bg-[#6a23a8] text-2xl p-2 w-screen'>
      <div className='text-6xl font-extrabold'>Chinmay Gadgil</div>
      <div className='flex gap-10 text-4xl'>
        <Link href='/' className='flex flex-col justify-center items-center p-2 m-1'><FaHome/>Home</Link>
        
        <Link href='/projects'  className='flex flex-col justify-center items-center p-2 m-1'><FaProjectDiagram/>Projects</Link>
        <Link href='/contact-me'  className='flex flex-col justify-center items-center p-2 m-1'><FaPhone/>Contact Me</Link>
      </div>
    </div>

    {/* MOBILE VIEW */}
    <div className="w-screen h-fit bg-[#6a23a8] md:hidden">
      {clicked ?  <Image src={'/cross-svgrepo-com (1).svg'} alt='Burgermenu' width={70} height={70} onClick={handleClick} unoptimized/>: <Image src={'/menu-burger-horizontal-svgrepo-com.svg'} alt='Burgermenu' width={70} height={70} onClick={handleClick} unoptimized/>}

      {clicked && <div className='absolute bg-[#6a23a8] flex w-fit rounded-br-xl  items-center'>

        <div className='flex flex-col gap-4 text-2xl'>
        <Link href='/' onClick={handleClick} className='flex justify-start items-center p-2 m-1 gap-3 '><FaHome/>Home</Link>
        
        <Link href='/projects' onClick={handleClick} className='flex justify-start items-center p-2 m-1 gap-3'><FaProjectDiagram/>Projects</Link>
        <Link href='/contact-me' onClick={handleClick} className='flex justify-start items-center p-2 m-1 gap-3'><FaPhone/>Contact Me</Link>
      </div>
        
        </div>}
    </div>
    </>
  )
}

export default Navbar