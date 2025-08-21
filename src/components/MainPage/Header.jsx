import NavBar from "../Util/NavBar";
import { motion } from "framer-motion";

function Header() {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: -12 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.8,
						type: "spring",
						stiffness: 400,
						damping: 20,
					},
				}}
				whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
				className="
          p-3
          flex flex-wrap items-center justify-evenly
          mx-auto
          sticky 
          min-h-12
					w-screen
          
         
          bg-gradient-to-b from-[#131823]/30 to-[#131823]/20  /* Dark glass effect */

          backdrop-blur-lg  backdrop-saturate-150

          border border-[#313B4A]/40 

          rounded-md
          
          shadow-lg shadow-[#58A6FF]/10  
        ">
				<NavBar />
			</motion.div>
		</>
	);
}

export default Header;
