import { useState } from "react";
import { useBookContext } from "../../pages/BookContext";

export default function BookMenu({ close }) {
	const { setBook, setLibrary } = useBookContext();
	const [title, setTitle] = useState("Title");
	const [pages, setPages] = useState(0);
	const [author, setAuthor] = useState("Someone");

	const Save = () => {
		const newBook = {
			id: Date.now(), // unique ID
			title,
			author,
			currentPage: 0,
			totalPages: Number(pages),
			status: "not started", // new book starts here
			dateAdded: new Date().toISOString(),
			dateFinished: null,
			notes: "",
		};

		setBook(newBook); // update current book
		setLibrary((prev) => [...prev, newBook]); // add to library
		close();
	};

	const input =
		"block w-full p-2.5 text-sm text-gray-200 placeholder-gray-400 bg-gray-800 border border-gray-600 rounded-lg transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

	return (
		<div>
			<span className="block text-center text-2xl font-bold text-gray-100 uppercase tracking-wider">
				add a new book
			</span>
			<div className="mt-3 container flex flex-col gap-5 items-center justify-center">
				<input
					className={input}
					value={title}
					placeholder="Book title..."
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					className={input}
					min={1}
					value={pages}
					type="number"
					placeholder="Number Of Pages..."
					onChange={(e) => setPages(e.target.value)}
				/>
				<input
					className={input}
					value={author}
					placeholder="Author..."
					onChange={(e) => setAuthor(e.target.value)}
				/>
				<button
					onClick={Save}
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
