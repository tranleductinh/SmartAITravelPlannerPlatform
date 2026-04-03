import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import LandingHome from "./pages/LandingHome";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";

import TravelerTest from "./pages/Traveler/TravelerTest";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import GuideTest from "./pages/Guide/GuideTest";
import BookingSuccess from "./pages/Guest/BookingSuccess";

import ProviderDashboard from "./pages/Provider/ProviderDashboard";
import GuideManagementProvider from "./pages/Provider/GuideManagementProvider";
import ProviderBookingManagement from "./pages/Provider/ProviderBookingManagement";
import GuideLiveTourTracking from "./pages/Guide/GuideLiveTourTracking";
import PublicTourTracking from "./pages/Guest/PublicTourTracking";
import AssignedToursList from "./pages/Guide/AssignedToursList";
import TourDetailOps from "./pages/Guide/TourDetailOps";
import TourTracking from "./pages/Traveler/TourTracking";
import MyBookingTourTraveler from "./pages/Traveler/MyBookingTourTraveler";
import AITravelPlanner from "./pages/Traveler/AITravelPlanner";

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LandingHome />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />

      <Route path="/traveler" element={<Layout />}>
        <Route index element={<TravelerTest />} />
        <Route path="tour-tracking" element={<TourTracking />} />
        <Route path="my-booking-traveler" element={<MyBookingTourTraveler />} />
        <Route path="ai-travel-planner" element={<AITravelPlanner />} />
      </Route>

      <Route path="/admin" element={<Layout />}>
        <Route index element={<AdminDashboard />} />
      </Route>

      <Route path="/provider" element={<Layout />}>
        <Route index element={<ProviderDashboard />} />
        <Route path="guide-management" element={<GuideManagementProvider />} />
        <Route
          path="bookings-management"
          element={<ProviderBookingManagement />}
        />
      </Route>

      <Route path="/guide" element={<Layout />}>
        <Route index element={<GuideTest />} />
        <Route path="assigned-tours" element={<AssignedToursList />} />
        <Route path="tour-detail-ops/:tourId" element={<TourDetailOps />} />
        <Route path="live-tour-tracking" element={<GuideLiveTourTracking />} />
      </Route>

      <Route path="/guest" element={<Layout />}>
        <Route path="public-tour-tracking" element={<PublicTourTracking />} />
        <Route path="booking-success-and-tracking-link" element={<BookingSuccess />} />


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
