import AboutMobile from "./components/AboutMobile";
import Contact from "./components/ContactMobile";
import GitHubContainer from "./components/GithubCalenderMobile";
import HeroMobile from "./components/Hero";
import NavbarMobile from "./components/NavbarMobile";
import ProjectsMobile from "./components/ProjectsMobile";
import Skills from "./components/SkillsMobile";
export default function InterfaceMobile() {
  return (
    <div>
      <NavbarMobile />
      <HeroMobile />
      <AboutMobile />
      <ProjectsMobile />
      <Skills />
      <GitHubContainer />
      <Contact />
    </div>
  );
}
