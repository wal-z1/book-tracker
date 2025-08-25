import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const BookContext = createContext();

// Provider Component
export function BookProvider({ children }) {
	// get saved data on first load

	const currentlibrary = JSON.parse(localStorage.getItem("library") || "[]");
	const currentbook = JSON.parse(
		localStorage.getItem("book") ||
			JSON.stringify({
				title: "No Book",
				author: "Someone",
				currentPage: 0,
				totalPages: undefined,
			})
	);

	const [library, setLibrary] = useState(currentlibrary);
	const [book, setBook] = useState(currentbook);

	// modal states
	const [open1, setOpen1] = useState(false); // page AddBook button
	const [open2, setOpen2] = useState(false); // NavBar AddBook button

	useEffect(() => {
		localStorage.setItem("library", JSON.stringify(library));
	}, [library]);
	useEffect(() => {
		localStorage.setItem("book", JSON.stringify(book));
	}, [book]);

	return (
		<BookContext.Provider
			value={{
				library,
				setLibrary,
				book,
				setBook,
				open1,
				setOpen1,
				open2,
				setOpen2,
			}}>
			{children}
		</BookContext.Provider>
	);
}

// custom hook for easy usage
export function useBookContext() {
	return useContext(BookContext);
}
