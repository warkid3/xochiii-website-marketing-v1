import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import {
    ShieldCheck,
    TrendingUp,
    Lock,
    Search,
    FileText,
    Wallet,
    Users,
    ArrowRight,
    CheckCircle,
    LayoutDashboard,
    MessagesSquare,
    ClipboardCheck,
} from "lucide-react";

/**
 * For Brands page — dedicated landing for brand managers & agencies.
 *
 * Sections:
 * 1. Hero with brand-specific value prop
 * 2. Pain Points (what brands suffer today)
 * 3. Platform Features (6-card grid)
 * 4. How It Works (brand flow)
 * 5. Brand Studio Preview
 * 6. CTA
 */

const painPoints = [
    {
        stat: "68%",
        label: "of influencer budgets are wasted on unverified creators",
    },
    { stat: "₹0", label: "recovery when a creator ghosts after payment" },
    {
        stat: "3-4 weeks",
        label: "average time to manually vet one creator",
    },
];

const features = [
    {
        icon: ShieldCheck,
        title: "Escrow Protection",
        desc: "Funds locked before work begins. Released only on verified delivery. Zero risk of non-delivery.",
    },
    {
        icon: TrendingUp,
        title: "Authenticity Scoring",
        desc: "Every creator is scored on real engagement, audience quality, and past performance — not vanity metrics.",
    },
    {
        icon: FileText,
        title: "Automated Contracts",
        desc: "Standardized legal contracts embedded in every deal. Deliverables, timelines, and payment terms — all enforced.",
    },
    {
        icon: Search,
        title: "Trust Search™",
        desc: "Find creators by authenticity score, niche, turnaround time, and verified portfolio — not just follower count.",
    },
    {
        icon: Wallet,
        title: "Financial Control",
        desc: "Campaign-level spend tracking, GST-compliant invoicing, and one-click invoice downloads for your finance team.",
    },
    {
        icon: Users,
        title: "Team Collaboration",
        desc: "Invite your team with role-based access: Owner, Manager, and Viewer roles with approval workflows.",
    },
];

const brandFlow = [
    {
        step: "01",
        title: "Discover",
        desc: "Search verified creators by niche, authenticity score, and content quality. Send bulk inquiries.",
    },
    {
        step: "02",
        title: "Secure",
        desc: "Fund escrow before the creator starts. Your budget is locked and protected until delivery.",
    },
    {
        step: "03",
        title: "Review",
        desc: "Receive deliverables in the Review Hub. Annotate, request revisions, or approve and release payment — one click.",
    },
];

const studioFeatures = [
    {
        icon: LayoutDashboard,
        title: "Campaign Dashboard",
        desc: "Kanban view of all deals: Shortlisted → Contacted → Hired → Completed. Full visibility at a glance.",
    },
    {
        icon: MessagesSquare,
        title: "Unified Inbox",
        desc: "All creator conversations in one thread. Filter by campaign, status, or urgency. Add internal notes.",
    },
    {
        icon: ClipboardCheck,
        title: "Review Queue",
        desc: "Drag-and-drop file review with timestamped feedback, version tracking, and auto-release safeguards.",
    },
];

export default function ForBrandsPage() {
    return (
        <main className="min-h-screen bg-[#070815] text-[#e2e0f0] font-sans selection:bg-accent selection:text-white">
            <Navbar />

            {/* ====== HERO ====== */}
            <section className="pt-32 pb-32 relative overflow-hidden flex items-center min-h-[80vh]">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-[center_top] bg-no-repeat opacity-60"
                    style={{ backgroundImage: 'url("/brand-hero.jpeg")' }}
                />
                {/* Dark overlays for readability and fading */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#070815]/95 via-[#070815]/60 to-transparent z-0 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070815]/20 to-[#070815] z-0 pointer-events-none" />

                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/30 blur-[120px] pointer-events-none z-0" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center lg:text-left flex flex-col items-center lg:items-start">
                    <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-[2px] px-3 py-1.5 rounded-full border border-accent/50 bg-accent/20 text-accent mb-6 backdrop-blur-md">
                        For Brands & Agencies
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 max-w-4xl leading-tight text-shadow-sm">
                        Stop Burning Budget on{" "}
                        <span className="wavy-underline">Unverified</span>{" "}
                        Creators.
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-md">
                        Escrow-secured payments, authenticity-scored creators,
                        and structured deal enforcement — so every rupee of your
                        marketing spend yields verified results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/wishlist">
                            <button className="inline-flex items-center justify-center font-medium rounded-lg bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg shadow-[0_4px_16px_rgba(254,46,102,0.2)] hover:shadow-[0_6px_24px_rgba(254,46,102,0.3)] hover:scale-[1.02] transition-all">
                                Protect My Campaign Budget
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </Link>
                        <Link href="/pricing">
                            <button className="inline-flex items-center justify-center font-medium rounded-lg border border-white/30 hover:border-white/60 text-white px-8 py-4 text-lg backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all shadow-lg">
                                View Pricing
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ====== PAIN POINTS ====== */}
            <section className="py-16 bg-[#12143a] border-y border-[#2b2f86]/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {painPoints.map((item, i) => (
                            <div key={i}>
                                <div className="text-3xl md:text-5xl font-heading font-bold text-accent mb-2">
                                    {item.stat}
                                </div>
                                <p className="text-sm text-white/60">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== FEATURES ====== */}
            <section className="py-24 bg-[#0a0c1a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full border border-white/20 bg-white/5 text-white/70 mb-4">
                            Platform Features
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                            Everything You Need to <br />
                            Run Campaigns with Confidence
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((item, i) => (
                            <div
                                key={i}
                                className="bg-[#12143a] border border-[#2b2f86]/50 rounded-xl p-8 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-[0_8px_32px_rgba(43,47,134,0.3)] transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#2b2f86]/30 flex items-center justify-center border border-secondary/30 text-secondary mb-6">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-heading font-semibold text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-white/60 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== HOW IT WORKS ====== */}
            <section className="py-24 bg-[#070815] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full border border-white/20 bg-white/5 text-white/70 mb-4">
                            Brand Workflow
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                            Three Steps to Protected Campaigns
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {brandFlow.map((item, i) => (
                            <div key={i} className="relative">
                                <div className="absolute -top-8 -left-4 text-8xl font-heading font-bold text-white/[0.03] select-none pointer-events-none">
                                    {item.step}
                                </div>
                                <div className="w-12 h-12 rounded-full bg-[#12143a] border-2 border-accent flex items-center justify-center font-mono font-bold text-white text-lg mb-6 shadow-[0_0_20px_rgba(254,46,102,0.25)]">
                                    {i + 1}
                                </div>
                                <h3 className="text-2xl font-heading font-semibold text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-white/60 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== BRAND STUDIO PREVIEW ====== */}
            <section className="py-24 bg-[#0a0c1a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full border border-accent/20 bg-accent/10 text-accent mb-4">
                            Brand Studio
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Your Campaign Command Center
                        </h2>
                        <p className="text-white/60 max-w-xl mx-auto">
                            Manage creators, review deliverables, and control
                            spend — all from one dashboard.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {studioFeatures.map((item, i) => (
                            <div
                                key={i}
                                className="bg-[#12143a] border border-[#2b2f86]/50 rounded-xl p-8 text-center"
                            >
                                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-heading font-semibold text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== CTA ====== */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#2b2f86] to-[#070815]">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Your Marketing Budget Deserves Protection.
                    </h2>
                    <p className="text-lg text-white/70 mb-10">
                        Join the waitlist and be among the first brands to run
                        campaigns on trust infrastructure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/wishlist">
                            <button className="inline-flex items-center justify-center font-medium rounded-lg bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg shadow-[0_4px_16px_rgba(254,46,102,0.2)] hover:shadow-[0_6px_24px_rgba(254,46,102,0.3)] hover:scale-[1.02] transition-all">
                                Join Waitlist
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </Link>
                    </div>
                    <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-white/50">
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                            ₹200 flat + 4% per deal
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                            No upfront commitment
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                            Setup in 5 minutes
                        </span>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
