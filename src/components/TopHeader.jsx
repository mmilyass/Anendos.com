import HomePage from "./HomePage";
import NavComponent from "./navComponent";
import LightRays from "./LightRays";

export default function TopHeader() {
  return (
    <header
      className="h-[80rem] w-full flex flex-col items-center relative"
    >
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1}
        lightSpread={1.5}
        rayLength={1.2}
        followMouse={true}
        fadeDistance={4}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.1}
        className="custom-rays"
      />
      <NavComponent />
      <HomePage />
    </header>
  );
}
