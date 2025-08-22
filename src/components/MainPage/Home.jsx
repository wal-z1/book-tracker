import AddBook from "../Util/AddBook";
import CurrentlyState from "../Util/CurrentlyState";
import Twogrid from "../Util/Twogrid";
import { useState } from "react";
import Modal from "../Util/Modal_pop";
import PopCard from "../Util/Popcard";
import { motion, AnimatePresence } from "framer-motion";
function Home() {
	// book object
	const [book, setBook] = useState({
		title: "No Book",
		currentPage: 0,
		totalPages: undefined,
	});

	const [open1, Sopen1] = useState(false);
	return (
		<div
			className="
        flex flex-col gap-20 items-center mt-10
        w-full max-w-5xl mx-auto
        px-4 sm:px-6
      ">
			<AddBook onClick={() => Sopen1(true)} />

			<Modal open={open1} onclosefun={() => Sopen1(false)}>
				<PopCard>
					{" "}
					<span>actual menu</span>
				</PopCard>
			</Modal>

			<CurrentlyState book={book} />

			<Twogrid />
		</div>
	);
}

export default Home;
