import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";

function App() {
    return (
        <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/explore" element={<HomePage />} />
            <Route path="/inventory" element={<HomePage />} />
            <Route path="/notifications" element={<HomePage />} />
            <Route path="/profile" element={<HomePage />} />
            {/* auth */}
            <Route path="/signin" element={<HomePage />} />
        </Routes>
    );
}

export default App;
