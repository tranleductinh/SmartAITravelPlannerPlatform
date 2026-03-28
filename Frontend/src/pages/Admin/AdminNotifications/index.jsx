import React from "react";

const AdminNotifications = () => {
  return (
    <div
      className="p-8 space-y-8 max-w-7xl mx-auto"
      style={{ fontFamily: "Manrope" }}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="min-w-[200px]">
          <h1 className="text-2xl font-bold" style={{ fontFamily: "Manrope" }}>
            Notifications
          </h1>
          <p className="text-slate-500" style={{ fontFamily: "Manrope" }}>
            System alerts and updates.
          </p>
        </div>

        <div className="flex-1 min-w-[220px] max-w-md">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
              search
            </span>

            <input
              className="app-search w-full pl-10 pr-4 py-2 text-sm"
              placeholder="Search Notifications"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-primary">
            notifications
          </span>
          <div className="flex-1">
            <p
              className="text-sm text-slate-600"
              style={{ fontFamily: "Manrope" }}
            >
              New provider submission awaiting approval.
            </p>
            <span className="mt-2 inline-flex px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-semibold text-slate-500">
              Approvals
            </span>
          </div>
          <button
            className="text-xs font-bold text-primary"
            style={{ fontFamily: "Manrope" }}
          >
            Mark read
          </button>
        </div>
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-primary">
            notifications
          </span>
          <div className="flex-1">
            <p
              className="text-sm text-slate-600"
              style={{ fontFamily: "Manrope" }}
            >
              Spike in booking cancellations detected.
            </p>
            <span
              className="mt-2 inline-flex px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-semibold text-slate-500"
              style={{ fontFamily: "Manrope" }}
            >
              Risk
            </span>
          </div>
          <button className="text-xs font-bold text-primary">Mark read</button>
        </div>
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-primary">
            notifications
          </span>
          <div className="flex-1">
            <p
              className="text-sm text-slate-600"
              style={{ fontFamily: "Manrope" }}
            >
              Payment gateway latency alert.
            </p>
            <span
              className="mt-2 inline-flex px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-semibold text-slate-500"
              style={{ fontFamily: "Manrope" }}
            >
              Payments
            </span>
          </div>
          <button
            className="text-xs font-bold text-primary"
            style={{ fontFamily: "Manrope" }}
          >
            Mark read
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNotifications;
