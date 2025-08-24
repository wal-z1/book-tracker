// src/pages/Library.jsx
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

function Library() {
	return (
		<>
			<Header />
			<div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 px-6 text-[#F0F6FC] font-outfit">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-2xl sm:text-3xl font-semibold">
					📖 Library Page
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className="flex flex-col gap-3 text-lg sm:text-xl text-center">
					<div>• Display all saved books in grid or list view</div>
					<div>• Add filters (read, unread, in progress)</div>
					<div>• Enable book search & sorting</div>
					<div>• Click a book to set it as "currently reading"</div>
				</motion.div>
			</div>
			<Footer />
		</>
	);
}

export default Library;
