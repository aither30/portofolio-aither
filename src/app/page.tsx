import ScrollAnimationComponent from "./components/ScrollAnimationComponent";
import InterfaceMobile from "./components/mobile/interfaceMobile";

export default function Home() {
  return (
    <>
      <div className="md:hidden">
        <InterfaceMobile />
      </div>
      <div className="hidden md:flex">
        <ScrollAnimationComponent />
      </div>
    </>
  );
}
