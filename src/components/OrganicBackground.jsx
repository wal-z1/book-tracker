// No framer-motion import needed

function OrganicBackground() {
	return (
		<div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
			{/* --- Large Organic Blobs --- */}
			<div className="absolute top-[5vh] left-[10vw] w-[10vw] h-[10vw] bg-[#A8D8C0]/40 rounded-full animate-pulse" />
			<div className="absolute bottom-[10vh] right-[15vw] w-[10vw] h-[10vw] bg-[#C5E5D5]/50 rounded-full animate-[float_12s_ease-in-out_infinite]" />

			<div className="absolute top-[55vh] left-[20vw] w-10 h-10 bg-[#A8D8C0]/50 rounded-full animate-pulse" />
			<div className="absolute top-[70vh] left-[70vw] w-15 h-15 bg-[#C5E5D5]/60 rounded-full animate-pulse" />

			<div className="absolute top-[55vh] left-[20vw] w-2.5 h-2.5 bg-[#A8D8C0]/50 rounded-full animate-pulse" />
			<div className="absolute top-[70vh] left-[70vw] w-3 h-3 bg-[#C5E5D5]/60 rounded-full animate-pulse" />
		</div>
	);
}

export default OrganicBackground;
