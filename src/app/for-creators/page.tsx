import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import {
    Wallet,
    CheckCircle,
    Shield,
    ArrowRight,
    FileText,
    Clock,
    Banknote,
    Bell,
    Upload,
    LinkIcon,
} from "lucide-react";

/**
 * For Creators page — dedicated landing for influencers and content creators.
 *
 * Sections:
 * 1. Hero with creator-specific value prop
 * 2. Pain Points (what creators suffer today)
 * 3. Platform Features (6-card grid)
 * 4. How It Works (creator flow)
 * 5. Financial Suite Preview
 * 6. CTA
 */

const painPoints = [
    { stat: "40%+", label: "of creators have been ghosted after delivering work" },
    { stat: "₹0", label: "legal recourse when a brand refuses to pay" },
    { stat: "15-30%", label: "of earnings lost to agency commissions" },
];

const features = [
    {
        icon: Wallet,
        title: "Guaranteed Payment",
        desc: "100% of the deal value is locked in escrow before you start. The money is always there.",
    },
    {
        icon: FileText,
        title: "Automated Contracts",
        desc: "Every deal comes with a legally binding contract. Deliverables, timelines, and payment terms — enforced automatically.",
    },
    {
        icon: Shield,
        title: "Dispute Resolution",
        desc: "Fair, structured arbitration if something goes wrong. You'll never be bullied out of your payment again.",
    },
    {
        icon: Clock,
        title: "72-Hour Auto-Release",
        desc: "If a brand doesn't review your delivery within 72 hours, funds are automatically released to you. Fairness built in.",
    },
    {
        icon: Banknote,
        title: "Instant Payouts",
        desc: "Withdraw earnings instantly to your bank account or UPI. No more waiting for brand payment cycles.",
    },
    {
        icon: LinkIcon,
        title: "Professional Profile Link",
        desc: "Your public profile with verified stats, portfolio, services, and rate card. One link for all brand inquiries.",
    },
];

const creatorFlow = [
    {
        step: "01",
        title: "Receive",
        desc: "Get notified via WhatsApp/Email when a brand sends you a deal. View full project details, deliverables, and payment amount.",
    },
    {
        step: "02",
        title: "Create",
        desc: "Accept the deal — escrow is already funded. Focus entirely on creating great content without payment anxiety.",
    },
    {
        step: "03",
        title: "Get Paid",
        desc: "Submit deliverables through the Vault. Brand approves and payment is released instantly — or auto-released in 72 hours.",
    },
];

const financeFeatures = [
    {
        icon: Banknote,
        title: "Earnings Dashboard",
        desc: "Track available balance, pending clearance, and full payout history with transaction IDs.",
    },
    {
        icon: Bell,
        title: "Lead Notifications",
        desc: "Instant WhatsApp + email alerts for new deal requests. Never miss a lead again.",
    },
    {
        icon: Upload,
        title: "Deliverable Vault",
        desc: "Upload drafts, finals, and revisions. Full versioning (V1, V2, Final) with brand feedback inline.",
    },
];

export default function ForCreatorsPage() {
    return (
        <main className="min-h-screen bg-[#070815] text-[#e2e0f0] font-sans selection:bg-secondary selection:text-white">
            <Navbar />

            {/* ====== HERO ====== */}
            <section className="pt-32 pb-32 relative overflow-hidden flex items-center min-h-[80vh]">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-[center_top] bg-no-repeat opacity-60"
                    style={{ backgroundImage: 'url("/influncer-hero.jpeg")' }}
                />
                {/* Dark overlays for readability and fading */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#070815]/95 via-[#070815]/60 to-transparent z-0 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070815]/20 to-[#070815] z-0 pointer-events-none" />

                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/30 blur-[120px] pointer-events-none z-0" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center lg:text-left flex flex-col items-center lg:items-start">
                    <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-[2px] px-3 py-1.5 rounded-full border border-secondary/50 bg-secondary/20 text-secondary mb-6 backdrop-blur-md">
                        For Creators
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 max-w-4xl leading-tight text-shadow-sm">
                        Get Paid.{" "}
                        <span className="wavy-underline">Every</span> Time.
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-md">
                        No more chasing invoices. Xochiii locks 100% of the
                        payment in escrow before you lift a finger — so you can
                        focus on creating, not collecting.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/wishlist">
                            <button className="inline-flex items-center justify-center font-medium rounded-lg bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg shadow-[0_4px_16px_rgba(76,93,201,0.2)] hover:shadow-[0_6px_24px_rgba(76,93,201,0.3)] hover:scale-[1.02] transition-all">
                                Secure My Payments — Free
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </Link>
                        <Link href="/pricing">
                            <button className="inline-flex items-center justify-center font-medium rounded-lg border border-white/30 hover:border-white/60 text-white px-8 py-4 text-lg backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all shadow-lg">
                                View Pro Features
                            </button>
                        </Link>
                    </div>
                    <p className="mt-8 text-[13px] text-white flex flex-wrap justify-center lg:justify-start gap-6 font-medium">
                        <span className="flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full bg-[#070815]/60 border border-white/10 shadow-sm">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            Free forever on Starter
                        </span>
                        <span className="flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full bg-[#070815]/60 border border-white/10 shadow-sm">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            No commission on earnings
                        </span>
                        <span className="flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full bg-[#070815]/60 border border-white/10 shadow-sm">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            Setup in 2 minutes
                        </span>
                    </p>
                </div>
            </section>

            {/* ====== PAIN POINTS ====== */}
            <section className="py-16 bg-[#12143a] border-y border-[#2b2f86]/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {painPoints.map((item, i) => (
                            <div key={i}>
                                <div className="text-3xl md:text-5xl font-heading font-bold text-secondary mb-2">
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
                            Creator Tools
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                            Everything You Need to <br />
                            Run Your Creator Business
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((item, i) => (
                            <div
                                key={i}
                                className="bg-[#12143a] border border-[#2b2f86]/50 rounded-xl p-8 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-[0_8px_32px_rgba(76,93,201,0.25)] transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30 text-secondary mb-6">
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
                            Creator Workflow
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                            From Lead to Payment in Three Steps
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {creatorFlow.map((item, i) => (
                            <div key={i} className="relative">
                                <div className="absolute -top-8 -left-4 text-8xl font-heading font-bold text-white/[0.03] select-none pointer-events-none">
                                    {item.step}
                                </div>
                                <div className="w-12 h-12 rounded-full bg-[#12143a] border-2 border-secondary flex items-center justify-center font-mono font-bold text-white text-lg mb-6 shadow-[0_0_20px_rgba(76,93,201,0.3)]">
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

            {/* ====== FINANCIAL SUITE ====== */}
            <section className="py-24 bg-[#0a0c1a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary mb-4">
                            Financial Suite
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Your Money, Fully Under Control
                        </h2>
                        <p className="text-white/60 max-w-xl mx-auto">
                            Auto-invoicing, instant payouts, and full earnings
                            visibility — built for creators who treat this as a
                            business.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {financeFeatures.map((item, i) => (
                            <div
                                key={i}
                                className="bg-[#12143a] border border-[#2b2f86]/50 rounded-xl p-8 text-center"
                            >
                                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-6">
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
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Your Work Has Value. <br />
                        It&apos;s Time to Protect It.
                    </h2>
                    <p className="text-lg text-white/70 mb-10">
                        Join thousands of creators who&apos;ve stopped hoping
                        for payment and started guaranteeing it.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/wishlist">
                            <button className="inline-flex items-center justify-center font-medium rounded-lg bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg shadow-[0_4px_16px_rgba(76,93,201,0.2)] hover:shadow-[0_6px_24px_rgba(76,93,201,0.3)] hover:scale-[1.02] transition-all">
                                Join as a Creator — It&apos;s Free
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </Link>
                    </div>
                    <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-white/50">
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                            Free Starter tier forever
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                            Pro plan currently free (₹0)
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                            No commission on your earnings
                        </span>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
