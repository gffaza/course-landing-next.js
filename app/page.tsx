import Image from "next/image";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProgramSection } from "@/components/home/ProgramSection";
import { ProcessSection } from "@/components/home/ProcessSection";

export default function Home() {
  return (
    <div className="m-8 min-h-screen items-start justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <ProcessSection />
    </div>
  );
}
