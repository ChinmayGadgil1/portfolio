'use client'
import React, { useEffect, useRef } from 'react'
import { DiPhotoshop } from "react-icons/di";
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact, FaRust } from "react-icons/fa";

import { FiFigma } from "react-icons/fi";
import { SiAssemblyscript, SiC, SiCplusplus, SiExpress, SiGit, SiMongodb, SiMongoose, SiNextdotjs, SiPostgresql, SiPostman, SiShadcnui, SiTypescript } from "react-icons/si";

import { motion, useAnimation, useInView } from 'framer-motion';
import AnimatedTextCharacter from './AnimatedTextCharacter';

function Skills() {
  const symbolClasses = "aspect-square h-20 w-12 hover:scale-110";

  const ref = useRef(null)
  const mref = useRef(null)
  const inview = useInView(ref, { once: true });
  const minview = useInView(ref, { once: true });
  const control = useAnimation()
  const mcontrol = useAnimation()

  useEffect(() => {
    if (inview) {
      control.start("visible");
    }

  }, [inview, control])

  useEffect(() => {
    if (minview) {
      mcontrol.start("visible");
    }

  }, [minview, mcontrol])

  const text = "My Skills"


  return (
    <>

      <div className='overflow-hidden hidden lg:flex justify-center items-center '>

        <motion.div ref={ref} className="flex flex-col items-center m-4 p-4 overflow-hidden w-[90vw]" variants={
          {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }
        }
          initial={"hidden"}
          animate={control}
          transition={{ delay: 0.08, duration: 1 }}>
          <AnimatedTextCharacter text={text} />
          <div className="flex flex-wrap h-fit justify-aroundvitems-center gap-5 ">
            <div className="w-[30%] h-[40vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold hover:text-bold ">Frontend</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <FaHtml5 className={`${symbolClasses} hover:fill-orange-500`} />
                <FaCss3 className={`${symbolClasses} hover:fill-blue-600`} />
                <SiTypescript className={`${symbolClasses} hover:fill-blue-400`} />
                <FaJs className={`${symbolClasses} hover:fill-[#eeff01]`} />
                <FaReact className={`${symbolClasses} hover:fill-blue-400`} />
                <SiNextdotjs className={`${symbolClasses} hover:fill-gray-400`} />
                <FaBootstrap className={`${symbolClasses} hover:fill-violet-600`} />
                <SiShadcnui className={`${symbolClasses} hover:fill-gray-400`} />

              </div>
            </div>
            <div className="w-[30%] h-[40vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Backend</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <FaNodeJs className={`${symbolClasses} hover:fill-green-500`} />
                <SiTypescript className={`${symbolClasses} hover:fill-blue-500`} />
                <SiExpress className={`${symbolClasses} hover:fill-gray-400`} />
                <SiPostman className={`${symbolClasses} hover:fill-orange-500`} />
                <SiNextdotjs className={`${symbolClasses} hover:fill-gray-400`} />
              </div>
            </div>
            <div className="w-[30%] h-[40vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">DB</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <SiMongodb className={`${symbolClasses} hover:fill-green-900`} />
                <SiMongoose className={`${symbolClasses} hover:fill-orange-900`} />
                <SiPostgresql className={`${symbolClasses} hover:fill-orange-100`} />
              </div>
            </div>
            <div className="w-[30%] h-[40vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Version Control</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <FaGithub className={`${symbolClasses} hover:fill-gray-500`} />
                <SiGit className={`${symbolClasses} hover:fill-[#f42d2d]`} />
              </div>
            </div>
            <div className="w-[30%] h-[40vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Other Languages</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <SiC className={`${symbolClasses} hover:fill-blue-500`} />
                <SiCplusplus className={`${symbolClasses} hover:fill-blue-500`} />
                <SiAssemblyscript className={`${symbolClasses} hover:fill-gray-500`} />
              </div>
            </div>
            <div className="w-[30%] h-[40vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Design</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <DiPhotoshop className={`${symbolClasses} hover:fill-blue-700`} />
                <FiFigma className={`${symbolClasses} hover:fill-gray-500`} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>




      {/* Mobile View  */}

      <div className='overflow-hidden lg:hidden flex justify-center items-center '>

        <motion.div ref={mref} className="flex flex-col items-center m-4 p-4 overflow-hidden w-[90vw]" variants={
          {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }
        }
          initial={"hidden"}
          animate={control}
          transition={{ delay: 0.08, duration: 1 }}>
          <AnimatedTextCharacter text="MY SKILLS" />
          <div className="flex flex-wrap h-fit justify-aroundvitems-center gap-5 ">
            <div className="w-full h-fit border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold hover:text-bold ">Frontend</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <FaHtml5 className={`${symbolClasses} hover:fill-orange-500`} />
                <FaCss3 className={`${symbolClasses} hover:fill-blue-600`} />
                <SiTypescript className={`${symbolClasses} hover:fill-blue-400`} />
                <FaJs className={`${symbolClasses} hover:fill-[#eeff01]`} />
                <FaReact className={`${symbolClasses} hover:fill-blue-400`} />
                <SiNextdotjs className={`${symbolClasses} hover:fill-gray-400`} />
                <FaBootstrap className={`${symbolClasses} hover:fill-violet-600`} />
                <SiShadcnui className={`${symbolClasses} hover:fill-gray-400`} />

              </div>
            </div>
            <div className="w-full h-fit border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Backend</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <FaNodeJs className={`${symbolClasses} hover:fill-green-500`} />
                <SiTypescript className={`${symbolClasses} hover:fill-blue-500`} />
                <SiExpress className={`${symbolClasses} hover:fill-gray-400`} />
                <SiPostman className={`${symbolClasses} hover:fill-orange-500`} />
                <SiNextdotjs className={`${symbolClasses} hover:fill-gray-400`} />
              </div>
            </div>
            <div className="w-full h-fit border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">DB</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <SiMongodb className={`${symbolClasses} hover:fill-green-900`} />
                <SiMongoose className={`${symbolClasses} hover:fill-orange-900`} />
                <SiPostgresql className={`${symbolClasses} hover:fill-orange-100`} />
              </div>
            </div>
            <div className="w-full h-fit border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Version Control</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <FaGithub className={`${symbolClasses} hover:fill-gray-500`} />
                <SiGit className={`${symbolClasses} hover:fill-[#f42d2d]`} />
              </div>
            </div>
            <div className="w-full h-fit border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Other Languages</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <SiC className={`${symbolClasses} hover:fill-blue-500`} />
                <SiCplusplus className={`${symbolClasses} hover:fill-blue-500`} />
                <SiAssemblyscript className={`${symbolClasses} hover:fill-gray-500`} />
              </div>
            </div>
            <div className="w-full h-fit border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Design</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <DiPhotoshop className={`${symbolClasses} hover:fill-blue-700`} />
                <FiFigma className={`${symbolClasses} hover:fill-gray-500`} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </>
  )
}

export default Skills