import React from 'react';

const filterStatuses = ['All', 'Pending', 'Confirmed'];

const bookings = [
  {
    customer: 'Elena Rodriguez',
    email: 'e.rodriguez@email.com',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBpAS8ysq28vxxzbyV-6QvBFgXGilqAwngD-YBSWf4OEkg1BYvjXtSOlhpxCkWBIvWO9uKAnyBcsf7vUXEYdBMhD05ZYp3h9PTUONfCD8kobIP1BKK3_Ytqj0m3hCMfD1hi0Sp1x40GGeHvs-TqIRyT0dIfpgUPU8GYw_WN8sEymgZXrWcgq17LZdfnu1XWn-_iHydTzknT0I6rg6VqFU08PFJwihWZsbOArd5EtlfPQ2rNyEW2eluKbZpEG4tUF7_4DlkHpv2tsmoA',
    avatarAlt:
      'Portrait of a young woman with a friendly smile, outdoor natural lighting',
    tour: 'Alpine Peaks Helicopter Tour',
    guests: '2 Adults, 1 Child',
    date: 'Oct 24, 2023',
    time: '10:30 AM',
    status: 'Pending',
    statusClass: 'bg-amber-100 text-amber-700',
    actions: 'decision',
  },
  {
    customer: 'Marcus Chen',
    email: 'm.chen@outlook.com',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCX7gv0nRtERkrqBWCRNqvh7vdDRh4sWMGY3KqUynKt4A9T7QHiK4iS5eyZGm4aOCP3mGA5RSnpqllq2B0lonKSUF22MzYtTuZnq4R37G3ZOEMwgKwFI0q9NAgoVn7-qU3LHBcD0H2EZOXv4R9ft8J2bpkNJceM1siUiYRnwoeFfAnobk_XVZiBk6LTgK7W4jgasR-fjzML5gbL-s0cw8i0X53Mz5H7Rgkhlbi-cCfc-i_owheJv_V-QZdf20ZIFqLrebeYKHkT0I18',
    avatarAlt:
      'Close up portrait of a middle aged man with glasses, professional and serene look',
    tour: 'Azure Coast Private Yacht',
    guests: '4 Adults',
    date: 'Oct 28, 2023',
    time: '02:00 PM',
    status: 'Confirmed',
    statusClass: 'bg-teal-100 text-teal-700',
    actions: 'menu',
  },
  {
    customer: 'Sarah Jenkins',
    email: 's.jenkins@webmail.com',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAwXfjKw4qk26jHyz8-BMJFEt_GMZLnulJhbkEKwg7qdm1V9kcEAvHZpweA1G_c-hCSwmPr7z3teOOFQDvv4Bk5Ukr1vyC7QTOsKkZfweuH6CdkEATHLnPHnNesklWUXsM7FHT4bMG-PcByBHLWoHU2f9omLf2JRkbvF0HJ48-expthmLqU4pkYJmcMnoC5zxqSDF77hl8s9Mg-1OfRKhFsOeYZQT9QvU2yQv89QdElk4EUKnl5ceJUTS50T1hjDOkxNSe3DgMshDr8',
    avatarAlt:
      'Artistic portrait of a woman with vibrant lighting and modern aesthetic',
    tour: 'Kyoto Zen Garden Walk',
    guests: '1 Adult',
    date: 'Nov 02, 2023',
    time: '09:00 AM',
    status: 'Cancelled',
    statusClass: 'bg-red-100 text-red-700',
    actions: 'history',
  },
  {
    customer: 'David Wilson',
    email: 'dwilson@proton.me',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB31QjKyjc1o1cY4xZv-kgWWaut3YgAIwPD326Ahq3w16vBceuhP8QXBdXsJ6TgcgXg5JCsUQ7dn7iTsZ2oioAii9qtkta27sDa1AILDDK2HIGgMob5pL9T1icAp1OusXagJ9zxMVuelNI-a_nJRAr8rxk2w2zqjaNpJG03CArFHaazadslIV3IGJXfP4NOlU6Z8c6Gn1MLFzaMO_sal9JrJX5n5twu7_jwBzUwbxGLL0-Wk6JFhzLURAY_803yKLIfLfYT8ApCn0dM',
    avatarAlt:
      'Smiling young man in a casual travel outfit, mountain background',
    tour: 'Alpine Peaks Helicopter Tour',
    guests: '2 Adults',
    date: 'Nov 05, 2023',
    time: '01:30 PM',
    status: 'Pending',
    statusClass: 'bg-amber-100 text-amber-700',
    actions: 'decision',
  },
];

const tours = [
  'All Active Tours',
  'Alpine Peaks Helicopter Tour',
  'Azure Coast Private Yacht',
  'Kyoto Zen Garden Walk',
];

const renderActions = (type) => {
  if (type === 'decision') {
    return (
      <div className="flex justify-end gap-3 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
        <button className="rounded-xl bg-primary px-4 py-2 text-xs font-bold text-on-primary shadow-sm transition-transform hover:scale-105">
          Accept
        </button>
        <button className="rounded-xl bg-error-container px-4 py-2 text-xs font-bold text-on-error-container transition-transform hover:scale-105">
          Reject
        </button>
      </div>
    );
  }

  if (type === 'history') {
    return (
      <div className="flex justify-end">
        <button className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container">
          <span className="material-symbols-outlined">history</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-end">
      <button className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container">
        <span className="material-symbols-outlined">more_vert</span>
      </button>
    </div>
  );
};

const ProviderBookingManagement = () => {
  return (
    <div className="space-y-8 pt-20 text-on-surface">
      <section className="rounded-3xl bg-surface-container-lowest p-6 shadow-[0_20px_40px_rgba(25,28,30,0.04)]">
        <div className="flex flex-wrap items-end gap-6">
          <div className="min-w-[220px] flex-1">
            <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
              Tour Name
            </label>
            <select className="w-full rounded-xl border-0 bg-surface-container-low py-3 px-4 text-sm text-on-surface focus:ring-2 focus:ring-primary/20">
              {tours.map((tour) => (
                <option key={tour}>{tour}</option>
              ))}
            </select>
          </div>

          <div className="min-w-[220px] flex-1">
            <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
              Booking Date
            </label>
            <input
              className="w-full rounded-xl border-0 bg-surface-container-low py-3 px-4 text-sm text-on-surface focus:ring-2 focus:ring-primary/20"
              type="date"
            />
          </div>

          <div className="min-w-[220px] flex-1">
            <label className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
              Status
            </label>
            <div className="flex flex-wrap gap-2">
              {filterStatuses.map((status, index) => (
                <button
                  key={status}
                  className={
                    index === 0
                      ? 'rounded-xl bg-primary px-4 py-3 text-xs font-semibold text-on-primary'
                      : 'rounded-xl bg-surface-container-low px-4 py-3 text-xs font-semibold text-on-surface-variant transition-colors hover:bg-surface-container-high'
                  }
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[2rem] bg-surface-container-lowest shadow-[0_20px_40px_rgba(25,28,30,0.04)]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] border-collapse text-left">
            <thead>
              <tr className="bg-slate-200">
                <th className="px-8 py-5 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Customer
                </th>
                <th className="px-8 py-5 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Tour Details
                </th>
                <th className="px-8 py-5 text-center text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Date
                </th>
                <th className="px-8 py-5 text-center text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Status
                </th>
                <th className="px-8 py-5 text-right text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={`${booking.customer}-${booking.date}-${booking.time}`}
                  className="group transition-colors hover:bg-surface-container-low"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 overflow-hidden rounded-xl shadow-sm">
                        <img
                          alt={booking.avatarAlt}
                          className="h-full w-full object-cover"
                          src={booking.avatar}
                        />
                      </div>
                      <div>
                        <p className="font-heading font-bold text-on-surface">
                          {booking.customer}
                        </p>
                        <p className="text-xs text-on-surface-variant">
                          {booking.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-8 py-6">
                    <p className="font-bold text-on-surface">{booking.tour}</p>
                    <p className="flex items-center gap-1 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px]">
                        group
                      </span>
                      {booking.guests}
                    </p>
                  </td>

                  <td className="px-8 py-6 text-center">
                    <p className="font-semibold text-on-surface">{booking.date}</p>
                    <p className="text-[11px] font-medium uppercase text-on-surface-variant">
                      {booking.time}
                    </p>
                  </td>

                  <td className="px-8 py-6 text-center">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-tight ${booking.statusClass}`}
                    >
                      {booking.status}
                    </span>
                  </td>

                  <td className="px-8 py-6">{renderActions(booking.actions)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex flex-col gap-4 px-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-on-surface-variant">
          Showing <span className="font-bold text-on-surface">4</span> of 24
          bookings
        </p>

        <div className="flex gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container text-on-surface-variant transition-colors hover:bg-surface-container-high">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-on-primary">
            1
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container-lowest text-sm font-bold text-on-surface-variant transition-colors hover:bg-surface-container">
            2
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container-lowest text-sm font-bold text-on-surface-variant transition-colors hover:bg-surface-container">
            3
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container text-on-surface-variant transition-colors hover:bg-surface-container-high">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProviderBookingManagement;
