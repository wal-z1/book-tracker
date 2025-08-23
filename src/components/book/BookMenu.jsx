export default function BookMenu({ setBook, SetLibrary }) {
	const input =
		"block w-full p-2.5 text-sm text-gray-200 placeholder-gray-400 bg-gray-800 border border-gray-600 rounded-lg transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
	return (
		<div>
			<span className="block text-center text-2xl font-bold text-gray-100 uppercase tracking-wider">
				add a new book
			</span>
			<div className="mt-3 container flex flex-col gap-5 items-center justify-center">
				<input className={input} placeholder="Book title..." />
				<input
					className={input}
					min={1}
					type="number"
					placeholder="Number Of Pages..."
				/>
				<input className={input} placeholder="Author..." />
				<button 
				onClick={()=>setBook}
					className="font-inter text-sm sm:text-base capitalize font-medium
        px-3 sm:px-4 py-1.5 sm:py-2 bg-[#131823]
        rounded-md border border-[#3B6A99]
        text-[#F0F6FC] tracking-wide
        transition-colors duration-200
        cursor-pointer hover:bg-[#3B6A99]">
					Save
				</button>
			</div>
		</div>
	);
}
