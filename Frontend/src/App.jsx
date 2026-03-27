import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TravelerDashboard from "./pages/TravelerDashboard";
import Layout from "./components/layout";
import AIPlan from "./pages/AIPlan";
import AdminDashboard from "./pages/AdminDashboard";
import ProvidersDashborad from "./pages/ProvidersDashborad";

function AppRoutes() {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            {/* Login */}
            <Route path="/login" element={<LoginPage />} />

            {/* Main pages */}
            <Route path="/traveler" element={<Layout />}>
                <Route index element={<TravelerDashboard />} />
                <Route path="ai-plan" element={<AIPlan />} />
            </Route>
            <Route path="/admin" element={<Layout />}>
                <Route index element={<AdminDashboard />} />
            </Route>
            <Route path="/providers" element={<Layout />}>
                <Route index element={<ProvidersDashborad />} />
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
