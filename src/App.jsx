import OrganicBackground from "./components/layout/OrganicBackground";

import Home from "./pages/HomePage";
import Library from "./pages/Library";
import Stats from "./pages/Stats";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
	const [Library, SetLibrary] = useState([]);
	const [book, setBook] = useState({
		title: "No Book",
		author: "Someone",
		currentPage: 0,
		totalPages: undefined,
	});

	const [open1, Sopen1] = useState(false);
	console.log(Library);
	return (
		<>
			<OrganicBackground />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/library" element={<Library />} />
				<Route path="/stats" element={<Stats />} />
			</Routes>

			<Analytics />
		</>
	);
}

export default App;
