import { Bell, Settings } from "lucide-react";
import React from "react";

export default function HeaderHotel() {
    return (
        <header class="sticky top-0 z-10 hotel-topbar px-8 py-4 flex justify-end items-center">
            <div class="flex items-center gap-4">
                <button class="p-2 text-slate-500 hover:bg-white/70 rounded-lg relative">
                    <Bell />
                    <span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button class="p-2 text-slate-500 hover:bg-white/70 rounded-lg">
                    <Settings />
                </button>
            </div>
        </header>
    );
}
