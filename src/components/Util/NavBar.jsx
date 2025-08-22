import Navbutton from "./NavButton";
import LogoButton from "./LogoButton";

function NavBar() {
	return (
		<header
			className="
        w-full bg-[#0D1117]/80 backdrop-blur-md
        
        shadow-md shadow-black/20
      ">
			<div
				className="
          max-w-6xl mx-auto flex flex-wrap
          items-center justify-between gap-3 px-6 py-3
        ">
				<LogoButton />

				<nav className="flex flex-wrap items-center gap-2 sm:gap-3">
					<Navbutton text="Home" />
					<Navbutton text="Add Book" />
					<Navbutton text="Library" />
					<Navbutton text="Stats" />
					<Navbutton text="Settings" />
				</nav>
			</div>
		</header>
	);
}

export default NavBar;
