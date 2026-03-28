import React from 'react'

const AdminOverview = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Users", value: "12.4k", trend: "+5.2%" },
          { label: "Active Providers", value: "1,230", trend: "+2.1%" },
          { label: "Total Bookings", value: "8,420", trend: "+3.9%" },
          { label: "Monthly Revenue", value: "$98k", trend: "+6.4%" },
        ].map((card) => (
          <div key={card.label} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-500 text-sm font-medium">{card.label}</span>
              <span className="material-symbols-outlined text-primary">insights</span>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold">{card.value}</p>
                <p className="text-xs text-green-600 font-semibold mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">trending_up</span>
                  {card.trend}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Bookings Over Time</h3>
          <div className="h-56 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
            Chart Placeholder
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <p>New hotel provider submitted verification.</p>
              <p>3 reviews flagged for moderation.</p>
              <p>Payment dispute opened by user.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold mb-4">System Health</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>API Latency</span>
                <span className="font-semibold text-emerald-600">Normal</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Payment Gateway</span>
                <span className="font-semibold text-emerald-600">Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <span>SMS Provider</span>
                <span className="font-semibold text-amber-600">Degraded</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminOverview;
