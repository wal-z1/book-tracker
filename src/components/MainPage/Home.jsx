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
		<div
			className="
        flex flex-col gap-20 items-center mt-10
        w-full max-w-5xl mx-auto
        px-4 sm:px-6
      ">
			<AddBook onClick={BookMenu} />

			<CurrentlyState book={book} />

			<Twogrid />
		</div>
	);
}

export default Home;
