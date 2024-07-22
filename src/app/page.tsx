import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section1 from "@/components/Section1";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";
import { BiX } from "react-icons/bi";


export default function Home() {
  return (
    <div className=" overflow-x-hidden hidden md:block text-[#ffffff] bg-black">
      <Navbar />
      <Section1/>
      <Skills/>
    </div>
  );
}
