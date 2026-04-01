import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import Layout from "./components/Layout";
import TravelerTest from "./pages/Traveler/TravelerTest";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import GuideTest from "./pages/Guide/GuideTest";
import GuestTest from "./pages/Guest/GuestTest";
import RegisterPage from "./pages/Auth/RegisterPage";
import ProviderDashboard from "./pages/Provider/ProviderDashboard";

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {/* Login */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />

      {/* Main pages */}
      <Route path="/traveler" element={<Layout />}>
        <Route index element={<TravelerTest />} />
      </Route>
      <Route path="/admin" element={<Layout />}>
        <Route index element={<AdminDashboard />} />
      </Route>
      <Route path="/provider" element={<Layout />}>
        <Route index element={<ProviderDashboard />} />
      </Route>
      <Route path="/guide" element={<Layout />}>
        <Route index element={<GuideTest />} />
      </Route>
      <Route path="/guest" element={<Layout />}>
        <Route index element={<GuestTest />} />
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
