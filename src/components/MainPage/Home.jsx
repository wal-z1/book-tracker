import AddBook from "../Util/AddBook";
import CurrentlyState from "../Util/CurrentlyState";
import Twogrid from "../Util/Twogrid";
import { useState } from "react";
function Home() {
	// book object
	const [book, setBook] = useState({
		title: "No Book",
		currentPage: 0,
		totalPages: undefined,
	});
	return (
		<div className="flex flex-col gap-20  items-center mt-10">
			<AddBook />
			<CurrentlyState book={book} />
			<Twogrid />
		</div>
	);
}
export default Home;
