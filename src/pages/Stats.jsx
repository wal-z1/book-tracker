// src/pages/Stats.jsx
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

function Stats() {
	return (
		<>
			<Header />
			<div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 px-6 text-[#F0F6FC] font-outfit">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-2xl sm:text-3xl font-semibold">
					📊 Stats Page
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className="flex flex-col gap-3 text-lg sm:text-xl text-center">
					<div>• Show reading progress (pages read, % completed)</div>
					<div>• Add graphs/charts for monthly reading</div>
					<div>• Track total books finished vs ongoing</div>
					<div>• Display reading streak or habits</div>
				</motion.div>
			</div>
			<Footer />
		</>
	);
}

export default Stats;
