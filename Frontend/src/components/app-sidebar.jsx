import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";

import { motion } from "framer-motion";
import {
    LayoutDashboard,
    Sparkles,
    CalendarDays,
    Ticket,
    Hotel,
    Map,
    Utensils,
    CreditCard,
    Star,
    LifeBuoy,
    Plane,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const data = [
    { name: "Dashboard", href: "", icon: LayoutDashboard },
    { name: "AI Plan", href: "/ai-plan", icon: Sparkles },
    { name: "Itinerary", href: "/itinerary", icon: CalendarDays },
    { name: "Bookings", href: "/bookings", icon: Ticket },
    { name: "Hotels", href: "/hotels", icon: Hotel },
    { name: "Hotel Tours", href: "/hotel-tours", icon: Map },
    { name: "Food", href: "/food", icon: Utensils },
    { name: "Map", href: "/map", icon: Map },
    { name: "Payments", href: "/payments", icon: CreditCard },
    { name: "Reviews", href: "/reviews", icon: Star },
    { name: "Support", href: "/support", icon: LifeBuoy },
];

export function AppSidebar() {
    const location = useLocation();

    return (
        <Sidebar>
            <SidebarHeader className="p-5">
                <div className="flex gap-3 items-center">
                    <div className="bg-primary p-2 rounded-lg">
                        <Plane color="#ffffff" strokeWidth={2.5} />
                    </div>
                    {/* <img src={logo} className="w-10 h-10 rounded-md" /> */}
                    <p className="font-bold text-lg">Smart AI Travel</p>
                </div>
            </SidebarHeader>

            <SidebarContent className="flex flex-col gap-2 px-4 overflow-y-auto">
                {data.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === "/traveler" +item.href;

                    return (
                        <Link
                            key={item.href}
                            to={"/traveler" +item.href}
                            className="relative flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-slate-100 duration-300 font-medium "
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="sidebar-active"
                                    className="absolute inset-0 bg-primary/10 rounded-lg "
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}

                            <Icon className={`w-6 h-6 relative z-10 ${isActive ? "text-primary" : "text-[#475569]"}`} />
                            <span className={`relative z-10 ${isActive ? "text-primary" : "text-slate-600"}`}>
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </SidebarContent>

            <SidebarFooter>
                <div class="flex items-center gap-3 p-2">
                    <div class="size-10 rounded-full bg-slate-200 overflow-hidden">
                        <img
                            class="w-full h-full object-cover"
                            alt="Traveler profile"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKmU6dftLGKeGIEnRrmWKpwjGqZzTYEuMlsZxzkB3WP-C585VtK3uNDejE0MkCwdmt99MTaA0Ws1403MERG4udkzAHF8dEFp3yBCht9U-FFE2ZLMrP8ocnp4zGfWmKGzT44GeTMU_0-scAfR2qdpUamxF9D3ZQCn1MmhsuUzPoa8MLYkEBJxg1UkKhj9inw2rMqvPxJWkaOR9YhmwoDab3HCrBkW6TBdYyh_uXqV1ilXmeeTEULPvLhPLA6MikHJsXg3xXxIQNcreF"
                        />
                    </div>
                    <div class="flex-1 overflow-hidden">
                        <p class="text-sm font-bold truncate">Alex Traveler</p>
                        <p class="text-xs text-slate-500 truncate">Premium Member</p>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}
