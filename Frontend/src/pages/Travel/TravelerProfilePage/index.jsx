import React from "react";
import ProfileCard from "./ProfileCard";
import { Input } from "@/components/ui/input";

const TravelerProfilePage = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Profile</h1>
          <p className="text-muted-foreground">
            Manage personal info and security.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md w-full">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            🔍
          </span>
          <Input placeholder="Search Profile" className="pl-10" />
        </div>
      </div>

      <ProfileCard />
    </div>
  );
};

export default TravelerProfilePage;
