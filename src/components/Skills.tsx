'use client'
import React, { useEffect, useRef } from 'react'
import { DiPhotoshop} from "react-icons/di";
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaJs,  FaNodeJs, FaReact } from "react-icons/fa";

import { FiFigma } from "react-icons/fi";
import { SiAssemblyscript, SiC, SiCplusplus, SiExpress, SiGit, SiMongodb, SiMongoose, SiNextdotjs, SiPostgresql, SiPostman,SiShadcnui, SiTypescript } from "react-icons/si";

import { motion,useAnimation,useInView } from 'framer-motion';
import AnimatedTextCharacter from './animatedTextCharacter';

function Skills() {

    const ref = useRef(null)
    const inview = useInView(ref,{once:true});
    const control = useAnimation()
    
    useEffect(() => {
      if(inview) {  
          control.start("visible");
      }
    
    }, [inview,control])

    const text="My Skills"
    

  return (
    <div className='overflow-hidden flex justify-center items-center'>

    <motion.div ref={ref} className="flex flex-col items-center m-4 p-4 overflow-hidden w-[90vw]" variants={
        {
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0},
        }
    } 
    initial={"hidden"}
    animate = {control}
    transition={{delay:0.07,duration:0.5}}>
          <AnimatedTextCharacter text="MY SKILLS"/>
          <div className="flex flex-wrap h-fit justify-aroundvitems-center gap-5 ">
            <div className="w-[30%] h-[30vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Frontend</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <FaHtml5 className="aspect-square h-20 w-12" />
                <FaCss3 className="aspect-square h-20 w-12" />
                <SiTypescript className="aspect-square h-20 w-12" />
                <FaJs className="aspect-square h-20 w-12" />
                <FaReact className="aspect-square h-20 w-12" />
                <SiNextdotjs className="aspect-square h-20 w-12" />
                <FaBootstrap className="aspect-square h-20 w-12" />
                <SiShadcnui className="aspect-square h-20 w-12" />
              </div>
            </div>
            <div className="w-[30%] h-[30vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Backend</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <FaNodeJs className="aspect-square h-20 w-12" />
                <SiTypescript className="aspect-square h-20 w-12" />
                <SiExpress className="aspect-square h-20 w-12" />
                <SiPostman className="aspect-square h-20 w-12" />
                <SiNextdotjs className="aspect-square h-20 w-12" />
              </div>
            </div>
            <div className="w-[30%] h-[30vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">DB</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <SiMongodb className="aspect-square h-20 w-12" />
                <SiMongoose className="aspect-square h-20 w-12" />
                <SiPostgresql className="aspect-square h-20 w-12" />
              </div>
            </div>
            <div className="w-[30%] h-[30vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Version Control</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <FaGithub className="aspect-square h-20 w-12" />
                <SiGit className="aspect-square h-20 w-12" />
              </div>
            </div>
            <div className="w-[30%] h-[30vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Other Languages</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <SiC className="aspect-square h-20 w-12" />
                <SiCplusplus className="aspect-square h-20 w-12" />
                <SiAssemblyscript className="aspect-square h-20 w-12" />
              </div>
            </div>
            <div className="w-[30%] h-[30vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Design</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <DiPhotoshop className="aspect-square h-20 w-12" />
                <FiFigma className="aspect-square h-20 w-12" />
              </div>
            </div>
          </div>
        </motion.div>
    </div>

  )
}

export default Skills