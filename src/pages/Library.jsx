import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { useBookContext } from "./BookContext";
import PopCard from "../components/book/Popcard";
import ModalBook from "../components/ui/ModalBook";
import CloseButton from "../components/ui/CloseButton";
import Bookedit from "../components/book/Bookedit";
function Library() {
	const { library, setOpen3, open3 } = useBookContext();

	return (
		<>
			<Header />

			<div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 px-6 text-[#F0F6FC] font-outfit  min-w-[70vw] relative">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-2xl sm:text-3xl font-semibold">
					📖 Library Page
				</motion.div>
				{/*  grid */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className="flex flex-col w-full rounded-lg border border-[#30363D] bg-[#161B22]/50 relative">
					<div className="p-4 sm:p-6 relative ">
						<div className="flex flex-col gap-4 relative ">
							{library.map((element, index) => (
								<button
									key={index}
									className=" cursor-pointer"
									onClick={() => {
										setOpen3(true);
										console.log(index); /*make sure to pass this to the module*/
									}}>
									<div className="p-2 rounded bg-[#0D1117]">
										<p>
											<strong>Title:</strong> {element.title}
										</p>
										<p>
											<strong>Author:</strong> {element.author}
										</p>
										<p>
											<strong>Status:</strong> {element.status}
										</p>
										<p>
											<strong>Progress:</strong> Page {element.currentPage} of{" "}
											{element.totalPages || "N/A"}
										</p>
									</div>
								</button>
							))}
						</div>
						<ModalBook open={open3} onclose={() => setOpen3(false)}>
							<PopCard>
								<CloseButton onClick={() => setOpen3(false)} />
								<Bookedit index={index} />
								{/*import clicked book*/}
							</PopCard>
						</ModalBook>
					</div>
					<div className="p-4 sm:p-6 border-t border-[#30363D]">
						{/* can add a button here or something*/}
						<p className="text-center text-sm text-[#8B949E]">
							End of Library List
						</p>
					</div>
				</motion.div>
			</div>
			<Footer />
		</>
	);
}

export default Library;
