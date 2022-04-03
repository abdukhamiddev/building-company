import GlobalStyles from "./styles/globalStyles";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Properties from "./routes/properties/Properties";
import Property from "./routes/property/Property";
import NotFound from "./routes/404/NotFound";

function App() {
	return (
		<>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<About />} />
				<Route path="/properties" element={<Properties />} />
				<Route path="/properties/:id" element={<Property />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
