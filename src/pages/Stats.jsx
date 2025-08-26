import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { useBookContext } from "./BookContext"; // context hook

// Single stat card
const StatCard = ({ value, label }) => (
	<div className="bg-[#0D1117] p-4 rounded-lg text-center flex flex-col items-center justify-center border border-[#30363D]">
		<span className="text-3xl sm:text-4xl font-bold text-white">{value}</span>
		<span className="text-sm text-[#8B949E] mt-1 capitalize">{label}</span>
	</div>
);

function Stats() {
	const { library, setLibrary } = useBookContext(); // include setLibrary for reset

	// Stats
	const totalBooks = library.length;
	const booksFinished = library.filter(
		(book) => book.status === "finished"
	).length;
	const booksReading = library.filter(
		(book) => book.status === "reading"
	).length;
	const totalPagesRead = library.reduce(
		(sum, book) => sum + (Number(book.currentPage) || 0),
		0
	);
	const totalPagesInLibrary = library.reduce(
		(sum, book) => sum + (Number(book.totalPages) || 0),
		0
	);
	const overallCompletion =
		totalPagesInLibrary > 0 ? (totalPagesRead / totalPagesInLibrary) * 100 : 0;

	// Reset function
	const handleReset = () => {
		localStorage.removeItem("library"); // clear localStorage
		setLibrary([]); // clear context state
	};

	// Empty state
	if (totalBooks === 0) {
		return (
			<>
				<Header />
				<div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 px-6 text-[#F0F6FC] font-outfit">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-2xl sm:text-3xl font-semibold">
						📊 Stats Page
					</motion.div>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className="text-lg text-[#8B949E]">
						Your library is empty. Add a book to start tracking your stats!
					</motion.p>
				</div>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Header />
			<div className="flex flex-col items-center justify-center min-h-[70vh] gap-8 px-6 text-[#F0F6FC] font-outfit">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-2xl sm:text-3xl font-semibold">
					📊 Your Reading Stats
				</motion.div>

				{/* Stats grid */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
					{/* Stat cards */}
					<StatCard value={totalBooks} label="Total Books" />
					<StatCard value={booksFinished} label="Books Finished" />
					<StatCard value={booksReading} label="Currently Reading" />
					<StatCard
						value={totalPagesRead.toLocaleString()}
						label="Total Pages Read"
					/>
					<StatCard
						value={totalPagesInLibrary.toLocaleString()}
						label="Total Pages in Library"
					/>
					<StatCard
						value={`${overallCompletion.toFixed(1)}%`}
						label="Library Complete"
					/>
				</motion.div>

				{/* Reset Button */}
				<button
					onClick={handleReset}
					className="mt-6 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors">
					Reset Library
				</button>
			</div>
			<Footer />
		</>
	);
}

export default Stats;
