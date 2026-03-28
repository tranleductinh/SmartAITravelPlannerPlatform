import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import LoginPage from "@/pages/Auth/LoginPage";
import RegisterPage from "@/pages/Auth/RegisterPage";
import TravelerProfilePage from "@/pages/Travel/TravelerProfilePage";
import TravelerDashboard from "@/pages/Travel/TravelerDashboard";
import AIPlan from "@/pages/Travel/AIPlan";
import Bookings from "@/pages/Travel/Bookings";
import AdminOverview from "@/pages/Admin/AdminOverview";
import AdminUsers from "@/pages/Admin/AdminUsers";
import HotelDashboard from "@/pages/Hotel/HotelDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Traveler (KHÔNG layout) */}
        <Route path="/traveler" element={<TravelerDashboard />} />
        <Route path="/traveler/profile" element={<TravelerProfilePage />} />
        <Route path="/traveler/ai-plan" element={<AIPlan />} />
        <Route path="/traveler/bookings" element={<Bookings />} />

        {/* Admin (có layout) */}
        <Route path="/admin" element={<Layout />}>
          <Route index element={<AdminOverview />} />
          <Route path="users" element={<AdminUsers />} />
        </Route>

        {/* Hotel */}
        <Route path="/hotel" element={<Layout />}>
          <Route index element={<HotelDashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;