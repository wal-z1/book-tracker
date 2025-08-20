import { motion } from "framer-motion";
function Navbutton({ text }) {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
				className="font-inter capitalize font-normal rounded-sm p-2 border-1 border-[#648dbb] shadow-sm shadow-[#58A6FF]/20">
				<span className="text-[#F0F6FC]">{text}</span>
			</motion.div>
		</>
	);
}
export default Navbutton;
