import { motion } from "framer-motion";

function AddBook() {
	return (
		<motion.div
			whileHover={{
				scale: 1.03,
			}}
			whileTap={{ scale: 0.99 }}
			className="
        font-inter capitalize font-extrabold rounded-xl px-10 py-4
        border-2 border-[#3869a1]
        shadow-md shadow-[#58A6FF]/20
				bg-[#1a2638]
        cursor-pointer w-fit
        text-4xl
        mx-auto
        relative 
         top-12
      ">
			<span className="text-[#F0F6FC]">➕ add a new book</span>
		</motion.div>
	);
}

export default AddBook;
