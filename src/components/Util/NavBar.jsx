import Navbutton from "./NavButton";
import LogoButton from "./LogoButton";

function NavBar() {
  return (
    <div className="flex items-center justify-center gap-x-3 w-full">
      <LogoButton />
      <Navbutton text="Home" />
      <Navbutton text="Add Book" />
      <Navbutton text="Library" />
      <Navbutton text="Stats" />
      <Navbutton text="Settings" />
    </div>
  );
}

export default NavBar;
