
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import AddBook from "../components/book/AddBook";
import CurrentlyState from "../components/book/CurrentlyState";
import PopCard from "../components/book/Popcard"; 
import Modal from "../components/common/Modal";
import CloseButton from "../components/common/CloseButton";
import TwoGrid from "../components/layout/TwoGrid";

function HomePage() { 
	
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
					<CloseButton onClick={() => Sopen1(false)} />
					<span>actual menu</span>
				</PopCard>
			</Modal>

			<CurrentlyState book={book} />

		
			<TwoGrid />
		</div>
	);
}

export default HomePage;