import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AlbumDetails from "./pages/AlbumDetails/AlbumDetails";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LandingPage />} />

				<Route path="/album/:slug" element={<AlbumDetails />} />

				<Route path="*" element={<LandingPage />} />
			</Routes>
		</div>
	);
}

export default App;
