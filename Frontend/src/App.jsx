import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TravelerDashboard from "./pages/TravelerDashboard";
import Layout from "./components/layout";
import AIPlan from "./pages/AIPlan";

function AppRoutes() {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            {/* Login */}
            <Route path="/login" element={<LoginPage />} />

            {/* Main pages */}
            <Route path="/" element={<Layout />}>
                <Route path="traveler">
                    <Route index element={<TravelerDashboard />} />
                    <Route path="ai-plan" element={<AIPlan />} />
                </Route>
            </Route>
        </Routes>
    );
}
function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;
