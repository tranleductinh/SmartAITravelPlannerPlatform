import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const ProviderLayout = () => {
  const location = useLocation();

  const sidebarLinkClass = ({ isActive }) =>
    isActive
      ? "bg-teal-50 text-teal-700 rounded-xl px-4 py-3 flex items-center space-x-3 transition-all duration-200"
      : "text-slate-500 px-4 py-3 hover:bg-slate-100 rounded-xl flex items-center space-x-3 transition-all duration-200";

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "flex flex-col items-center text-teal-700 font-bold active"
      : "flex flex-col items-center text-slate-500";

  const pageTitle = (() => {
    if (location.pathname === "/provider") return "Provider Dashboard";
    if (location.pathname.includes("guide-management")) return "Guide Management Provider";
    if (location.pathname.includes("edit-tour")) return "Createor Edit Tour";
    if (location.pathname.includes("bookings-management")) return "Bookings Management Provider";
    if (location.pathname.includes("manage-tours")) return "Manage Tours Provider";
    return "Provider";
  })();

  return (
    <div className="bg-transparent font-sans text-on-surface antialiased">
      <style>
        {`.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}
body { font-family: "Inter", sans-serif; background-color: #f7f9fb; }`}
      </style>

      <div className="flex min-h-screen">
        <aside className="hidden md:flex flex-col h-screen w-64 bg-white py-8 px-4 space-y-2 fixed left-0 top-0 z-40 border-r border-outline-variant/20 shadow-[8px_0px_30px_rgba(25,28,30,0.04)]">
          <div className="px-4 mb-8">
            <a className="flex items-center space-x-3 mb-6" href="/" data-discover="true">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-xl">storefront</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-on-surface">Voyager AI</h3>
                <p className="text-[11px] text-on-surface-variant uppercase tracking-wider">
                  Provider Portal
                </p>
              </div>
            </a>
          </div>

          <nav className="flex-1 space-y-1">
            <NavLink to="/provider" end className={sidebarLinkClass}>
              <span className="material-symbols-outlined text-xl">analytics</span>
              <span className="font-heading text-[13px] font-semibold">Provider Dashboard</span>
            </NavLink>

            <NavLink to="/provider/manage-tours" className={sidebarLinkClass}>
              <span className="material-symbols-outlined text-xl">edit_calendar</span>
              <span className="font-heading text-[13px] font-semibold">Manage Tours Provider</span>
            </NavLink>

            <NavLink to="/provider/edit-tour" className={sidebarLinkClass}>
              <span className="material-symbols-outlined text-xl">edit_square</span>
              <span className="font-heading text-[13px] font-semibold">Createor Edit Tour</span>
            </NavLink>

            <NavLink to="/provider/bookings-management" className={sidebarLinkClass}>
              <span className="material-symbols-outlined text-xl">book_online</span>
              <span className="font-heading text-[13px] font-semibold">
                Bookings Management Provider
              </span>
            </NavLink>

            <NavLink to="/provider/guide-management" className={sidebarLinkClass}>
              <span className="material-symbols-outlined text-xl">groups</span>
              <span className="font-heading text-[13px] font-semibold">
                Guide Management Provider
              </span>
            </NavLink>
          </nav>
        </aside>

        <main className="flex-1 min-h-screen md:ml-64">
          <header className="fixed top-0 right-0 left-0 md:left-64 z-50 h-16 border-b border-outline-variant/20 bg-white/92 px-7 backdrop-blur-md">
            <div className="mx-auto flex h-full max-w-[1920px] items-center justify-between gap-6">
              <div className="flex min-w-0 items-center gap-3">
                <h1 className="shrink-0 font-heading text-[1.05rem] font-extrabold tracking-tight text-teal-800">
                  Voyager AI
                </h1>

                <div className="hidden min-w-0 items-center gap-2 text-sm font-medium text-on-surface-variant lg:flex">
                  <span>Voyager AI</span>
                  <span>/</span>
                  <span>Provider</span>
                  <span>/</span>
                  <span className="truncate text-teal-700">{pageTitle}</span>
                </div>

                <div className="min-w-0 lg:hidden">
                  <p className="truncate text-sm font-semibold text-teal-700">
                    Voyager AI / Provider / {pageTitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative hidden md:block">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">
                    search
                  </span>
                  <input
                    className="h-11 w-72 rounded-full border border-outline-variant/30 bg-surface-container-low px-11 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary/25 focus:ring-2 focus:ring-primary/15"
                    placeholder="Search in provider pages..."
                    type="text"
                  />
                </div>

                <button
                  className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container-low"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">notifications</span>
                  <span className="absolute right-[11px] top-[10px] h-2 w-2 rounded-full bg-error" />
                </button>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container-low text-xs font-bold text-teal-800">
                  P
                </div>
              </div>
            </div>
          </header>

          <div className="app-shell-page w-full pt-20 px-3 pb-24 md:px-4 md:pb-8 lg:px-5">
            <div className="bg-surface text-on-surface flex min-h-screen">
              <main className="flex-1 flex flex-col min-w-0 bg-surface">
                <Outlet />
              </main>
            </div>
          </div>
        </main>

        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/92 backdrop-blur-xl z-50 px-6 py-3 flex justify-between items-center shadow-2xl border-t border-outline-variant/20">
          <NavLink to="/provider" end className={mobileNavLinkClass}>
            <span className="material-symbols-outlined">analytics</span>
            <span className="mt-1 max-w-[58px] truncate text-[10px] font-heading">Dash</span>
          </NavLink>

          <NavLink to="/provider/manage-tours" className={mobileNavLinkClass}>
            <span className="material-symbols-outlined">edit_calendar</span>
            <span className="mt-1 max-w-[58px] truncate text-[10px] font-heading">Manage</span>
          </NavLink>

          <NavLink to="/provider/edit-tour" className={mobileNavLinkClass}>
            <span className="material-symbols-outlined">edit_square</span>
            <span className="mt-1 max-w-[58px] truncate text-[10px] font-heading">Createor</span>
          </NavLink>

          <NavLink to="/provider/bookings-management" className={mobileNavLinkClass}>
            <span className="material-symbols-outlined">book_online</span>
            <span className="mt-1 max-w-[58px] truncate text-[10px] font-heading">Bookings</span>
          </NavLink>

          <NavLink to="/provider/guide-management" className={mobileNavLinkClass}>
            <span className="material-symbols-outlined">groups</span>
            <span className="mt-1 max-w-[58px] truncate text-[10px] font-heading">Guides</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default ProviderLayout;