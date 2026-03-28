import React from "react";

export default function Bookings() {
    return (
        <div className="p-8 space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="min-w-[200px]">
                    <h1 className="text-2xl font-bold">Bookings</h1>
                    <p className="text-slate-500">Track all your hotel and tour reservations in one place.</p>
                </div>
                <div className="flex-1 min-w-[220px] max-w-md">
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                            search
                        </span>
                        <input
                            className="app-search w-full pl-10 pr-4 py-2 text-sm"
                            placeholder="Search Bookings"
                            type="text"
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-slate-500 uppercase">Active Bookings</p>
                            <p className="text-2xl font-bold mt-2">5</p>
                        </div>
                        <span className="material-symbols-outlined text-primary">event_available</span>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-slate-500 uppercase">Upcoming Trips</p>
                            <p className="text-2xl font-bold mt-2">2</p>
                        </div>
                        <span className="material-symbols-outlined text-primary">calendar_today</span>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-slate-500 uppercase">Pending Payments</p>
                            <p className="text-2xl font-bold mt-2">$93</p>
                        </div>
                        <span className="material-symbols-outlined text-primary">payments</span>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-slate-500">
                        <tr>
                            <th className="text-left p-4 font-semibold">Service</th>
                            <th className="text-left p-4 font-semibold">Date</th>
                            <th className="text-left p-4 font-semibold">Status</th>
                            <th className="text-left p-4 font-semibold">Amount</th>
                            <th className="text-left p-4 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-slate-100">
                            <td className="p-4 font-medium">Ocean Blue Hotel</td>
                            <td className="p-4 text-slate-600">Jun 15 - Jun 20</td>
                            <td className="p-4">
                                <span className="badge badge-success">Confirmed</span>
                            </td>
                            <td className="p-4 font-semibold">$520</td>
                            <td className="p-4">
                                <button className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-semibold">View</button>
                            </td>
                        </tr>
                        <tr className="border-t border-slate-100">
                            <td className="p-4 font-medium">Airport Pickup</td>
                            <td className="p-4 text-slate-600">Jun 15</td>
                            <td className="p-4">
                                <span className="badge badge-warning">Pending</span>
                            </td>
                            <td className="p-4 font-semibold">$18</td>
                            <td className="p-4">
                                <button className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-semibold">View</button>
                            </td>
                        </tr>
                        <tr className="border-t border-slate-100">
                            <td className="p-4 font-medium">Hoi An Night Tour</td>
                            <td className="p-4 text-slate-600">Jun 18</td>
                            <td className="p-4">
                                <span className="badge badge-info">Paid</span>
                            </td>
                            <td className="p-4 font-semibold">$75</td>
                            <td className="p-4">
                                <button className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-semibold">View</button>
                            </td>
                        </tr>
                        <tr className="border-t border-slate-100">
                            <td className="p-4 font-medium">Hotel Tour: Ba Na Hills</td>
                            <td className="p-4 text-slate-600">Jun 19</td>
                            <td className="p-4">
                                <span className="badge badge-info">Scheduled</span>
                            </td>
                            <td className="p-4 font-semibold">$60</td>
                            <td className="p-4">
                                <button className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-semibold">View</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
