import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProfileCard = () => {
  return (
    <Card className="max-w-2xl">
      {/* Header */}
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          Update your personal information and security details.
        </CardDescription>
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-6">
        {/* Avatar */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-muted overflow-hidden" />
          <Button variant="secondary">Upload Photo</Button>
        </div>

        {/* Name + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Full name" />
          <Input placeholder="Phone number" />
        </div>

        {/* Email */}
        <Input placeholder="Email" type="email" />

        {/* Nationality + Passport */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Nationality" />
          <Input placeholder="Passport number" />
        </div>

        {/* Emergency */}
        <div className="border rounded-xl p-4 bg-muted/40 space-y-3">
          <p className="text-sm font-medium">Emergency contact</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Contact name" />
            <Input placeholder="Contact phone" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button>Save Changes</Button>
          <Button variant="outline">Change Password</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
