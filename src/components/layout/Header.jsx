import NavBar from "../navigation/NavBar";
import { motion } from "framer-motion";

function Header() {
	return (
		<motion.div
			initial={{ opacity: 0, y: -12 }}
			animate={{
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.8,
					type: "spring",
					stiffness: 300,
					damping: 22,
				},
			}}
			whileHover={{ backgroundColor: "rgba(0,0,0,0.15)" }}
			className="
        p-2 sm:p-3 sm:px-6 flex flex-wrap items-center justify-center sm:justify-evenly mx-auto sticky z-50
        min-h-12 w-screen rounded-md
        bg-gradient-to-b from-[#131823]/30 to-[#131823]/20
        backdrop-blur-lg backdrop-saturate-150
        border border-[#313B4A]/40 
        shadow-lg shadow-[#58A6FF]/10
      ">
			<NavBar />
		</motion.div>
	);
}

export default Header;
