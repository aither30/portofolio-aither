"use client";

import { useState, useEffect } from "react";
import { debounce } from "lodash";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
// import Education from "./Education";
import Skills from "./Skills";
// import Contact from "./Contact";

const ScrollAnimationComponent: React.FC = () => {
 const [scrolling, setScrolling] = useState<number>(0);

  const handleScroll = debounce(() => {
    setScrolling(window.scrollY);
  }, 100); // Mendeteksi scroll hanya setiap 100ms

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <main className="overflow-hidden">
      <Navbar scrolling={scrolling} />
      <Hero scrolling={scrolling} />
      <About scrolling={scrolling} />
      <Projects scrolling={scrolling} />
      {/* <Education /> */}
      <Skills scrolling={scrolling} />
      {/* <Contact scrolling={scrolling} />  */}
    </main>
  );
};

export default ScrollAnimationComponent;
