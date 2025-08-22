function PopCard({ children, open }) {
	return (
		<div
			className={`
        bg-[#1a2638] 
        rounded-2xl 
        shadow-lg shadow-black/40 
        p-6 
        w-[400px] max-w-[90%]
        text-[#F0F6FC]
       
      `}>
			{children}
		</div>
	);
}

export default PopCard;
