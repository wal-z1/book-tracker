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
function HomePage() {
	return (
		<>
			<Header />
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
						<BookMenu
							setBook={setBook}
							SetLibrary={SetLibrary}
							close={() => Sopen1(false)}
						/>
					</PopCard>
				</Modal>

				<CurrentlyState book={book} />

				<TwoGrid />
			</div>
			<Footer />
		</>
	);
}

export default HomePage;
