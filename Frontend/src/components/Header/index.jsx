import React from 'react';
import { Bell, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const PAGE_META = {
  '/traveler': {
    role: 'Traveler',
    title: 'Traveler Dashboard',
    searchPlaceholder: 'Search in traveler pages...',
    avatarFallback: 'T',
  },
  '/admin': {
    role: 'Admin',
    title: 'Admin Dashboard',
    searchPlaceholder: 'Search in admin pages...',
    avatarFallback: 'A',
  },
  '/guide': {
    role: 'Guide',
    title: 'Guide Dashboard',
    searchPlaceholder: 'Search in guide pages...',
    avatarFallback: 'G',
  },
  '/provider': {
    role: 'Provider',
    title: 'Provider Dashboard',
    searchPlaceholder: 'Search in provider pages...',
    avatarFallback: 'P',
  },
};

const Header = () => {
  const location = useLocation();

  const isProviderBookingsPage =
    location.pathname === '/provider/bookings-management';

  const currentMeta =
    Object.entries(PAGE_META).find(([path]) => location.pathname.startsWith(path))
      ?.[1] ?? PAGE_META['/provider'];

  if (isProviderBookingsPage) {
    return (
      <header className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between bg-white/70 px-6 shadow-sm backdrop-blur-xl md:left-64">
        <h1 className="font-heading text-xl font-bold tracking-tight text-teal-800">
          Bookings Management
        </h1>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-outline">
              search
            </span>
            <input
              className="w-64 rounded-full border-0 bg-surface-container-low py-2 pl-10 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant focus:ring-2 focus:ring-primary/20"
              placeholder="Search customer or tour..."
              type="text"
            />
          </div>

          <button className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-surface-container">
            <span className="material-symbols-outlined text-on-surface-variant">
              notifications
            </span>
          </button>

          <div className="h-8 w-8 overflow-hidden rounded-full border border-outline-variant/20 bg-surface-container-low">
            <img
              alt="User profile avatar"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC41uXsdWZPnPzXrqRMlprmHjKwdEr1k1X2IAtDXarvBi5i7ZWTo9JWXJpmKLPb2qW8zs3N6ePMYcL4mig7atkS6JyDjhZ0sRj8lX7Mb8JtlxwuMThMUU-Xs_aIty3SyLWIAdw93rgDgUtQqJ0Rr_giYs_aGj5vJJVNw9_ltpNlWjy3YYKaMtULDe4SiO11NsSoQ_MdA6BLmHC8r2pVPVwKR14-0zVwVYNndDBYo-d8vV4_gTCu7_l_BuQ80yj0uggW621js62qO-zL"
            />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-16 border-b border-outline-variant/20 bg-white/92 px-7 backdrop-blur-md md:left-64">
      <div className="mx-auto flex h-full max-w-[1920px] items-center justify-between gap-6">
        <div className="flex min-w-0 items-center gap-3">
          <h1 className="shrink-0 font-heading text-[1.05rem] font-extrabold tracking-tight text-teal-800">
            Voyager AI
          </h1>

          <div className="hidden min-w-0 items-center gap-2 text-sm font-medium text-on-surface-variant lg:flex">
            <span>/</span>
            <span>{currentMeta.role}</span>
            <span>/</span>
            <span className="truncate text-teal-700">{currentMeta.title}</span>
          </div>

          <div className="min-w-0 lg:hidden">
            <p className="truncate text-sm font-semibold text-teal-700">
              {currentMeta.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" />
            <Input
              type="text"
              placeholder={currentMeta.searchPlaceholder}
              className="h-11 w-72 rounded-full border border-outline-variant/30 bg-surface-container-low px-11 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary/25 focus-visible:ring-2 focus-visible:ring-primary/15"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="relative h-10 w-10 rounded-full text-on-surface-variant hover:bg-surface-container-low"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-[11px] top-[10px] h-2 w-2 rounded-full bg-red-500" />
          </Button>

          <Avatar className="h-9 w-9 border border-outline-variant/30 bg-surface-container-low">
            <AvatarFallback className="text-xs font-bold text-teal-800">
              {currentMeta.avatarFallback}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
