import OrganicBackground from "./components/layout/OrganicBackground";
import HomePage from "./pages/HomePage";
import Library from "./pages/Library";
import Stats from "./pages/Stats";
import { Analytics } from "@vercel/analytics/react";
import { Routes, Route } from "react-router-dom";
import { BookProvider } from "./pages/BookContext";

function App() {
  return (
    <BookProvider>
      <OrganicBackground />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<Library />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>

      <Analytics />
    </BookProvider>
  );
}

export default App;
