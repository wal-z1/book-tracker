import { useState } from "react";
import { useBookContext } from "../../pages/BookContext";

export default function BookEdit({ index, close }) {
	const { library, setLibrary, currentbook, setBook } = useBookContext();
	const bookToEdit = library[index];
	const [title, Settitle] = useState(bookToEdit.title);
	const [author, Setauthor] = useState(bookToEdit.author);
	const [status, Setstatus] = useState(bookToEdit.status);
	const [currentPage, SetcurrentPage] = useState(bookToEdit.currentPage);
	const [totalPages, SettotalPages] = useState(bookToEdit.totalPages);

	const currentindex = library.indexOf(currentbook);
	const handleSave = () => {
		const updatedBook = {
			...bookToEdit,
			id: library[index].id,
			title: title,
			author: author,
			status: status,
			currentPage: currentPage,
			totalPages: totalPages,
		};

		const updatedLibrary = library.map((book, i) => {
			return i === index ? updatedBook : book;
		});
		setLibrary(updatedLibrary);

		// check if the edited book is the "currently reading" book.
		// If it is, you should also update it using `setBook(updatedBook)`.
		currentindex === index
			? setBook(updatedBook)
			: console.log("current not updated");
		// Close  after saving.
		close();
	};

	const inputStyles =
		"block w-full p-2.5 text-sm text-gray-200 placeholder-gray-400 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

	return (
		<div>
			<span className="block text-center text-2xl font-bold text-gray-100 uppercase tracking-wider mb-5">
				Edit Book
			</span>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSave();
				}}
				className="container flex flex-col gap-4">
				<input
					className={inputStyles}
					placeholder="Book title..."
					// value={...}
					// onChange={...}
				/>
				<input
					className={inputStyles}
					type="number"
					placeholder="Total Pages..."
					// value={...}
					// onChange={...}
				/>
				<input
					className={inputStyles}
					placeholder="Author..."
					// value={...}
					// onChange={...}
				/>

				<button
					type="submit"
					className="font-inter text-base font-medium mt-2
                               px-4 py-2 bg-[#131823] rounded-md border border-[#3B6A99]
                               text-[#F0F6FC] tracking-wide cursor-pointer
                               transition-colors duration-200 hover:bg-[#3B6A99]">
					Save Changes
				</button>
			</form>
		</div>
	);
}
