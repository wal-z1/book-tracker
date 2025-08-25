import { motion, AnimatePresence } from "framer-motion";

function ModalBook({ open, onclose, children }) {
	return (
		<AnimatePresence>
			{open && (
				<>
					<motion.div
						onClick={onclose}
						className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-black/20 backdrop-blur-sm backdrop-brightness-50"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2, ease: "easeOut" }}>
						<motion.div
							className="  flex items-center justify-center "
							onClick={(e) => e.stopPropagation()}
							initial={{ y: -50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -50, opacity: 0 }}
							transition={{ duration: 0.3, ease: "easeOut" }}>
							{children}
						</motion.div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}

export default ModalBook;
