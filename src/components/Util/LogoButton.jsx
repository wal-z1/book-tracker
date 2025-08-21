import { motion } from "framer-motion";

function LogoButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.5 },
      }}
      whileHover={{
        scale: 1.08,
        rotate: 3,
        boxShadow: "0 0 15px rgba(88,166,255,0.5)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 350, damping: 18 }}
      className="
        font-outfit capitalize font-extrabold rounded-lg px-4 py-2
        border-2 border-[#58A6FF]
        shadow-md shadow-[#58A6FF]/20
        mx-2 cursor-pointer
      "
    >
      <span className="text-[#F0F6FC]">📚 Reading Tracker</span>
    </motion.div>
  );
}

export default LogoButton;
