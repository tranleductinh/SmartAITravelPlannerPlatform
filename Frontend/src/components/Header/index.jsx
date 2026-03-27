import { Bell, CreditCard, Search } from "lucide-react";
import React from "react";

export default function Header() {
    return (
        <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-100 flex items-center justify-between px-8">
            <div className="flex items-center gap-6 flex-1">
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg w-5 h-5 outline-none"/>
                    <input
                        className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm outline-none"
                        placeholder="Where to next? (e.g. Da Nang, Ha Noi)"
                        type="text"
                    />
                </div>
                <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-500">
                    <a className="hover:text-primary transition-colors" href="#">
                        Da Nang
                    </a>
                    <a className="hover:text-primary transition-colors" href="#">
                        Ha Noi
                    </a>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <a
                    className="p-2 rounded-lg transition-colors text-slate-600 hover:bg-slate-100"
                    href="/traveler/notifications"
                >
                    <Bell />
                </a>
                <a
                    className="flex items-center gap-2 rounded-full border px-2 py-1 transition-colors border-transparent hover:bg-slate-100"
                    href="/traveler/profile"
                >
                    <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            alt="Traveler profile"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKmU6dftLGKeGIEnRrmWKpwjGqZzTYEuMlsZxzkB3WP-C585VtK3uNDejE0MkCwdmt99MTaA0Ws1403MERG4udkzAHF8dEFp3yBCht9U-FFE2ZLMrP8ocnp4zGfWmKGzT44GeTMU_0-scAfR2qdpUamxF9D3ZQCn1MmhsuUzPoa8MLYkEBJxg1UkKhj9inw2rMqvPxJWkaOR9YhmwoDab3HCrBkW6TBdYyh_uXqV1ilXmeeTEULPvLhPLA6MikHJsXg3xXxIQNcreF"
                        />
                    </div>
                    <span className="hidden lg:inline text-sm font-semibold text-slate-700">Profile</span>
                </a>
                <button className="flex items-center gap-1 px-3 py-1.5 hover:bg-slate-100 rounded-lg transition-colors text-sm font-bold text-slate-600">
                    <CreditCard />USD
                </button>
            </div>
        </header>
    );
}
