import Header from "./components/layout/Header";
import OrganicBackground from "./components/layout/OrganicBackground";
import Footer from "./components/layout/Footer";
import Home from "./pages/HomePage";
import Library from "./pages/Library";
import Stats from "./pages/Stats";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<>
			<OrganicBackground />
			<Header />
			<Home />
			<Footer />
			<Analytics />
		</>
	);
}

export default App;
