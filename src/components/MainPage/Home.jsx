import AddBook from "../Util/AddBook";
import CurrentlyState from "../Util/CurrentlyState";
import React, { useState } from "react";

function Home() {
	// book object
	const [book, setBook] = useState({
		title: "No Book",
		currentPage: 0,
		totalPages: undefined,
	});
	return (
		<div className="flex flex-col gap-10">
			<AddBook />
			<CurrentlyState book={book} />
		</div>
	);
}
export default Home;
