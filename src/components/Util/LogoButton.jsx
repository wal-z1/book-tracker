import { motion } from "framer-motion";

function LogoButton() {
	return (
		<motion.div
			initial={{ opacity: 0, y: -15, filter: "blur(4px)" }}
			animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
			whileHover={{
				scale: 1.05,
				rotate: 1,
				boxShadow: "0 0 10px rgba(88,166,255,0.4)",
			}}
			whileTap={{ scale: 0.95 }}
			transition={{ type: "spring", stiffness: 300, damping: 18 }}
			className="
        font-outfit text-lg sm:text-xl font-extrabold
        rounded-lg px-4 py-2
        border-2 border-[#58A6FF]
        shadow-md shadow-[#58A6FF]/20
        cursor-pointer
      ">
			<span className="text-[#F0F6FC]">📚 Reading Tracker</span>
		</motion.div>
	);
}

export default LogoButton;
