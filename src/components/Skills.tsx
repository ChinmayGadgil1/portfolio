'use client'
import React, { useEffect, useRef, useState } from 'react'
import { DiPhotoshop } from "react-icons/di";
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiAssemblyscript, SiC, SiCplusplus, SiExpress, SiGit, SiMongodb, SiMongoose, SiNextdotjs, SiPostgresql, SiPostman, SiShadcnui, SiTypescript } from "react-icons/si";
import { motion, useAnimation, useInView } from 'framer-motion';

function Skills() {
  const symbolClasses = "aspect-square h-20 w-12 hover:scale-110";
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const skillCategories = [
    {
      title: "Frontend",
      icons: [
        { Icon: FaHtml5, hoverColor: "hover:fill-orange-500" },
        { Icon: FaCss3, hoverColor: "hover:fill-blue-600" },
        { Icon: SiTypescript, hoverColor: "hover:fill-blue-400" },
        { Icon: FaJs, hoverColor: "hover:fill-[#eeff01]" },
        { Icon: FaReact, hoverColor: "hover:fill-blue-400" },
        { Icon: SiNextdotjs, hoverColor: "hover:fill-gray-400" },
      ]
    },
    {
      title: "Backend",
      icons: [
        { Icon: FaNodeJs, hoverColor: "hover:fill-green-500" },
        { Icon: SiTypescript, hoverColor: "hover:fill-blue-500" },
        { Icon: SiExpress, hoverColor: "hover:fill-gray-400" },
        { Icon: SiPostman, hoverColor: "hover:fill-orange-500" },
        { Icon: SiNextdotjs, hoverColor: "hover:fill-gray-400" },
      ]
    },
    {
      title: "Database",
      icons: [
        { Icon: SiMongodb, hoverColor: "hover:fill-green-900" },
        { Icon: SiMongoose, hoverColor: "hover:fill-orange-900" },
        { Icon: SiPostgresql, hoverColor: "hover:fill-blue-500" },
      ]
    },
    {
      title: "Version Control",
      icons: [
        { Icon: FaGithub, hoverColor: "hover:fill-gray-500" },
        { Icon: SiGit, hoverColor: "hover:fill-[#f42d2d]" },
      ]
    },
    {
      title: "Other Languages",
      icons: [
        { Icon: SiC, hoverColor: "hover:fill-blue-500" },
        { Icon: SiCplusplus, hoverColor: "hover:fill-blue-500" },
        { Icon: SiAssemblyscript, hoverColor: "hover:fill-gray-500" },
      ]
    },
    {
      title: "Design",
      icons: [
        { Icon: DiPhotoshop, hoverColor: "hover:fill-blue-700" },
        { Icon: FiFigma, hoverColor: "hover:fill-gray-500" },
      ]
    }
  ];

  const ref = useRef(null);
  const skillsref = useRef(null);
  const inview = useInView(ref, { once: true });
  const isInView = useInView(skillsref);
  const control = useAnimation();

  useEffect(() => {
    if (inview) {
      control.start("visible");
    }
  }, [inview, control]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skillCategories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Desktop View - Now shows one section at a time */}
      <div className='overflow-hidden hidden h-screen lg:flex w-screen justify-center items-center'>
        <motion.div 
          ref={ref} 
          className="flex flex-col justify-center items-center m-4 p-4 overflow-hidden w-[90vw]" 
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial={"hidden"}
          animate={control}
          transition={{ delay: 0.08, duration: 1 }}
        >
          <div className='font-extrabold text-7xl mb-8' ref={skillsref} style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.0s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}>My Skills</div>

          {/* Single Section Display for Desktop */}
          <div className="flex justify-center items-center min-h-[60vh] min-w-[60vw]">
            <motion.div 
              key={currentSlide}
              className="w-[60%] max-w-2xl min-h-[40vh] border border-[#bc5efe] flex flex-col items-center gap-8 p-8 rounded-lg" 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-5xl font-bold text-center">{skillCategories[currentSlide].title}</p>
              <div className="flex flex-wrap gap-8 justify-center items-center">
                {skillCategories[currentSlide].icons.map(({ Icon, hoverColor }, iconIndex) => (
                  <motion.div
                    key={iconIndex}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: iconIndex * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <Icon className={`${symbolClasses} ${hoverColor} transition-all duration-300`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation for Desktop */}
          <div className="flex items-center gap-6 mt-8">
            <button 
              onClick={prevSlide}
              className="bg-[#bc5efe] p-4 rounded-full text-white hover:bg-[#a548e0] transition-colors text-xl"
            >
              <FaChevronLeft />
            </button>
            
            {/* Dots Indicator for Desktop */}
            <div className="flex justify-center gap-3">
              {skillCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-[#bc5efe] scale-125' 
                      : 'bg-gray-400 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="bg-[#bc5efe] p-4 rounded-full text-white hover:bg-[#a548e0] transition-colors text-xl"
            >
              <FaChevronRight />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Carousel View */}
      <div className='overflow-hidden lg:hidden flex justify-center items-center min-h-screen py-8'>
        <div className="flex flex-col items-center m-4 p-4 w-[90vw]">
          <div className='font-extrabold text-6xl mb-8'>My Skills</div>
          
          {/* Carousel Container */}
          <div className="relative w-full max-w-md">
            <div className="overflow-hidden rounded-lg">
              <motion.div 
                className="flex"
                animate={{ x: `${-currentSlide * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {skillCategories.map((category, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="border border-[#bc5efe] rounded-lg flex flex-col items-center gap-5 p-6 min-h-[350px] justify-center">
                      <p className="text-3xl font-bold text-center">{category.title}</p>
                      <div className="flex flex-wrap gap-4 justify-center items-center">
                        {category.icons.map(({ Icon, hoverColor }, iconIndex) => (
                          <motion.div
                            key={iconIndex}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Icon className={`${symbolClasses} ${hoverColor} transition-all duration-300`} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-[#bc5efe] p-3 rounded-full text-white hover:bg-[#a548e0] transition-colors"
            >
              <FaChevronLeft />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-[#bc5efe] p-3 rounded-full text-white hover:bg-[#a548e0] transition-colors"
            >
              <FaChevronRight />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {skillCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-[#bc5efe] scale-125' 
                      : 'bg-gray-400 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
