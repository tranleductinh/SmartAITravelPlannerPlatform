import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import HeaderGuest from "@/components/HeaderGuest";

export default function Layout() {
  const location = useLocation();
  const roleCurrent = ["admin", "traveler", "guide", "provider"].find((role) =>
    location.pathname.startsWith(`/${role}`),
  );
  const hasAppShell = Boolean(roleCurrent);

  return (
    <SidebarProvider>
      <div className="flex w-full">
        {hasAppShell && <AppSidebar />}

        {hasAppShell ? <Header /> : <HeaderGuest />}
        <div className="app-shell-page w-full pt-22 px-3 pb-24 md:px-4 md:pb-8 lg:px-5">
          <div className="flex min-h-screen w-full bg-surface">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                className="h-full w-full min-w-0 space-y-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <main className="w-full min-w-0 flex-1 md:ml-64 px-4 py-6 md:px-8 md:py-10 lg:px-10">
                  <Outlet />
                </main>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
