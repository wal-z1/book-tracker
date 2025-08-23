import Header from "./components/layout/Header";
import OrganicBackground from "./components/layout/OrganicBackground";
import Footer from "./components/layout/Footer";
import Home from "./pages/HomePage";
import { Analytics } from "@vercel/analytics/react";
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
