export default function BookMenu({ book }) {
	return (
		<div>
			<span
				className="
    block text-center text-2xl font-bold text-gray-100
    uppercase tracking-wider
  ">
				add a new book
			</span>
			<div className="mt-3 container flex flex-col gap-5 items-center justify-center">
				<input
					class="
    block w-full p-2.5 
    text-sm text-gray-200 placeholder-gray-400
    bg-gray-800 border border-gray-600 rounded-lg
    transition-colors duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
  "
					placeholder="Book title..."
				/>
				<input
					class="
    block w-full p-2.5 
    text-sm text-gray-200 placeholder-gray-400
    bg-gray-800 border border-gray-600 rounded-lg
    transition-colors duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
  "
					placeholder="Number Of Pages..."
				/>
				<input
					class="
    block w-full p-2.5 
    text-sm text-gray-200 placeholder-gray-400
    bg-gray-800 border border-gray-600 rounded-lg
    transition-colors duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
  "
					placeholder="Author..."
				/>
			</div>
		</div>
	);
}
