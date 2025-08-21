import { motion } from "framer-motion";

function Navbutton({ text }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			whileHover={{ scale: 1.05, y: -2 }}
			whileTap={{ scale: 0.95 }}
			transition={{ type: "spring", stiffness: 350, damping: 18 }}
			className="
        font-inter capitalize font-medium px-4 py-2 mx-1.5
        rounded-md border border-[#648dbb] 
        shadow-inner shadow-[#1E2C3D]/80
        text-[#F0F6FC] tracking-wide
        transition-colors duration-200
				cursor-pointer	
      ">
			{text}
		</motion.div>
	);
}

export default Navbutton;
