// No framer-motion import needed

function OrganicBackground() {
	return (
		<div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
			{/* --- Subtle Glowing Blobs for Dark Mode --- */}
			<div className="absolute top-[5vh] left-[10vw] w-[10vw] h-[10vw] bg-[#A8D8C0]/10 rounded-full animate-pulse" />
			<div className="absolute bottom-[10vh] right-[15vw] w-[10vw] h-[10vw] bg-[#C5E5D5]/15 rounded-full animate-[float_12s_ease-in-out_infinite]" />

			<div className="absolute top-[55vh] left-[20vw] w-10 h-10 bg-[#A8D8C0]/15 rounded-full animate-pulse" />
			<div className="absolute top-[70vh] left-[70vw] w-16 h-16 bg-[#C5E5D5]/20 rounded-full animate-pulse" />
		</div>
	);
}

export default OrganicBackground;
