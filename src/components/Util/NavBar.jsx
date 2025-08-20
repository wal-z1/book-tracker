import { motion } from "motion/react";
function NavBar() {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.05, rotate: 4 }}
				whileTap={{ scale: 0.95 }}
				// bouncy lol
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
				className="font-outfit capitalize font-extrabold rounded-xl p-2 border-2 border-[hsla(159,29%,40%,0.4)] shadow-lg shadow-[#a8c8bd]">
				<span className=" text-[#064E3B]">mood-tracker</span>
			</motion.div>
		</>
	);
}
export default NavBar;
