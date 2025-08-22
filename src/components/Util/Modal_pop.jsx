import { motion } from "framer-motion";
function Modal({ open, onclosefun, children }) {
	return (
		<motion.div
			onClick={onclosefun}
			className={`inset-0 fixed justify-center items-center flex  transition-colors ${
				open ? "visible bg-black/20" : "invisible"
			}`}
			animate={{ opacity: 1, rotate: 0 }}
			exit={{ opacity: 0, rotate: -45 }}
			transition={{ duration: 0.6, ease: "easeInOut" }}>
			{children}
		</motion.div>
	);
}

export default Modal;
