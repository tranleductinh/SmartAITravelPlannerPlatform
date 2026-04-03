import { Button } from "@/components/ui/button";
import { CheckCircle, X } from "lucide-react";
import React from "react";

export default function ContentModeration() {
    return (
        <div className="mt-20 px-6 max-w-7xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
                    <p className="text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                        Pending Reports
                    </p>
                    <h3 className="text-3xl font-extrabold text-teal-800">124</h3>
                    <div className="mt-2 flex items-center gap-1 text-xs text-black font-medium">
                        <span className="material-symbols-outlined text-xs ">trending_up</span>+12% from yesterday
                    </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
                    <p className="text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                        Avg Response Time
                    </p>
                    <h3 className="text-3xl font-extrabold text-teal-800">42m</h3>
                    <div className="mt-2 flex items-center gap-1 text-xs text-primary font-medium">
                        <span className="material-symbols-outlined text-xs">timer</span>Within SLA target
                    </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
                    <p className="text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                        Automated Filters
                    </p>
                    <h3 className="text-3xl font-extrabold text-teal-800">89%</h3>
                    <div className="mt-2 flex items-center gap-1 text-xs text-on-surface-variant font-medium">
                        <span className="material-symbols-outlined text-xs">auto_awesome</span>1.2k flags auto-dismissed
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-on-surface">Action Queue</h4>
                    <div className="flex gap-2">
                        <button className="text-primary px-3 py-1.5 rounded-lg bg-surface-container text-xs font-semibold hover:bg-surface-container-high transition-colors">
                            All Types
                        </button>
                        <button className="px-3 py-1.5 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
                            Reviews Only
                        </button>
                        <button className="px-3 py-1.5 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
                            Listings Only
                        </button>
                    </div>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-2.5 py-1 rounded-full bg-error-container text-on-error-container text-[10px] font-bold uppercase tracking-tight text-primary">
                                    Review Flag
                                </span>
                                <span className="text-xs text-on-surface-variant font-medium flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">schedule</span>2 hours ago
                                </span>
                            </div>
                            <h5 className="font-bold text-on-surface mb-2">
                                "Absolute scam. The guide never showed up and the boat was leaking."
                            </h5>
                            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                                Reported for:
                                <span className="text-error font-semibold">Harassment / Misinformation</span>. Review
                                ID: #REV-90221. Against:
                                <a className="text-primary hover:underline" href="#">
                                    Sunset Amalfi Cruise
                                </a>
                                .
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    alt="Submitter"
                                    className="w-6 h-6 rounded-full object-cover shadow-sm"
                                    data-alt="Professional close-up headshot of a middle aged man with a clean beard and friendly expression in soft lighting"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbaJCWai7Xn64QQNa18VH12mpcrGeWOaAsTBy-nOA6RGc8LnHwLdb-r9s8_UStUPwlwNSdJFxvhDQt_3MZnJc09D-NRRwWdJ1AKhuTogtoMIu37mXg-JLBIphhiuZOwzINXx_jQRezZ8r3psSGMPdk4y7Z0Z2DmFueQFpfbBCyQAk1gJBI48Fr2-EkfhayorMQdSiDXc1IbINNBEezo-Dyv3PFYhqoonNdHi5NG8Zkaz9l0yVN1ybNr1SPTAwSBAx78vQMvITYEgfE"
                                />
                                <span className="text-xs font-medium">Marc J. (Silver Tier Member)</span>
                            </div>
                        </div>
                        <div className="lg:w-48 flex lg:flex-col justify-end gap-2">
                            <Button className="flex-1 py-2 px-4 text-xs font-bold shadow-sm hover:opacity-90">
                                <CheckCircle className="h-7 w-7" />
                                Approve
                            </Button>
                            <Button className="flex-1 py-2 px-4 text-xs font-bold hover:opacity-90 outline-0 bg-surface-container-high text-on-surface">
                                <X />
                                Delete
                            </Button>
                            <Button className="flex-1 py-2 px-4 text-on-surface-variant text-xs hover:opacity-90 bg-transparent hover:bg-slate-100 ">
                                Dismiss
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-20 flex flex-col items-center">
                <button className="px-8 py-3 rounded-full border border-outline-variant/30 text-on-surface font-semibold text-sm hover:bg-surface-container transition-all">
                    Load More Flagged Content
                </button>
                <p className="mt-4 text-xs text-on-surface-variant">Showing 3 of 124 pending items</p>
            </div>
        </div>
    );
}
