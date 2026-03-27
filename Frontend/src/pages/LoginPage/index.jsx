import React from "react";
import LoginCard from "./LoginCard";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-atmosphere flex items-center justify-center p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl w-full">
        <div className="hidden lg:flex flex-col justify-between rounded-3xl p-10 text-white bg-gradient-to-br from-primary via-sky-500 to-amber-400 shadow-2xl">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-white/80">
              Smart AI Travel
            </p>
            <h1 className="text-4xl font-black mt-4">
              Welcome back to your next adventure.
            </h1>
            <p className="text-white/90 mt-4">
              Access your itineraries, bookings, and AI travel insights in one
              place.
            </p>
          </div>

          <div className="bg-white/15 border border-white/20 rounded-2xl p-4 backdrop-blur-md">
            <p className="text-sm font-semibold">Last trip</p>
            <p className="text-xs text-white/80">Da Nang • 5 days • $1,200</p>
          </div>
        </div>

        <LoginCard />
      </div>
    </div>
  );
};

export default LoginPage;
