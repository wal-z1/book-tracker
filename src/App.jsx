import { useState } from "react";
import OrganicBackground from "./components/layout/OrganicBackground";
import HomePage from "./pages/HomePage";
import Library from "./pages/Library";
import Stats from "./pages/Stats";
import { Analytics } from "@vercel/analytics/react";
import { Routes, Route } from "react-router-dom";

function App() {
	const [library, setLibrary] = useState([]);
	const [book, setBook] = useState({
		title: "No Book",
		author: "Someone",
		currentPage: 0,
		totalPages: undefined,
	});

	return (
		<>
			<OrganicBackground />

			<Routes>
				<Route
					path="/"
					element={
						<HomePage
							library={library}
							setLibrary={setLibrary}
							book={book}
							setBook={setBook}
						/>
					}
				/>
				<Route
					path="/library"
					element={<Library library={library} setBook={setBook} />}
				/>
				<Route path="/stats" element={<Stats library={library} />} />
			</Routes>

			<Analytics />
		</>
	);
}

export default App;
