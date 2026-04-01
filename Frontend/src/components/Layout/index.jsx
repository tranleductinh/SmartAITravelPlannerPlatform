import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import HeaderGuest from "@/components/HeaderGuest";

export default function Layout() {
  const location = useLocation();
  const roleCurrent = ["admin", "traveler", "guide", "provider"].find((role) =>
    location.pathname.startsWith(`/${role}`)
  );
  const hasAppShell = Boolean(roleCurrent);

  return (
    <SidebarProvider>
      <div className="flex w-full">
        {hasAppShell && <AppSidebar />}

        <main className="flex-1">
          {hasAppShell ? <Header /> : <HeaderGuest />}

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
