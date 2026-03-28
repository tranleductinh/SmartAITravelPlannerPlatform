import React from 'react'

 const AdminUsers = () => {
    const statusClass = {
    Active: "badge badge-success",
    Suspended: "badge badge-danger",
  };
  return (
    <>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Users</h1>
          <p className="mt-2 text-sm text-slate-500">
            Manage traveler accounts and permissions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Active Users", value: "10.2k" },
          { label: "New Signups", value: "420" },
          { label: "Suspended", value: "32" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs text-slate-500 uppercase">{stat.label}</p>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="text-left p-4 font-semibold">Name</th>
              <th className="text-left p-4 font-semibold">Email</th>
              <th className="text-left p-4 font-semibold">Status</th>
              <th className="text-left p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Anna Nguyen", "anna@email.com", "Active"],
              ["Mark Lee", "mark@email.com", "Suspended"],
            ].map((row) => (
              <tr key={row[0]} className="border-t border-slate-100">
                <td className="p-4 font-medium">{row[0]}</td>
                <td className="p-4 text-slate-600">{row[1]}</td>
                <td className="p-4">
                  <span className={statusClass[row[2]] || "badge badge-neutral"}>{row[2]}</span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-semibold">
                      View
                    </button>
                    <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-semibold">
                      Message
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default AdminUsers;
