import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import TravelerDashboard from "./pages/Travel/TravelerDashboard";
import Layout from "./components/Layout";
import AIPlan from "./pages/Travel/AIPlan";
import AdminOverview from "./pages/Admin/AdminOverview";
import HotelDashboard from "./pages/Hotel/HotelDashboard";
import RegisterPage from "./pages/Auth/RegisterPage";
import AdminUsers from "./pages/Admin/AdminUsers";
import Bookings from "./pages/Travel/Bookings";

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {/* Login */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login" element={<RegisterPage />} />

      {/* Main pages */}
      <Route path="/traveler" element={<Layout />}>
        <Route index element={<TravelerDashboard />} />
        <Route path="ai-plan" element={<AIPlan />} />
        <Route path="bookings" element={<Bookings />} />
      </Route>
      <Route path="/admin" element={<Layout />}>
        <Route index element={<AdminOverview />} />
        <Route path="users" element={<AdminUsers/>}/>
       
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
