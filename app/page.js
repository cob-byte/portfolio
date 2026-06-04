'use client'
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* pt-20 offsets mobile top bar; lg:pl-16 offsets desktop side rail */}
      <main className="pt-20 lg:pt-0 lg:pl-16">
        <Header />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
