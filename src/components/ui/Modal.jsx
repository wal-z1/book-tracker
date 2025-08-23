import { motion, AnimatePresence } from "framer-motion";

function Modal({ open, onclosefun, children }) {
	return (
		<AnimatePresence>
			{open && (
				<>
					<motion.div
						onClick={onclosefun}
						className="fixed inset-0 z-50 flex items-center justify-center w-vw h-vh backdrop-blur-[3px] backdrop-brightness-75 backdrop-saturate-150"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}>
						<span
							className="flex items-center justify-center"
							onClick={(e) => e.stopPropagation()}>
							{children}
						</span>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}

export default Modal;
