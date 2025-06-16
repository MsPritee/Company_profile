import Image from "next/image";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* About Section */}
      <About />

      <Stats />
    </main>
  );
}
