import NavBar from "../Util/NavBar";
import { motion } from "framer-motion";

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