
import Navbar from "@/components/Navbar";
import Section1 from "@/components/Section1";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div className="  text-[#ffffff] bg-black overflow-x-hidden ">
      <Section1/>
      <Skills/>
      <Footer/>
    </div>
  );
}
