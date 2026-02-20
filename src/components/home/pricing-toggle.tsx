"use client";

import * as React from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PricingToggle() {
    const [audience, setAudience] = React.useState<"creator" | "brand">("creator");

    return (
        <div className="w-full max-w-5xl mx-auto">
            {/* Toggle */}
            <div className="flex justify-center mb-12">
                <div className="bg-white p-1 rounded-full border border-gray-200 shadow-sm inline-flex">
                    <button
                        onClick={() => setAudience("creator")}
                        className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${audience === "creator"
                            ? "bg-primary text-white shadow-md"
                            : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        For Creators
                    </button>
                    <button
                        onClick={() => setAudience("brand")}
                        className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${audience === "brand"
                            ? "bg-accent text-white shadow-md"
                            : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        For Brands
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {audience === "creator" ? (
                    <>
                        {/* Free Tier */}
                        <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-2xl font-heading">Free</CardTitle>
                                <CardDescription>Essential trust tools for every creator.</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold font-heading">₹0</span>
                                    <span className="text-muted-foreground"> / forever</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {[
                                        "Verified Profile",
                                        "Escrow Protection",
                                        "Trust Score",
                                        "Fraud Alerts",
                                        "Basic Deal Tracking",
                                    ].map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm">
                                            <Check className="w-4 h-4 text-green-500" />
                                            {feature}
                                        </li>
                                    ))}
                                    {[
                                        "Smart Pricing Intelligence",
                                        "Priority Payouts",
                                    ].map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground/50">
                                            <X className="w-4 h-4" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">Join Free</Button>
                            </CardFooter>
                        </Card>

                        {/* Pro Tier */}
                        <Card className="border-primary shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                FREE FOR NOW
                            </div>
                            <CardHeader className="bg-primary/5 pb-8">
                                <CardTitle className="text-2xl font-heading text-primary">Pro</CardTitle>
                                <CardDescription>Advanced growth and negotiation tools.</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold font-heading text-primary">₹0</span>
                                    <span className="text-muted-foreground"> / forever</span>
                                    <span className="ml-2 text-sm text-red-500 line-through">₹1,500</span>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <ul className="space-y-3">
                                    {[
                                        "Everything in Free",
                                        "Dedicated Account Support",
                                        "Market Pricing Data",
                                        "Priority Payouts",
                                        "Advanced Analytics & CRM",
                                        "Deal Pipeline Intelligence",
                                    ].map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm font-medium">
                                            <Check className="w-4 h-4 text-accent" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-primary hover:bg-primary/90">Get Pro Access</Button>
                            </CardFooter>
                        </Card>
                    </>
                ) : (
                    <>
                        {/* Brand Pricing */}
                        <Card className="md:col-span-2 border-border shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-6 md:p-8 space-y-6">
                                    <h3 className="text-2xl font-bold font-heading text-primary">Pay Per Deal</h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold font-heading">₹200</span>
                                        <span className="text-muted-foreground"> flat fee</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl text-muted-foreground">+</span>
                                        <span className="text-4xl font-bold font-heading text-accent">4%</span>
                                        <span className="text-muted-foreground"> of deal value</span>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Includes verification, escrow protection, contract generation, and dispute resolution.
                                    </p>
                                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                                        Protect My Campaign Budget
                                    </Button>
                                </div>

                                <div className="p-6 md:p-8 bg-surface border-l border-border">
                                    <h4 className="font-bold mb-4 font-heading">Compared to Traditional Agencies</h4>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-sm border-b border-border pb-2">
                                            <span className="text-muted-foreground">Commission</span>
                                            <div className="flex gap-4">
                                                <span className="text-red-500 font-medium line-through">15–30%</span>
                                                <span className="text-green-600 font-bold">4%</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center text-sm border-b border-border pb-2">
                                            <span className="text-muted-foreground">Verification</span>
                                            <div className="flex gap-4">
                                                <span className="text-red-500 line-through">Manual/None</span>
                                                <span className="text-green-600 font-bold">Automated & Scored</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center text-sm border-b border-border pb-2">
                                            <span className="text-muted-foreground">Payment Risk</span>
                                            <div className="flex gap-4">
                                                <span className="text-red-500 line-through">High</span>
                                                <span className="text-green-600 font-bold">Escrow Protected</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </>
                )}
            </div>
        </div>
    );
}
