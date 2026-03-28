import React from "react";

export default function RegisterPage() {
    return (
        <div class="min-h-screen bg-atmosphere flex items-center justify-center p-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl w-full">
                <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm w-full">
                    <h1 class="text-2xl font-bold mb-2">Create account</h1>
                    <p class="text-slate-500 mb-6">Join the Smart AI Travel Planner Platform.</p>
                    <div class="space-y-4">
                        <div>
                            <p class="text-xs font-semibold text-slate-500 uppercase">Role</p>
                            <div class="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <label class="cursor-pointer rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                                    <input type="radio" name="role" class="peer sr-only" value="traveler" checked="" />
                                    <div class="flex items-center gap-2 peer-checked:text-primary">
                                        <span class="material-symbols-outlined text-base">person_pin_circle</span>
                                        Traveler
                                    </div>
                                </label>
                            </div>
                        </div>
                        <input
                            class="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm"
                            placeholder="Full name"
                        />
                        <input
                            class="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm"
                            placeholder="Email"
                        />
                        <input
                            class="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm"
                            placeholder="Phone number"
                        />
                        <input
                            class="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm"
                            placeholder="Password"
                            type="password"
                        />
                        <div class="flex items-center gap-2 text-xs text-slate-500">
                            <input type="checkbox" /> I agree to the Terms &amp; Privacy Policy.
                        </div>
                        <div class="flex items-center gap-2 text-xs text-slate-500">
                            <input type="checkbox" checked="" /> Send me travel deals &amp; tips.
                        </div>
                        <button class="w-full px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
                            Create Account
                        </button>
                        <div class="rounded-xl border border-slate-200 p-4 bg-slate-50/70 text-xs text-slate-500">
                            Your account includes itinerary backups, priority support, and AI travel insights.
                        </div>
                    </div>
                </div>
                <div class="hidden lg:flex flex-col justify-between rounded-3xl p-10 text-white bg-gradient-to-br from-amber-400 via-primary to-sky-500 shadow-2xl gradient-move">
                    <div>
                        <p class="uppercase tracking-[0.3em] text-xs text-white/80">Get Started</p>
                        <h1 class="text-4xl font-black mt-4">Build your dream trip in minutes.</h1>
                        <p class="text-white/90 mt-4">
                            AI recommendations, hotel-managed tours, and seamless bookings.
                        </p>
                    </div>
                    <div class="bg-white/15 border border-white/20 rounded-2xl p-4 backdrop-blur-md">
                        <p class="text-sm font-semibold">AI Plan Preview</p>
                        <p class="text-xs text-white/80">5-day coastal itinerary</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
