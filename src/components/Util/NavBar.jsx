import { motion } from "framer-motion";
import Navbutton from "./NavButton";
import LogoButton from "./LogoButton";
function NavBar() {
	return (
		<>
			<div className="flex justify-evenly w-full ">
				<Navbutton text="hii" />
				<Navbutton text="hii" />
				<LogoButton />
				<Navbutton text="hii" />
				<Navbutton text="hii" />
			</div>
		</>
	);
}

export default NavBar;
