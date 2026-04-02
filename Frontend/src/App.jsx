import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";


import Layout from "./components/Layout";
import ProviderLayout from "./components/ProviderLayout";
import LandingHome from "./pages/LandingHome";
import LoginPage from "./pages/Auth/LoginPage"; 
import RegisterPage from "./pages/Auth/RegisterPage";

import TravelerTest from "./pages/Traveler/TravelerTest";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import GuideTest from "./pages/Guide/GuideTest";
import GuestTest from "./pages/Guest/GuestTest";
import BookingSuccess from "./pages/Guest/BookingSuccess";


import ProviderDashboard from "./pages/Provider/ProviderDashboard";
import GuideManagementProvider from "./pages/Provider/GuideManagementProvider";


function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LandingHome />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/traveler" element={<Layout />}>
        <Route index element={<TravelerTest />} />
      </Route>

      <Route path="/admin" element={<Layout />}>
        <Route index element={<AdminDashboard />} />
      </Route>

      <Route path="/provider" element={<ProviderLayout />}>
        <Route index element={<ProviderDashboard />} />
        <Route path="guide-management" element={<GuideManagementProvider />} />
      </Route>

      <Route path="/guide" element={<Layout />}>
        <Route index element={<GuideTest />} />
      </Route>

   
      <Route path="/guest" element={<Layout />}>
        <Route index element={<GuestTest />} />
        <Route path="booking-success" element={<BookingSuccess />} />
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