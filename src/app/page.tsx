import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { BiX } from "react-icons/bi";
import { DiMongodb, DiPhotoshop, DiPostgresql, DiSqllite } from "react-icons/di";
import { FaBootstrap, FaCss3, FaDatabase, FaGithub, FaGithubAlt, FaHtml5, FaJs, FaLinkedin, FaNodeJs, FaReact, FaTwitter } from "react-icons/fa";
import { FaSquareXTwitter, FaX } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { GiTBrick } from "react-icons/gi";
import { SiAssemblyscript, SiC, SiCplusplus, SiExpress, SiGit, SiMongodb, SiMongoose, SiMongoosedotws, SiNextdotjs, SiPostgresql, SiPostman, SiQlik, SiShadcnui, SiSqlalchemy, SiTypescript } from "react-icons/si";
import { TbSql } from "react-icons/tb";

export default function Home() {
  return (
    <div className="overflow-hidden text-[#ffffff]">
      <Navbar />
      <div className="hidden md:block overflow-hidden w-screen bg-black">
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
        <div className="flex flex-col items-center m-4 p-4">
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
      </div>
      {/* <Footer /> */}
    </div>
  );
}
