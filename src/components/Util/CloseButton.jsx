function CloseButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        absolute top-3 right-3
        w-8 h-8 flex items-center justify-center
        rounded-full
        bg-[#1a2638] text-[#F0F6FC]
        cursor-pointer
        hover:scale-110
        transition-transform
      "
    >
      ✕
    </button>
  );
}

export default CloseButton;
