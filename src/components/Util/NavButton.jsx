import { motion } from "framer-motion";
function Navbutton({ text }) {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.01, y: -2 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
				className="font-inter capitalize font-normal rounded-sm px-4 py-2 border-1 border-[#648dbb]  shadow-[0_0_3px_3px_#1E2C3D_inset]  ">
				<span className="text-[#F0F6FC]">{text}</span>
			</motion.div>
		</>
	);
}

export default Navbutton;
