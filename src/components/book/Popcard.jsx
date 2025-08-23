import { motion, AnimatePresence } from "framer-motion";

function PopCard({ children, open }) {
	return (
		<div
			className={`
         border-2 border-[hsl(212,80%,30%)]
        bg-[#313B4A] 
        rounded-2xl 
        p-6 
        w-[400px] max-w-[90%]
        text-[#F0F6FC]
        relative
         shadow-lg shadow-[#58A6FF]/15
      `}>
			{children}
		</div>
	);
}

export default PopCard;
