function CurrentlyState({ book }) {
	return (
		<div
			className="container font-inter capitalize font-medium 
            w-fit text-md sm:text-lg mx-auto relative top-8 sm:top-12 px-2 text-center sm:text-left">
			<span className="text-[#8B949E] [text-shadow:0_0_10px_rgba(88,166,255,0.6),_1px_1px_1px_rgba(10,10,10)]">
				Currently Reading: "{book.title}" (Page {book.currentPage}/
				{book.totalPages})
			</span>
		</div>
	);
}

export default CurrentlyState;
