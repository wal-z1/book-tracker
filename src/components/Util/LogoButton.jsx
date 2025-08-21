import { motion } from "framer-motion";
function LogoButton() {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: -20,
				filter: "blur(5px)",
			}}
			animate={{
				opacity: 1,
				y: 0,
				filter: "blur(0px)",
				transition: { duration: 0.5 },
			}}
			whileHover={{ scale: 1.05, rotate: 4 }}
			whileTap={{ scale: 0.95 }}
			transition={{ type: "spring", stiffness: 400, damping: 17 }}
			className="font-outfit capitalize font-extrabold rounded-xl p-2 border-2 border-[#58A6FF] shadow-lg shadow-[#58A6FF]/20">
			<span className="text-[#F0F6FC]">Book Tracker</span>
		</motion.div>
	);
}

export default LogoButton;
