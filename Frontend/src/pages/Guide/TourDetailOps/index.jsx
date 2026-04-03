import React, { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  AlertTriangle,
  Calendar,
  FileText,
  ImageIcon,
  LayoutDashboard,
  MapPin,
  MessageSquare,
  Route,
  Shield,
  UserPlus,
  UtensilsCrossed,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { getTourById } from "@/data/guideAssignedTours";

function ServiceIcon({ type }) {
  if (type === "Meals") return <UtensilsCrossed className="size-5" />;
  if (type === "Transport") return <MapPin className="size-5" />;
  return <LayoutDashboard className="size-5" />;
}

const TourDetailOps = () => {
  const { tourId } = useParams();
  const tour = getTourById(tourId);
  const [mainTab, setMainTab] = useState("itinerary");

  const [notesOpen, setNotesOpen] = useState({ open: false, title: "", body: "" });
  const [manifestOpen, setManifestOpen] = useState(false);
  const [passengerChecks, setPassengerChecks] = useState({});
  const [issueOpen, setIssueOpen] = useState(false);
  const [issueDraft, setIssueDraft] = useState("");
  const [issues, setIssues] = useState([]);

  const initialChecks = useMemo(() => {
    const m = {};
    tour?.passengers?.forEach((p) => {
      m[p.id] = true;
    });
    return m;
  }, [tour]);

  if (!tour) {
    return <Navigate to="/guide/assigned-tours" replace />;
  }

  const openNotes = (title, body) => setNotesOpen({ open: true, title, body });
  const statusHeader =
    tour.status === "ongoing"
      ? "Active Tour"
      : tour.status === "scheduled"
        ? "Scheduled Tour"
        : "Completed Tour";

  const manifestList = tour.passengers?.length ? tour.passengers : [];

  const openManifest = () => {
    setPassengerChecks({ ...initialChecks });
    setManifestOpen(true);
  };

  const submitIssue = () => {
    if (!issueDraft.trim()) return;
    setIssues((prev) => [
      {
        id: `local-${Date.now()}`,
        title: issueDraft.slice(0, 80),
        status: "open",
        detail: issueDraft,
      },
      ...prev,
    ]);
    setIssueDraft("");
    setIssueOpen(false);
  };

  return (
    <div className="mx-auto w-full max-w-7xl text-on-surface antialiased">
      <header className="group relative mb-8 h-[300px] overflow-hidden rounded-3xl">
        <img
          alt={tour.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={tour.heroImage}
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8">
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <Badge className="rounded-full border-0 bg-primary-container px-3 py-1 text-xs font-bold tracking-wider text-on-primary uppercase">
              {statusHeader}
            </Badge>
            <Badge className="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-md">
              Guide Operations
            </Badge>
          </div>
          <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            {tour.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" />
              <span className="text-sm font-medium">{tour.locationShortLabel}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-4 shrink-0" />
              <span className="text-sm font-medium">{tour.dateRangeLabel}</span>
            </div>
          </div>
        </div>
      </header>

      <Button variant="outline" size="sm" className="mb-6 rounded-xl" asChild>
        <Link to="/guide/assigned-tours">← Back to itineraries</Link>
      </Button>

      <Tabs value={mainTab} onValueChange={setMainTab} className="gap-6">
        <TabsList className="no-scrollbar mb-8 h-auto w-full flex-nowrap justify-start overflow-x-auto rounded-none bg-transparent p-0">
          <TabsTrigger
            value="overview"
            className="shrink-0 rounded-2xl border border-outline-variant/10 bg-white px-6 py-3 font-semibold text-slate-500 shadow-sm data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:font-bold data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 data-[state=active]:[&_svg]:text-white"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="itinerary"
            className="shrink-0 gap-2 rounded-2xl border border-outline-variant/10 bg-white px-6 py-3 font-semibold text-slate-500 shadow-sm data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:font-bold data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 data-[state=active]:[&_svg]:text-white"
          >
            <Route className="size-5" />
            Itinerary
          </TabsTrigger>
          <TabsTrigger
            value="passengers"
            className="shrink-0 rounded-2xl border border-outline-variant/10 bg-white px-6 py-3 font-semibold text-slate-500 shadow-sm data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:font-bold data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 data-[state=active]:[&_svg]:text-white"
          >
            Passengers
          </TabsTrigger>
          <TabsTrigger
            value="services"
            className="shrink-0 rounded-2xl border border-outline-variant/10 bg-white px-6 py-3 font-semibold text-slate-500 shadow-sm data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:font-bold data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 data-[state=active]:[&_svg]:text-white"
          >
            Services
          </TabsTrigger>
          <TabsTrigger
            value="updates"
            className="shrink-0 rounded-2xl border border-outline-variant/10 bg-white px-6 py-3 font-semibold text-slate-500 shadow-sm data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:font-bold data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 data-[state=active]:[&_svg]:text-white"
          >
            Updates
          </TabsTrigger>
          <TabsTrigger
            value="issues"
            className="shrink-0 rounded-2xl border border-outline-variant/10 bg-white px-6 py-3 font-semibold text-slate-500 shadow-sm data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:font-bold data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 data-[state=active]:[&_svg]:text-white"
          >
            Issues
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-0">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-outline-variant/10 py-6 shadow-sm ring-1 ring-outline-variant/5">
              <CardContent className="space-y-2 px-6">
                <p className="text-xs font-bold tracking-widest text-on-surface-variant uppercase">
                  Reference
                </p>
                <p className="font-headline text-2xl font-bold text-primary">{tour.code}</p>
                <p className="text-sm text-on-surface-variant">Shared with provider desk & hub.</p>
              </CardContent>
            </Card>
            <Card className="border-outline-variant/10 py-6 shadow-sm ring-1 ring-outline-variant/5">
              <CardContent className="space-y-2 px-6">
                <p className="text-xs font-bold tracking-widest text-on-surface-variant uppercase">
                  Lead guide
                </p>
                <p className="font-headline text-xl font-bold">{tour.guideName}</p>
                <Badge variant="outline" className="mt-1 capitalize">
                  {tour.status}
                </Badge>
              </CardContent>
            </Card>
            <Card className="border-outline-variant/10 py-6 shadow-sm ring-1 ring-outline-variant/5">
              <CardContent className="space-y-2 px-6">
                <p className="text-xs font-bold tracking-widest text-on-surface-variant uppercase">
                  Group size
                </p>
                <p className="font-headline text-2xl font-bold">{tour.passengerCount} guests</p>
                <Button variant="link" className="h-auto px-0" onClick={openManifest}>
                  Open manifest checklist
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="itinerary" className="mt-0">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-8">
              {tour.itineraryDays?.length ? (
                tour.itineraryDays.map((day) => (
                  <div key={day.id}>
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-4">
                      <h2 className="text-2xl font-extrabold tracking-tight text-on-surface">
                        {day.title}
                      </h2>
                      <span className="rounded-lg bg-primary-fixed px-3 py-1 text-sm font-bold tracking-tight text-primary">
                        {day.dateLabel}
                      </span>
                    </div>
                    <div className="relative space-y-10 pl-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:bg-slate-200 before:content-['']">
                      {day.activities.map((act) => (
                        <div key={act.id} className="relative">
                          <div
                            className={`absolute -left-[30px] top-1 z-10 size-5 rounded-full border-4 border-white shadow-sm ${act.dotClass}`}
                          />
                          <div className={act.cardClass}>
                            <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                              <div>
                                <span
                                  className={`mb-1 block text-xs font-bold tracking-widest uppercase ${act.status === "ongoing" ? "text-primary" : "text-slate-400"}`}
                                >
                                  {act.time}
                                </span>
                                <h3
                                  className={`text-xl font-bold ${act.status === "upcoming" ? "italic text-slate-400" : "text-on-surface"}`}
                                >
                                  {act.title}
                                </h3>
                              </div>
                              <Badge className={`${act.statusClass} rounded px-2 py-1 text-[10px] font-bold tracking-wider uppercase`}>
                                {act.status}
                              </Badge>
                            </div>
                            <p
                              className={`mb-4 text-sm leading-relaxed ${act.status === "upcoming" ? "text-slate-400" : "text-on-surface-variant"}`}
                            >
                              {act.note}
                            </p>
                            {act.status !== "upcoming" && (
                              <div className="flex flex-wrap items-center gap-4">
                                <Button
                                  variant="link"
                                  className="h-auto gap-1 px-0 text-xs font-bold"
                                  onClick={() => openNotes(`${act.title} — ops notes`, act.notes)}
                                >
                                  <FileText className="size-4" />
                                  View Notes
                                </Button>
                                <Button
                                  variant="link"
                                  className="h-auto gap-1 px-0 text-xs font-bold"
                                  onClick={() =>
                                    openNotes(
                                      `${act.title} — activity details`,
                                      `${act.note}\n\nDuration, vendor contacts, and manifest flags sync in the full Voyager ops feed (demo).`,
                                    )
                                  }
                                >
                                  <ImageIcon className="size-4" />
                                  Activity Details
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <Card className="border-dashed py-12">
                  <CardContent className="text-center text-on-surface-variant">
                    No timed itinerary for this tour in the demo dataset.
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="space-y-6 lg:col-span-4">
              <Card className="border-outline-variant/5 py-6 shadow-[0_20px_40px_rgba(25,28,30,0.04)] ring-1 ring-outline-variant/5">
                <CardContent className="px-6">
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-on-surface">
                      Passengers ({tour.passengerCount})
                    </h2>
                    <Button
                      variant="link"
                      className="h-auto px-0 text-xs font-bold tracking-widest uppercase"
                      onClick={() => setMainTab("passengers")}
                    >
                      View All
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {manifestList.slice(0, 3).map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-slate-50"
                      >
                        <Avatar className="size-12 rounded-xl" size="lg">
                          <AvatarImage src={p.avatar} alt={p.name} />
                          <AvatarFallback>{p.name.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-bold text-on-surface">{p.name}</h4>
                            <span className="text-[10px] font-bold text-slate-500">Age {p.age}</span>
                          </div>
                          <div className="mt-1 flex flex-wrap gap-2">
                            {p.tags?.map((tag) => (
                              <span
                                key={tag.label}
                                className={`rounded-full px-2 py-0.5 text-[9px] font-bold tracking-tighter uppercase ${tag.className}`}
                              >
                                {tag.label}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="mt-6 w-full rounded-2xl border-slate-100 bg-slate-50 py-4 font-bold text-slate-600 hover:bg-slate-100"
                    asChild
                  >
                    <Link to="/guide/live-tour-tracking">
                      <UserPlus className="size-5" />
                      Manage Manifest
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-primary py-6 text-white shadow-xl ring-0 shadow-primary/20">
                <CardContent className="px-6">
                  <h3 className="mb-4 text-lg font-bold">Support &amp; Coordination</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="ghost"
                      className="flex h-auto flex-col gap-2 rounded-2xl bg-white/10 py-4 text-white hover:bg-white/20"
                      onClick={() =>
                        openNotes(
                          "Emergency runbook",
                          "Dial hub priority line +84 (demo) · Share live map from Tracking · Log incident in Issues tab.",
                        )
                      }
                    >
                      <AlertTriangle className="size-8" />
                      <span className="text-[10px] font-bold tracking-widest uppercase">Emergency</span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex h-auto flex-col gap-2 rounded-2xl bg-white/10 py-4 text-white hover:bg-white/20"
                      onClick={() =>
                        openNotes(
                          "Hub sync",
                          "Last push: manifest v3 · ETA sync every 15m while tour is active.",
                        )
                      }
                    >
                      <MessageSquare className="size-8" />
                      <span className="text-[10px] font-bold tracking-widest uppercase">Hub Sync</span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex h-auto flex-col gap-2 rounded-2xl bg-white/10 py-4 text-white hover:bg-white/20"
                      onClick={() =>
                        openNotes("Meals", "See Services tab for vouchers and dietary routing.")
                      }
                    >
                      <UtensilsCrossed className="size-8" />
                      <span className="text-[10px] font-bold tracking-widest uppercase">Meals</span>
                    </Button>
                    <Button variant="ghost" className="flex h-auto flex-col gap-2 rounded-2xl bg-white/10 py-4 text-white hover:bg-white/20" asChild>
                      <Link to="/guide/live-tour-tracking">
                        <MapPin className="size-8" />
                        <span className="text-[10px] font-bold tracking-widest uppercase">Logistics</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="passengers" className="mt-0">
          <Card className="py-6">
            <CardContent className="grid gap-4 px-6 sm:grid-cols-2">
              {manifestList.map((p) => (
                <div
                  key={p.id}
                  className="flex gap-4 rounded-2xl border border-outline-variant/10 p-4"
                >
                  <Avatar className="size-14 rounded-xl">
                    <AvatarImage src={p.avatar} alt={p.name} />
                    <AvatarFallback>{p.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">{p.name}</h4>
                    <p className="text-sm text-on-surface-variant">Age {p.age}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.tags?.map((tag) => (
                        <Badge key={tag.label} variant="secondary" className="text-[9px]">
                          {tag.label}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              {!manifestList.length && (
                <p className="text-on-surface-variant sm:col-span-2">No passenger manifest in demo.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="mt-0">
          <div className="space-y-4">
            {tour.services?.length ? (
              tour.services.map((s) => (
                <Card key={s.id} className="py-5">
                  <CardContent className="flex gap-4 px-6">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <ServiceIcon type={s.type} />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-1 text-[10px] uppercase">
                        {s.type}
                      </Badge>
                      <h4 className="font-bold">{s.title}</h4>
                      <p className="text-sm text-on-surface-variant">{s.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="py-12">
                <CardContent className="text-center text-on-surface-variant">
                  No structured services for this tour in the demo set.
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="updates" className="mt-0">
          <Card className="py-6">
            <CardContent className="space-y-4 px-6">
              {tour.updates?.length ? (
                tour.updates.map((u, i) => (
                  <div key={u.id}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="text-xs font-bold text-primary">
                        {u.day} · {u.time}
                      </span>
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase">
                        {u.author}
                      </span>
                    </div>
                    <p className="mt-1 text-sm">{u.body}</p>
                    {i < tour.updates.length - 1 ? <Separator className="mt-4" /> : null}
                  </div>
                ))
              ) : (
                <p className="text-on-surface-variant">No updates logged yet.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="issues" className="mt-0">
          <div className="mb-4 flex justify-end gap-2">
            <Button onClick={() => setIssueOpen(true)}>
              <Shield className="size-4" />
              Log issue
            </Button>
          </div>
          <div className="space-y-3">
            {[...issues, ...(tour.issues ?? [])].map((issue) => (
              <Card key={issue.id} className="py-4">
                <CardContent className="flex flex-wrap items-start justify-between gap-3 px-6">
                  <div>
                    <h4 className="font-bold">{issue.title}</h4>
                    <p className="text-sm text-on-surface-variant">{issue.detail}</p>
                  </div>
                  <Badge variant={issue.status === "resolved" ? "success" : "warning"} className="capitalize">
                    {issue.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
            {!issues.length && !(tour.issues?.length) && (
              <Card className="py-12">
                <CardContent className="text-center text-on-surface-variant">
                  No issues reported. Use Log issue to add one (stored locally in this session).
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={notesOpen.open} onOpenChange={(o) => setNotesOpen((s) => ({ ...s, open: o }))}>
        <DialogContent className="max-w-lg rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-headline">{notesOpen.title}</DialogTitle>
            <DialogDescription>Reference material for this stop (demo content).</DialogDescription>
          </DialogHeader>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{notesOpen.body}</p>
          <DialogFooter>
            <Button onClick={() => setNotesOpen((s) => ({ ...s, open: false }))}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={manifestOpen} onOpenChange={setManifestOpen}>
        <DialogContent className="max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-headline">Manifest checklist</DialogTitle>
            <DialogDescription>
              Toggle guests as you verify IDs and waivers. Demo only — not persisted.
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[50vh] space-y-3 overflow-y-auto py-2">
            {manifestList.map((p) => (
              <label
                key={p.id}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-outline-variant/15 p-3"
              >
                <input
                  type="checkbox"
                  className="size-4 accent-primary"
                  checked={!!passengerChecks[p.id]}
                  onChange={(e) =>
                    setPassengerChecks((prev) => ({ ...prev, [p.id]: e.target.checked }))
                  }
                />
                <Avatar className="size-9">
                  <AvatarImage src={p.avatar} alt={p.name} />
                  <AvatarFallback>{p.name.slice(0, 1)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{p.name}</span>
              </label>
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setManifestOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setManifestOpen(false);
              }}
            >
              Save checklist
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={issueOpen} onOpenChange={setIssueOpen}>
        <DialogContent className="max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-headline">Log an issue</DialogTitle>
            <DialogDescription>Visible to you until refresh (local demo state).</DialogDescription>
          </DialogHeader>
          <Textarea
            value={issueDraft}
            onChange={(e) => setIssueDraft(e.target.value)}
            placeholder="Describe what happened…"
            className="min-h-[120px] rounded-xl border-outline-variant/30"
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setIssueOpen(false)}>
              Cancel
            </Button>
            <Button onClick={submitIssue} disabled={!issueDraft.trim()}>
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TourDetailOps;
