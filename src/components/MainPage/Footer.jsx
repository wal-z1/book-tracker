import { motion } from "framer-motion";

function Footer() {
	return (
		<motion.footer
			whileHover={{ backgroundColor: "rgba(0,0,0,0.15)" }}
			className="
        w-screen p-3 px-6 mt-6
        flex flex-col sm:flex-row items-center justify-between gap-y-2
        bg-gradient-to-b from-[#131823]/30 to-[#131823]/20
        backdrop-blur-lg backdrop-saturate-150
        border-t border-[#313B4A]/40
        text-[#F0F6FC] text-sm
        absolute bottom-0 z-40
      ">
			<span className="tracking-wide">
				© 2025 Reading Tracker &#9;
				<span className="tracking-wide font-extralight">
					&#9; a small book tracking website
				</span>
			</span>
			<div className="flex gap-x-4">
				<motion.a
					href="https://github.com/wal-z1/book-tracker"
					target="_blank"
					whileHover={{ scale: 1.05, y: -2 }}
					whileTap={{ scale: 0.95 }}
					className="border-b border-transparent hover:border-[#58A6FF] transition-colors">
					GitHub
				</motion.a>
			</div>
		</motion.footer>
	);
}

export default Footer;
