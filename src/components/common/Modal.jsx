import { motion, AnimatePresence } from "framer-motion";
function Modal({ open, onclosefun, children }) {
	return (
		<AnimatePresence>
			{open && (
				<>
					<motion.div
						onClick={onclosefun}
						className="inset-0 fixed justify-center items-center flex bg-black/20 "
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}>
						<motion.div onClick={(e) => e.stopPropagation()}>
							{children}
						</motion.div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}

export default Modal;
