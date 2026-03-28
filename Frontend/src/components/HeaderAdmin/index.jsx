import { Bell, Settings } from "lucide-react";
import React from "react";

export default function HeaderAdmin() {
    return (
        <header class="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex items-center justify-between">
            <div class="flex items-center gap-4">
                <h2 class="text-xl font-bold tracking-tight">Dashboard Overview</h2>
                <span class="px-2.5 py-0.5 rounded-full bg-slate-100 text-xs font-medium text-slate-600">
                    Live Updates
                </span>
            </div>
            <div class="flex items-center gap-4">
                <div class="relative w-64">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                        search
                    </span>
                    <input
                        class="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20"
                        placeholder="Global search..."
                        type="text"
                    />
                </div>

                <a
                    className="p-2 rounded-lg transition-colors text-slate-600 hover:bg-slate-100"
                    href="/admin/notifications"
                >
                    <Bell />
                </a>

                <button class="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                    <Settings />
                </button>
            </div>
        </header>
    );
}
