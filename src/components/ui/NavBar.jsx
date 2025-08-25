import Navbutton from "./NavButton";
import LogoButton from "./LogoButton";
import BookMenu from "../book/BookMenu";
import CloseButton from "../ui/CloseButton";
import Modal from "../ui/Modal";
import PopCard from "../book/Popcard";
import { useBookContext } from "../../pages/BookContext";
import { Link } from "react-router-dom";

function NavBar() {
	const { open2, setOpen2, setBook, setLibrary } = useBookContext();

	return (
		<header className="w-full">
			<div
				className="
          max-w-6xl mx-auto flex flex-wrap
          items-center justify-between gap-3 px-6 py-3
        ">
				<LogoButton />

				<nav className="flex flex-wrap items-center gap-2 sm:gap-3">
					{/* NavBar Add Book button */}
					<button onClick={() => setOpen2(true)}>
						<Navbutton text="Add Book" />
					</button>

					{/* Modal for NavBar add book */}
					<Modal open={open2} onclosefun={() => setOpen2(false)}>
						<PopCard>
							<CloseButton onClick={() => setOpen2(false)} />
							<BookMenu
								setBook={setBook}
								setLibrary={setLibrary}
								close={() => setOpen2(false)}
							/>
						</PopCard>
					</Modal>
					<Link to="/library">
						<Navbutton text="Library" />
					</Link>
					<Link to="/stats">
						<Navbutton text="Stats" />
					</Link>
					<Navbutton text="Settings" />
				</nav>
			</div>
		</header>
	);
}

export default NavBar;
