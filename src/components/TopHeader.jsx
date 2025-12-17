import HomePage from "./HomePage";
import NavComponent from "./navComponent";

export default function TopHeader() {
  return (
    <header
      className="h-[66rem] w-full flex flex-col items-center relative"
    >
      <NavComponent />
      <HomePage />
    </header>
  );
}
