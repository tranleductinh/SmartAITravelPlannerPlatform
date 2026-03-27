import React from "react";

const HotelDashboard = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="hotel-card p-6 flex flex-col gap-2">
        <h2 className="text-2xl font-bold" style={{ fontFamily: "Manrope" }}>
          Dashboard Overview
        </h2>
        <p className="text-slate-500" style={{ fontFamily: "Manrope" }}>
          Real-time performance and operational updates.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="hotel-card p-6 flex flex-col justify-between hotel-card-hover">
          <div className="flex justify-between items-start mb-4">
            <span
              className="text-sm font-medium text-slate-500"
              style={{ fontFamily: "Manrope" }}
            >
              Occupancy Rate
            </span>
            <span className="material-symbols-outlined text-primary">bed</span>
          </div>
          <div>
            <p className="text-3xl font-bold" style={{ fontFamily: "Manrope" }}>
              85%
            </p>
            <p
              className="text-xs text-green-600 flex items-center gap-1 mt-1 font-medium"
              style={{ fontFamily: "Manrope" }}
            >
              <span className="material-symbols-outlined text-xs">
                trending_up
              </span>{" "}
              +5% from last week
            </p>
          </div>
        </div>
        <div className="hotel-card p-6 hotel-card-hover">
          <p
            className="text-sm font-medium text-slate-500"
            style={{ fontFamily: "Manrope" }}
          >
            Upcoming Check-ins
          </p>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
        <div className="hotel-card p-6 hotel-card-hover">
          <p className="text-sm font-medium text-slate-500">Monthly Revenue</p>
          <p className="text-3xl font-bold mt-2">$24,320</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="hotel-card p-6">
          <h3
            className="text-lg font-bold mb-4"
            style={{ fontFamily: "Manrope" }}
          >
            Booking Trends
          </h3>
          <div className="h-48 bg-slate-100/70 rounded-xl flex items-center justify-center text-slate-400">
            Chart Placeholder
          </div>
        </div>
        <div className="hotel-card p-6">
          <h3
            className="text-lg font-bold mb-4"
            style={{ fontFamily: "Manrope" }}
          >
            Alerts
          </h3>
          <div
            className="space-y-3 text-sm text-slate-600"
            style={{ fontFamily: "Manrope" }}
          >
            <p>Low inventory for Deluxe Ocean View (3 rooms left).</p>
            <p>3 pending booking confirmations.</p>
            <p>New review requires response.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDashboard;
