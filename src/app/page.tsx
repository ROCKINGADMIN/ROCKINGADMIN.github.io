import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-navy">
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}
