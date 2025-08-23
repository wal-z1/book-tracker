import { motion } from "framer-motion";

function AddBook({ onClick }) {
	return (
		<motion.div
			whileHover={{
				scale: 1.03,
			}}
			whileTap={{ scale: 0.99 }}
			className="
			text-center
        font-extrabold rounded-xl px-10 py-4
        border-2 border-[#3869a1]
        shadow-md shadow-[#58A6FF]/20
				bg-[#1a2638]
         w-fit
        text-4xl
        mx-auto
        relative 
         top-12
      ">
			<button className="cursor-pointer" onClick={onClick}>
				<span className="mx-auto font-inter capitalize text-[#F0F6FC] text-center">
					➕ add a new book
				</span>
			</button>
		</motion.div>
	);
}

export default AddBook;
