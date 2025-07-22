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
      <Navbar/>
      {/* Add a main wrapper with padding-top to account for fixed navbar */}
      <main className="pt-24"> {/* Adjust this value based on your navbar height */}
        <Header/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}