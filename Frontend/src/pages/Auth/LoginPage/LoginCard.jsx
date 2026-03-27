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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const LoginCard = () => {
  return (
    <Card className="rounded-3xl shadow-sm border border-slate-200">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Use your account to continue.</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase">Role</p>

          <RadioGroup
            defaultValue="traveler"
            className="grid grid-cols-2 gap-3 mt-3"
          >
            <label className="flex items-center space-x-2 border rounded-xl p-3 cursor-pointer">
              <RadioGroupItem value="traveler" />
              <span>Traveler</span>
            </label>

            <label className="flex items-center space-x-2 border rounded-xl p-3 cursor-pointer">
              <RadioGroupItem value="hotel" />
              <span>Hotel</span>
            </label>
          </RadioGroup>
        </div>

        <Input placeholder="Email" />
        <Input type="password" placeholder="Password" />

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button className="text-primary font-semibold">
            Forgot password?
          </button>
        </div>

        <Button className="w-full">Sign In</Button>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <div className="h-px flex-1 bg-slate-200"></div>
          or continue with
          <div className="h-px flex-1 bg-slate-200"></div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline">Google</Button>
          <Button variant="outline">Apple</Button>
        </div>

        <Button variant="secondary" className="w-full">
          Create an account
        </Button>

        <p className="text-xs text-slate-400">
          Protected by SmartTravel secure login • 2FA available in settings.
        </p>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
