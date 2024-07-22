import React from 'react'
import { DiMongodb, DiPhotoshop, DiPostgresql, DiSqllite } from "react-icons/di";
import { FaBootstrap, FaCss3, FaDatabase, FaGithub, FaGithubAlt, FaHtml5, FaJs, FaLinkedin, FaNodeJs, FaReact, FaTwitter } from "react-icons/fa";
import { FaSquareXTwitter, FaX } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { GiTBrick } from "react-icons/gi";
import { SiAssemblyscript, SiC, SiCplusplus, SiExpress, SiGit, SiMongodb, SiMongoose, SiMongoosedotws, SiNextdotjs, SiPostgresql, SiPostman, SiQlik, SiShadcnui, SiSqlalchemy, SiTypescript } from "react-icons/si";
import { TbSql } from "react-icons/tb";

function Skills() {
  return (
    <div className="flex flex-col items-center m-4 p-4 overflow-hidden">
          <p className="text-6xl font-bold p-4 m-4">MY SKILLS</p>
          <div className="flex flex-wrap h-fit justify-around gap-5 ">
            <div className="w-[30vw] h-[30vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
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
            <div className="w-[30vw] h-[30vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Backend</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <FaNodeJs className="aspect-square h-20 w-12" />
                <SiTypescript className="aspect-square h-20 w-12" />
                <SiExpress className="aspect-square h-20 w-12" />
                <SiPostman className="aspect-square h-20 w-12" />
                <SiNextdotjs className="aspect-square h-20 w-12" />
              </div>
            </div>
            <div className="w-[30vw] h-[30vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">DB</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <SiMongodb className="aspect-square h-20 w-12" />
                <SiMongoose className="aspect-square h-20 w-12" />
                <SiPostgresql className="aspect-square h-20 w-12" />
              </div>
            </div>
            <div className="w-[30vw] h-[30vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Version Control</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <FaGithub className="aspect-square h-20 w-12" />
                <SiGit className="aspect-square h-20 w-12" />
              </div>
            </div>
            <div className="w-[30vw] h-[30vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Other Languages</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <SiC className="aspect-square h-20 w-12" />
                <SiCplusplus className="aspect-square h-20 w-12" />
                <SiAssemblyscript className="aspect-square h-20 w-12" />
              </div>
            </div>
            <div className="w-[30vw] h-[30vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Design</p>
              <div className="flex flex-wrap gap-5 justify-center items-center max-w-[60%]">
                <DiPhotoshop className="aspect-square h-20 w-12" />
                <FiFigma className="aspect-square h-20 w-12" />
              </div>
            </div>
          </div>
        </div>
  )
}

export default Skills