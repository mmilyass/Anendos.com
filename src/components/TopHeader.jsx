import HomePage from "./HomePage";
import NavComponent from "./navComponent";
// import background from "../assets/background.png";

export default function TopHeader() {
  return (
    <header
      className="h-[66rem] bg-cover bg-center w-full flex flex-col items-cente px-[6rem]"
    >
      <NavComponent />
      <HomePage />
    </header>
  );
}
