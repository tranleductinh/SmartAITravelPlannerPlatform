import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HeaderTraveler from "./HeaderTraveler";
import HeaderAdmin from "./HeaderAdmin";
import HeaderHotel from "./HeaderHotel";

export default function Layout() {
    const location = useLocation();
    const roleCurrent = location.pathname.includes("admin");
    return (
        <SidebarProvider>
            <div className="flex w-full">
                <AppSidebar />
                <main className="flex-1">
                    {location.pathname.includes("admin") ? (
                        <HeaderAdmin />
                    ) : location.pathname.includes("traveler") ? (
                        <HeaderTraveler />
                    ) : (
                        <HeaderHotel />
                    )}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            className="h-full p-8 space-y-8"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </SidebarProvider>
    );
}
