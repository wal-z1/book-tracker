import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AddBook from "../components/book/AddBook";
import CurrentlyState from "../components/book/CurrentlyState";
import PopCard from "../components/book/Popcard";
import Modal from "../components/ui/Modal";
import CloseButton from "../components/ui/CloseButton";
import TwoGrid from "../components/layout/TwoGrid";
import BookMenu from "../components/book/BookMenu";

function HomePage({ library, setLibrary, book, setBook }) {
	const [open1, setOpen1] = useState(false);

	return (
		<>
			<Header />
			<div
				className="
          flex flex-col gap-20 items-center mt-10
          w-full max-w-5xl mx-auto
          px-4 sm:px-6
        ">
				{/* the add book button */}
				<AddBook onClick={() => setOpen1(true)} />

				{/* modal for adding book */}
				<Modal open={open1} onclosefun={() => setOpen1(false)}>
					<PopCard>
						<CloseButton onClick={() => setOpen1(false)} />
						<BookMenu
							setBook={setBook}
							setLibrary={setLibrary}
							close={() => setOpen1(false)}
						/>
					</PopCard>
				</Modal>

				{/* show current book */}
				<CurrentlyState book={book} />

				{/* links */}
				<TwoGrid />
			</div>
			<Footer />
		</>
	);
}

export default HomePage;
