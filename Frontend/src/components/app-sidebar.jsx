import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Sparkles,
  CalendarDays,
  Ticket,
  Hotel,
  Utensils,
  Star,
  LifeBuoy,
  Plane,
  Users,
  Store,
  Map,
  ShieldCheck,
  CreditCard,
  Bell,
  BarChart3,
  DoorOpen,
  Flag,
  ClipboardList,
  Tag,
  MessageCircle,
} from "lucide-react";

const MENU = {
  traveler: [
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
  ],

  admin: [
    { name: "Overview", href: "", icon: LayoutDashboard },
    { name: "Users", href: "/users", icon: Users },
    { name: "Providers", href: "/providers", icon: Store },
    { name: "Hotels", href: "/hotels", icon: Hotel },
    { name: "Map", href: "/map", icon: Map },
    {
      name: "Service Approvals",
      href: "/service-approvals",
      icon: ShieldCheck,
    },
    { name: "Bookings", href: "/bookings", icon: CalendarDays },
    { name: "Payments", href: "/payments", icon: CreditCard },
    { name: "Reviews", href: "/reviews", icon: Star },
    { name: "Support Tickets", href: "/support", icon: LifeBuoy },
    { name: "Notifications", href: "/notifications", icon: Bell },
    { name: "Reports", href: "/reports", icon: BarChart3 },
  ],

  hotel: [
    { name: "Dashboard", href: "", icon: LayoutDashboard },
    { name: "Hotel Profile", href: "/hotel-profile", icon: Hotel },
    { name: "Rooms & Inventory", href: "/rooms", icon: DoorOpen },
    { name: "Bookings", href: "/bookings", icon: CalendarDays },
    { name: "Tour Management", href: "/tours", icon: Flag },
    { name: "Food Services", href: "/food", icon: Utensils },
    { name: "Guide Management", href: "/guides", icon: ClipboardList },
    { name: "Pricing & Promotions", href: "/pricing", icon: Tag },
    { name: "Reviews", href: "/reviews", icon: Star },
    { name: "Chat", href: "/chat", icon: MessageCircle },
    { name: "Notifications", href: "/notifications", icon: Bell },
  ],
};

const getRoleFromPath = (pathname) => {
  if (pathname.startsWith("/admin")) return "admin";
  if (pathname.startsWith("/traveler")) return "traveler";
  return "hotel";
};

export function AppSidebar() {
  const location = useLocation();

  const role = getRoleFromPath(location.pathname);
  const menuItems = MENU[role];
  const basePath = `/${role === "hotel" ? "hotel" : role}`;

  return (
    <Sidebar>
      <SidebarHeader className="p-5">
        <div className="flex gap-3 items-center">
          <div className="bg-primary p-2 rounded-lg">
            <Plane color="#ffffff" strokeWidth={2.5} />
          </div>
          <p className="font-bold text-lg">Smart AI Travel</p>
        </div>
      </SidebarHeader>

      <SidebarContent className="flex flex-col gap-2 px-4 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const fullPath = `${basePath}${item.href}`;
          const isActive = location.pathname === fullPath;

          return (
            <Link
              key={item.name}
              to={fullPath}
              className="relative flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-100 duration-300"
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-primary/10 rounded-lg"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <Icon
                className={`w-5 h-5 relative z-10 ${isActive ? "text-primary" : "text-slate-500"}`}
              />
              <span
                className={`relative z-10 ${isActive ? "text-primary" : "text-slate-600"}`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-3 p-3">
          <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKmU6dftLGKeGIEnRrmWKpwjGqZzTYEuMlsZxzkB3WP-C585VtK3uNDejE0MkCwdmt99MTaA0Ws1403MERG4udkzAHF8dEFp3yBCht9U-FFE2ZLMrP8ocnp4zGfWmKGzT44GeTMU_0-scAfR2qdpUamxF9D3ZQCn1MmhsuUzPoa8MLYkEBJxg1UkKhj9inw2rMqvPxJWkaOR9YhmwoDab3HCrBkW6TBdYyh_uXqV1ilXmeeTEULPvLhPLA6MikHJsXg3xXxIQNcreF"
              alt="profile"
            />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-bold truncate">Alex Traveler</p>
            <p className="text-xs text-slate-500 truncate">Premium Member</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
