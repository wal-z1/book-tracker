import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Twogrid() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 p-6 sm:p-10 gap-4 text-center mx-auto">
			<Link to="/library">
				<motion.div
					whileHover={{ scale: 1.05, y: -1, filter: "brightness(0.7)" }}
					whileTap={{ scale: 0.97 }}
					transition={{ duration: 0.2, ease: "easeOut" }}
					className="text-[#F0F6FC] text-lg sm:text-2xl font-outfit [text-shadow:0_0_10px_rgba(88,166,255,0.6),_1px_1px_1px_rgba(10,10,10)] cursor-pointer">
					[ 📖 View Library ]
				</motion.div>
			</Link>

			<div className="hidden sm:flex items-center justify-center text-[#8B949E]">
				|
			</div>

			<Link to="/stats">
				<motion.div
					whileHover={{ scale: 1.05, y: -1, filter: "brightness(0.7)" }}
					whileTap={{ scale: 0.97 }}
					transition={{ duration: 0.2, ease: "easeOut" }}
					className="text-[#F0F6FC] text-lg sm:text-2xl font-outfit [text-shadow:0_0_10px_rgba(88,166,255,0.6),_1px_1px_1px_rgba(10,10,10)] cursor-pointer">
					[ 📊 Check Stats ]
				</motion.div>
			</Link>
		</div>
	);
}

export default Twogrid;
