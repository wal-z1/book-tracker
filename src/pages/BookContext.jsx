import { createContext, useContext, useState } from "react";

// Create Context
const BookContext = createContext();

// Provider Component
export function BookProvider({ children }) {
	const [library, setLibrary] = useState([]);
	const [book, setBook] = useState({
		title: "No Book",
		author: "Someone",
		currentPage: 0,
		totalPages: undefined,
	});

	// modal states
	const [open1, setOpen1] = useState(false); // page AddBook button
	const [open2, setOpen2] = useState(false); // NavBar AddBook button

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
