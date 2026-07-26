import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (

    <div>
      
<Navbar />

<main className="pt-20">
        <section id="home" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">Home</h1>
        </section>

        <section id="about" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">About</h1>
        </section>

        <section id="skills" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">Skills</h1>
        </section>

        <section id="projects" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">Projects</h1>
        </section>

        <section id="experience" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">Experience</h1>
        </section>

        <section id="contact" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">Contact</h1>
        </section>
      </main>

      <main className="pt-20">
        <section id="home" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">Home</h1>
        </section>

        <section id="about" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">About Me</h1>
        </section>

        <section id="skills" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">Skills</h1>
        </section>

        <section id="projects" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">Projects</h1>
        </section>

        <section id="experience" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">Experience</h1>
        </section>

        <section id="contact" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">Contact</h1>
        </section>
      </main>
    </div>
  );
}
