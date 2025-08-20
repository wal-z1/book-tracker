import NavBar from "../Util/NavBar";
import { motion } from "motion/react";

function Header() {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: { type: "spring", stiffness: 300 },
				}}
				whileTap={{ scale: 0.985 }}
				className="
          p-3
          flex flex-wrap items-center justify-center
          mx-auto
          sticky top-5 
          min-h-12

          max-w-[80%]
         
          bg-gradient-to-b from-[#0A1913]/30 to-[#0A1913]/20  /* Dark glass effect */

          backdrop-blur-lg  backdrop-saturate-150

          border border-[#7DA896]/40 

          rounded-md
          
          shadow-lg shadow-[#A8D8C0]/10  
        ">
				<NavBar />
			</motion.div>
		</>
	);
}

export default Header;
