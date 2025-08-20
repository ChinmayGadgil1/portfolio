'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, MapPin, Users, Palette, ChevronRight, Github, Eye } from 'lucide-react';
import DotGrid from '@/DotGrid/DotGrid';
import Image from 'next/image';
const ProjectsPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const projects = [
    {
      id: 1,
      title: "Gamified Tourism App",
      subtitle: "Manipal Institute of Technology Hackathon",
      description: "An innovative gamified tourism app built in 36 hours, combining essential travel utilities with engaging features for memorable user journeys.",
      features: [
        "🗺️ Offline Maps - Seamless navigation without internet",
        "🎯 Spin Wheel Game - Element of chance and excitement",
        "🔍 Personalized Recommendations - Tailored content",
        "🗝️ Mystery Maps & Letters - Adventure-driven features",
        "🚨 Emergency SOS - Quick-access assistance",
        "📲 Social Media Posting - Easy experience sharing",
        "🏆 Leaderboard - Performance tracking and competition"
      ],
      skills: ["React Native", "Node.js", "Firebase", "Maps API"],
      category: "Mobile App",
      status: "Hackathon Project",
      gradient: "from-blue-600 via-purple-600 to-pink-600",
      icon: "tourism_app.png"
    },
    {
      id: 2,
      title: "Peer Hive",
      subtitle: "NIT Goa Hackathon Winner 🏆",
      description: "A Student Association Platform enhancing campus life through community engagement, resource sharing, and streamlined collaboration. Built in 24 hours.",
      features: [
        "Community engagement tools",
        "Resource sharing capabilities",
        "Collaboration streamlining",
        "Modern technology integration",
        "Active student community support"
      ],
      skills: ["Next.js", "MongoDB", "Flask"],
      category: "Web Platform",
      status: "Winner",
      gradient: "from-green-600 via-teal-600 to-blue-600",
      icon: "peerHive.png"
    },
    {
      id: 3,
      title: "Sticker-Hive",
      subtitle: "Custom Design Platform",
      description: "A web platform enabling users to create and personalize custom keyboard key stickers without needing editing software.",
      features: [
        "User-friendly interface for seamless creation",
        "Extensive customization options",
        "Templates, colors, fonts, and icons",
        "Community-driven design inspiration",
        "No editing software required"
      ],
      skills: ["Next.js", "Tailwind CSS", "Three.js", "html2canvas", "TypeScript"],
      category: "Web Application",
      status: "Live Project",
      gradient: "from-orange-600 via-red-600 to-purple-600",
      icon: "stickerHive.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen  text-xl text-white  overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <DotGrid
          dotSize={8}
          gap={32}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={150}
          shockStrength={1}
          resistance={750}
          returnDuration={1}
        />
      </div>
      <div className='hidden md:block h-20'></div>
      <div className=" container mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Showcasing innovative solutions built during hackathons and personal development
          </p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project) => {
            return (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover="hover"
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500">
                  {/* Project Image Placeholder */}
                  <div className={`h-48 bg-gradient-to-br relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute ">
                      
                        <Image
                          src={`/${project.icon}`}
                          alt={project.title}
                          width={4800}
                          height={4800}
                          className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute top-4 right-4">
                      {project.status === "Winner" && <Award className="w-6 h-6 text-yellow-400" />}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-white/60 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: 0.8, duration: 1.2 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>

                    <p className="text-xl font-medium text-purple-400 mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-gray-300 text-xl leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                      {project.skills.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-white/10 text-gray-400 rounded-md">
                          +{project.skills.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xl font-medium transition-colors flex items-center justify-center gap-2">
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                      <button className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-slate-900/95 backdrop-blur-sm border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-purple-400 font-medium">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className={`h-64 bg-gradient-to-br ${selectedProject.gradient} rounded-xl mb-6 flex items-center justify-center overflow-hidden`}>
                  <Image
                    src={`/${selectedProject.icon}`}
                    alt={selectedProject.title}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <p className="text-gray-300 text-xl mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="text-gray-300 text-xl flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-xl"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex gap-3">


                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPortfolio;