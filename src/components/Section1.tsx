'use client'
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from 'framer-motion';


import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useEffect, useRef } from "react";



function Section1() {
  const ref = useRef(null)
  const inview = useInView(ref)
  const control = useAnimation()

  useEffect(() => {

    if (inview) {
      control.start("visible");
    }

  }, [inview, control])


  return (
    <>

      <div className="hidden md:flex gap-4 m-4 p-4 overflow-hidden">
        <div className="h-[90vh]   flex justify-around items-center overflow-x-hidden">
          <div className=" h-fit p-4 m-4 rounded-md flex justify-center items-center gap-8">
            <Image src={'/Chinmay.jpg'} width={400} height={400} alt="Chinmay" className="rounded-full aspect-square w-[25vw]" unoptimized style={{
              transform: inview ? "none" : "translateZ(200px)",
              opacity: inview ? 1 : 0,
              transition: "all 1.0s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
            }} />
            <div>
              <p className="text-7xl font-extrabold p-2 m-2" style={{
                transform: inview ? "none" : "skewX(-30deg) translateX(-200px)",
                opacity: inview ? 1 : 0,
                transition: "all 1.0s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
              }}>Chinmay G. Gadgil</p>
              <ul className=" text-gray-400 list-disc text-2xl" style={{
                transform: inview ? "none" : "skewY(-30deg) translateZ(-200px)",
                opacity: inview ? 1 : 0,
                transition: "all 1.0s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
              }}>
                <li className=" ">Full Stack Web Developer</li>
                <li>Frontend Developer at <Link href={'https://talenflow.in'}>Talenflow.in</Link></li>
                <li>GDG on Campus Cloud Lead</li>

                <li>Student At Goa College Of Engineering</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col  gap-6">
            <div ref={ref} className="max-w-[50vw] min-w-[30vw] text-3xl p-2 m-2" style={{
              transform: inview ? "none" : "translateX(-200px)",
              opacity: inview ? 1 : 0,
              transition: "all 1.0s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
            }}>
              Hi, I’m Chinmay Gadgil, a third-year Computer Engineering student passionate about full-stack web development. I love building dynamic, user-friendly applications and am currently exploring Next.js.

              Outside of web development, I enjoy competitive programming on LeetCode, constantly improving my problem-solving skills. My focus is on creating innovative solutions that make an impact.
            </div>
            <div className="flex gap-4 justify-center  items-center" style={{
              transform: inview ? "none" : "translateX(-200px)",
              opacity: inview ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}>
              <div className="text-4xl font-bold">My Socials</div>
                <Link href={"https://github.com/ChinmayGadgil1"} target="_blank" rel="noopener noreferrer"><FaGithub className="aspect-square h-12 w-12" /></Link>
                <Link href={"https://www.linkedin.com/in/chinmay-gadgil-1888632b2"} target="_blank" rel="noopener noreferrer"><FaLinkedin className="aspect-square h-12 w-12" /></Link>
                <Link href={"https://x.com/ChinmayGadgil4"} target="_blank" rel="noopener noreferrer"><FaSquareXTwitter className="aspect-square h-12 w-12" /></Link>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile View */}

      <div className='flex md:hidden flex-col w-screen h-screen justify-center items-center gap-5'>
        <div className='w-4/5 flex flex-col items-center'>
          <Image src={'/Chinmay.jpg'} width={175} height={175} alt="Chinmay" className="rounded-full aspect-square w-[60vw] max-w-[250px]" unoptimized />
          <p className="text-4xl font-extrabold p-2 m-2" >Chinmay Gadgil</p>
        </div>
        <div>
          <ul className=" text-gray-400 list-disc text-xl max-w-[70vw]">
            <li className=" ">Full Stack Web Developer</li>
            <li>Frontend Developer at <Link href={'https://talenflow.in'}>Talenflow.in</Link></li>
            <li>GDG on Campus Cloud Lead</li>
            <li>Student At Goa College Of Engineering</li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Section1