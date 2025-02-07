"use client";

import { useState, useEffect, useRef } from "react";
import { debounce } from "lodash";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import GitHubContainer from "./GitHubContainer";
import Contact from "./Contact";

const ScrollAnimationComponent: React.FC = () => {
  const [scrolling, setScrolling] = useState<number>(0);
  const debounceRef = useRef<((ev: Event) => void) | null>(null);

  useEffect(() => {
    debounceRef.current = debounce(() => {
      setScrolling(window.scrollY);
    }, 100);

    const handleScroll = (event: Event) => {
      if (debounceRef.current) debounceRef.current(event);
    };

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
      <Skills scrolling={scrolling} />
      <GitHubContainer scrolling={scrolling} />
      <Contact scrolling={scrolling} />
    </main>
  );
};

export default ScrollAnimationComponent;
