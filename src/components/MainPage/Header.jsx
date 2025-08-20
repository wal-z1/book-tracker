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
         
          bg-gradient-to-b from-[hsla(158,30%,85%,0.3)] to-[hsla(158,30%,75%,0.2)]

          backdrop-blur-md backdrop-saturate-150

          
          border border-[#b8d8cd66]

          rounded-md
          
          shadow-lg shadow-[#a8c8bd]/40
        ">
				<NavBar />
			</motion.div>
		</>
	);
}

export default Header;
