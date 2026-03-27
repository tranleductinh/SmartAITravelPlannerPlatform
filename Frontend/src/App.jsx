import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import TravelerDashboard from "./pages/Travel/TravelerDashboard";
import Layout from "./components/Layout";
import AIPlan from "./pages/Travel/AIPlan";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import HotelDashboard from "./pages/Hotel/HotelDashboard";

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
      <Route path="/hotel" element={<Layout />}>
        <Route index element={<HotelDashboard />} />
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
