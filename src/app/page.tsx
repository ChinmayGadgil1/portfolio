'use client';

import Section1 from "@/components/Section1";
import Skills from "@/components/Skills";
import DotGrid from "@/DotGrid/DotGrid";



export default function Home() {
  return (
    <div className="  text-[#ffffff] overflow-x-hidden ">
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
      <Section1/>
      <Skills/>
    </div>
  );
}
