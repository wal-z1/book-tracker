function CloseButton({ onClick }) {
	return (
		<button
			onClick={onClick}
			className="
        absolute top-2 right-2
        w-8 h-8 flex items-center justify-center
        rounded-full
        bg-[#313B4A] text-[#F0F6FC]
        cursor-pointer
        hover:scale-110
        transition-transform
      ">
			✕
		</button>
	);
}

export default CloseButton;
