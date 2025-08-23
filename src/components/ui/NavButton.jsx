import { motion } from "framer-motion";

function Navbutton({ text }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			whileHover={{ scale: 1.07, y: -1 }}
			whileTap={{ scale: 0.95 }}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
			className="
        font-inter text-sm sm:text-base capitalize font-medium
        px-3 sm:px-4 py-1.5 sm:py-2
        rounded-md border border-[#3B6A99]
        shadow-inner shadow-[#1E2C3D]/60
        text-[#F0F6FC] tracking-wide
        transition-colors duration-200
        cursor-pointer
      "
		>
			{text}
		</motion.div>
	);
}

export default Navbutton;
