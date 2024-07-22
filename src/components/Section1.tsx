import React from 'react'
import Image from "next/image";
import Link from "next/link";


import { FaBootstrap, FaCss3, FaDatabase, FaGithub, FaGithubAlt, FaHtml5, FaJs, FaLinkedin, FaNodeJs, FaReact, FaTwitter } from "react-icons/fa";
import { FaSquareXTwitter, FaX } from "react-icons/fa6";



function Section1() {
  return (
    <div className="flex gap-4 m-4 p-4">
          <div className="h-[90vh] w-screen overflow-hidden flex justify-around items-center overflow-x-hidden">
            <div className=" h-fit p-4 m-4 rounded-md flex justify-center items-center gap-8">
              <Image src={'/Chinmay.jpg'} width={400} height={400} alt="Chinmay" className="rounded-full aspect-square" />
              <div>
                <p className="text-7xl font-extrabold">Chinmay G. Gadgil</p>
                <ul className=" text-gray-400 list-disc text-2xl">
                  <li className=" ">Full Stack Web Developer</li>
                  <li>Frontend Developer at <Link href={'https://talenflow.in'}>Talenflow.in</Link></li>
                  <li>Student At Goa College Of Engineering</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col  gap-6">
              <div className="max-w-[50vw] min-w-[30vw] text-3xl p-2 m-2" >
                Hi, I&apos;m Chinmay Gadgil, a passionate full-stack web development enthusiast currently in my second year of computer engineering at Goa College of Engineering. I am learning Next.js and enjoy creating dynamic and efficient web applications. In addition to web development, I have a strong interest in competitive programming and regularly solve problems on LeetCode. My goal is to continually enhance my skills and develop innovative solutions that make a significant impact.
              </div>
              <div className="flex gap-4 justify-center  items-center">
                <div className="text-4xl font-bold">My Socials</div>
                <Link href={"https://github.com/ChinmayGadgil1"}><FaGithub className="aspect-square h-12 w-12" /></Link>
                <Link href={"https://www.linkedin.com/in/chinmay-gadgil-1888632b2"}><FaLinkedin className="aspect-square h-12 w-12" /></Link>
                <Link href={"https://x.com/ChinmayGadgil4"}><FaSquareXTwitter className="aspect-square h-12 w-12" /></Link>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Section1