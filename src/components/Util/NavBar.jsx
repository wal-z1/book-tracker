import { motion } from "motion/react";

function NavBar() {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.05, rotate: 4 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
				className="font-outfit capitalize font-extrabold rounded-xl p-2 border-2 border-[#A8D8C0] shadow-lg shadow-[#A8D8C0]/20">
				<span className="text-[#EBF9F1]">Books Tracker</span> {/* Light text */}
			</motion.div>
		</>
	);
}

export default NavBar;