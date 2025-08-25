import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AddBook from "../components/book/AddBook";
import CurrentlyState from "../components/book/CurrentlyState";
import PopCard from "../components/book/Popcard";
import ModalADD from "../components/ui/ModalADD";
import CloseButton from "../components/ui/CloseButton";
import TwoGrid from "../components/layout/TwoGrid";
import BookMenu from "../components/book/BookMenu";
import { useBookContext } from "./BookContext";

function HomePage() {
	const { open1, setOpen1, book } = useBookContext();

	return (
		<>
			<Header />

			<div
				className="
          flex flex-col items-center mt-10
          w-full max-w-5xl mx-auto
          px-4 sm:px-6
          gap-12 {/* Reduced the main gap from gap-20 to bring elements closer */}
        ">
				<AddBook onClick={() => setOpen1(true)} />

				{/* modal for page add book */}
				<ModalADD open={open1} onclosefun={() => setOpen1(false)}>
					<PopCard>
						<CloseButton onClick={() => setOpen1(false)} />
						<BookMenu close={() => setOpen1(false)} />
					</PopCard>
				</ModalADD>

				{/*
          This groups the "Currently Reading" and the nav links 
          into one  block
        */}
				<div className="flex flex-col items-center w-full gap-6 p-4 sm:p-6 rounded-lg border border-[#30363D] bg-[#161B22]/50">
					{/* show current book */}
					<CurrentlyState book={book} />

					{/* links */}
					<TwoGrid />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default HomePage;
