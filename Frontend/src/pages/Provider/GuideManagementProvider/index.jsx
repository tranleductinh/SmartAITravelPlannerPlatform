import React from "react";

const GuideManagementProvider = () => {
  const guides = [
    {
      id: "tran-thi-mai-chau",
      name: "Tran Thi Mai Chau",
      specialty: "Coastal & culture operations",
      email: "chau.tran@voyager.vn",
      phone: "+84 905 987 654",
      bookingTitle: "Da Nang 3D2N: Coastal Elegance",
      bookingCode: "VGR-240330-DN",
      status: "active",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD0BfviMsRmGSM1xnCOiLAjEB-Xdb5zdVkaJer9i8EJDmcHyk3B_cx3NNEUzYZx5eeXLb3knh4GSyKV1fU2pKt6dX7NkkJOM-qqssY1oLkNGpRLgm3AiSVVcnGdAVSqgMJeL-mStHglR2Rc9V12kuRO9iwN7ZjrDqchBTD7BWXOm-mCLk6H7Q8mnXUOH5vIX9avqy2wQ7x_g34-VVu4BanY1QQ1qVm-2_PkEjdf_nz1PHmI3pTuP8jQkRkJa9qDZRvYGjv8ySp5VHSG",
    },
    {
      id: "pham-my-linh",
      name: "Pham My Linh",
      specialty: "Food & luxury guest care",
      email: "linh.pham@voyager.vn",
      phone: "+84 905 000 111",
      bookingTitle: "Da Nang 3D2N: Coastal Elegance",
      bookingCode: "VGR-240330-DN",
      status: "active",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCmFH0khJGsP3WF6jo0oP4Up6txGVXUjwbxkoBRe2qFZ9NP8n_B-_80zR4xgC-vwZ_xJe2jD3yxC9KW8cyn8HuxuY-m-ekx94ordv9ow5y-sDLRAdBGsB-OC2Uyyau8cibT2F0jzjHlYpzF_nMlW7A_kIkMB_qLguTW_xUfzNx7x_eMdw7YkJmmZ7pgRU7wmfY_PAl3VPBTX6JWkhI3N348TMBzsWN7E0IK29Nx4-CbsyPt-G-lE2US0DWxwyFKjDAQaxsbtZOU1-zk",
    },
    {
      id: "le-hoang-nam",
      name: "Le Hoang Nam",
      specialty: "Adventure transfers",
      email: "nam.le@voyager.vn",
      phone: "+84 912 345 678",
      bookingTitle: "Da Nang 3D2N: Coastal Elegance",
      bookingCode: "VGR-240330-DN",
      status: "inactive",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCjmyV2fEdfowObNUQEdEUCUjeAXT79-_C1jZFWRB2e808-3tfGL8OV3UZfpYigH8sBJeWe0C2e3P1qLxDCO3yK0XTt0uNcvOGtejqDTA6iXikPbUpa_Ov0qZ8nEKDCNhqX_NSvoRSK-sQTzgMTEaIeitqPG-OO3E1RqoYPLIMkw8pL0O56WtrqhWKVtkf0K9TxW89oGMhxYUmy8ubas4ZLOLKTQoJw0RZsUtFqYwdXmhDagMfIONiDIwWBhSWQXZB_tYDq7xio3vl6",
    },
  ];

  const cards = [
    { label: "Total Guides", value: "3" },
    { label: "Active Now", value: "2" },
    { label: "Assigned Bookings", value: "1" },
    { label: "Avg Rating", value: "4.8" },
  ];

  return (
    <div className="space-y-8 text-on-surface">
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cards.map((c) => (
          <div
            key={c.label}
            className="bg-surface-container-lowest p-6 rounded-xl shadow-sm"
          >
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
              {c.label}
            </p>
            <span className="text-3xl font-extrabold text-on-surface font-headline">
              {c.value}
            </span>
          </div>
        ))}
      </section>

      <section className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                  Guide
                </th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                  Contact Info
                </th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                  Assigned Booking
                </th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                  Status
                </th>
                <th className="px-6 py-4" />
              </tr>
            </thead>

            <tbody className="divide-y divide-surface-variant/30">
              {guides.map((g) => {
                const statusClasses =
                  g.status === "active"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                    : "bg-surface-container-low text-on-surface-variant border border-outline-variant/20";

                return (
                  <tr
                    key={g.id}
                    className="hover:bg-surface-container-low transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl overflow-hidden">
                          <img
                            alt={g.name}
                            className="w-full h-full object-cover"
                            src={g.avatar}
                          />
                        </div>
                        <div>
                          <p className="font-bold text-on-surface font-headline">
                            {g.name}
                          </p>
                          <p className="text-xs text-on-surface-variant">
                            {g.specialty}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <div className="text-sm">
                        <p className="text-on-surface">{g.email}</p>
                        <p className="text-on-surface-variant text-xs mt-1">
                          {g.phone}
                        </p>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <div className="text-sm">
                        <p className="font-semibold text-on-surface">
                          {g.bookingTitle}
                        </p>
                        <p className="text-on-surface-variant text-xs mt-1">
                          {g.bookingCode}
                        </p>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold capitalize ${statusClasses}`}
                      >
                        {g.status}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-right">
                      <button
                        className="px-4 py-2 rounded-lg bg-surface-container-low font-semibold text-sm"
                        type="button"
                      >
                        Assign Here
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default GuideManagementProvider;

