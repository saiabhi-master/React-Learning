import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx"

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<Home />);
