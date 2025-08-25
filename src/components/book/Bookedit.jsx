import { useState } from "react";
import { useBookContext } from "../../pages/BookContext";

// The component receives the specific book to edit and a function to close the modal.
export default function BookEdit({ bookToEdit, close }) {
	const { library, setLibrary } = useBookContext();

	// --- STATE ---
	// TODO: Create state for each editable field.
	// Initialize them with the values from the `bookToEdit` prop.
	// Example: const [title, setTitle] = useState(bookToEdit.title);
	// ... add states for author, pages, status, etc.

	// --- SAVE FUNCTION ---
	const handleSave = () => {
		// 1. TODO: Create an `updatedBook` object.
		// It should keep the original `id` and `dateAdded` from `bookToEdit`,
		// but use the new values from your state variables for the other properties.
		const updatedBook = {
			id: bookToEdit.id, // IMPORTANT: Keep the original ID
			// ... your state values here
		};

		// 2. TODO: Update the main library array.
		// Logic: Find the book in the `library` array by its ID and replace it
		// with your `updatedBook` object. The .map() method is great for this.
		const updatedLibrary = library.map((book) => {
			// ... your logic here
		});
		setLibrary(updatedLibrary);

		// 3. TODO (Optional): Check if the edited book is the "currently reading" book.
		// If it is, you should also update it using `setBook(updatedBook)`.

		// 4. Close the modal after saving.
		close();
	};

	// --- STYLES ---
	// Reusable style for input fields.
	const inputStyles =
		"block w-full p-2.5 text-sm text-gray-200 placeholder-gray-400 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

	// --- JSX ---
	return (
		<div>
			<span className="block text-center text-2xl font-bold text-gray-100 uppercase tracking-wider mb-5">
				Edit Book
			</span>

			{/* Use a form element for better semantics */}
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSave();
				}}
				className="container flex flex-col gap-4">
				{/* TODO: Add value and onChange handlers to these inputs */}

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
				{/* Consider adding inputs for other fields like currentPage, status, etc. */}

				<button
					type="submit" // Use type="submit" for forms
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
