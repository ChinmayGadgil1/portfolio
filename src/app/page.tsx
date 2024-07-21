import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";

export default function Home() {
  return (
    <div className="overflow-hidden text-[#ffffff]">
      <Navbar />
      <div className="hidden md:block overflow-hidden w-screen h-screen bg-black">
        <div className="flex gap-4 m-4 p-4">
          <div className=" w-screen overflow-hidden flex justify-around overflow-x-hidden">
            <div className=" h-fit w-2/5 p-4 m-4 rounded-md flex justify-center items-center gap-8">
              <Image src={'/Chinmay.jpg'} width={200} height={200} alt="Chinmay" className="rounded-full aspect-square" />
              <div>
                <p className="text-6xl font-extrabold">Chinmay G. Gadgil</p>
                <ul className=" text-gray-400 list-disc text-xl">
                  <li className=" ">Full Stack Web Developer</li>
                  <li>Frontend Developer at <Link href={'https://talenflow.in'}>Talenflow.in</Link></li>
                  <li>Student At Goa College Of Engineering</li>
                </ul>
              </div>
            </div>
            <div className="max-w-[50vw] min-w-[30vw] text-3xl p-2 m-2" >
              Hi, I&apos;m Chinmay Gadgil, a passionate full-stack web development enthusiast currently in my second year of computer engineering at Goa College of Engineering. I am learning Next.js and enjoy creating dynamic and efficient web applications. In addition to web development, I have a strong interest in competitive programming and regularly solve problems on LeetCode. My goal is to continually enhance my skills and develop innovative solutions that make a significant impact.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center m-4 p-4">
          <p className="text-6xl font-bold p-4 m-4">MY SKILLS</p>
          <div className="flex justify-around gap-5 ">
            <div className="w-[30vw] h-[30vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Frontend</p>
              <div className="flex flex-wrap gap-5">
                <FaHtml5 className="aspect-square h-20 w-12"/>
                <FaCss3 className="aspect-square h-20 w-12"/>
                <FaJs className="aspect-square h-20 w-12"/>
                <FaReact className="aspect-square h-20 w-12"/>
                <FaBootstrap className="aspect-square h-20 w-12"/>
                <FaBootstrap className="aspect-square h-20 w-12"/>
                {/* <Fa className="aspect-square h-20 w-12"/>? */}
              </div>
            </div>
            <div className="w-[30vw] h-[30vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">Backend</p>
              <div className="flex flex-wrap gap-5">
                <FaNodeJs className="aspect-square h-20 w-12"/>
  
              </div>
            </div>
            <div className="w-[30vw] h-[30vh] border border-[#bc5efe] flex flex-col items-center gap-5 m-2 p-2" >
              <p className="text-4xl font-bold">DB</p>
              <div className="flex flex-wrap gap-5">
                <Image src={'/express.svg'} color="white" alt="exp" width={100} height={100} unoptimized className="aspect-square w-20 h-20 fill-white"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
