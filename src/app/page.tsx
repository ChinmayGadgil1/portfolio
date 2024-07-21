import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link"; 

export default function Home() {
  return (
    <div className="overflow-hidden">
   
    <div className="hidden md:block overflow-hidden w-screen h-screen bg-black">
        <Navbar/>
      <div className=" w-screen overflow-hidden flex justify-around overflow-x-hidden">
        <div className="bg-blue-900 h-fit w-2/5 p-4 m-4 rounded-md flex gap-8">
        <Image src={'/Chinmay.jpg'} width={200} height={200} alt="Chinmay" className="rounded-full aspect-square"/>
          <div>
            <p className="text-6xl font-extrabold">Chinmay G. Gadgil</p>
            <ul className=" text-gray-400 list-disc text-xl">
              <li className=" ">Full Stack Web Developer</li>
              <li>Frontend Developer at <Link href={'https://talenflow.in'}>Talenflow.in</Link></li>
              <li>Student At Goa College Of Engineering</li>
            </ul>
          </div>
        </div>
        <div className="w-2/5 h-[25vh] flex justify-center items-center">
            
        </div>
      </div>
        <div className="max-w-[50vw] min-w-[30vw] text-3xl p-2 m-2" >
        Hi, I&apos;m Chinmay Gadgil, a passionate full-stack web development enthusiast currently in my second year of computer engineering at Goa College of Engineering, Goa. I am learning Next.js and enjoy creating dynamic and efficient web applications. In addition to web development, I have a strong interest in competitive programming and regularly solve problems on LeetCode. My goal is to continually enhance my skills and develop innovative solutions that make a significant impact.
        </div>
    </div>
        <Footer/>
    </div>
  );
}
