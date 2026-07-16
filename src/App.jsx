import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import PredictionPage from "./pages/PredictionPage";
import "./App.css"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MenuPage />} />
                <Route path="/prediction" element={<PredictionPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;