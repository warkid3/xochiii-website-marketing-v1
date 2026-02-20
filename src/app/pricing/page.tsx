import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BentoPricing } from "@/components/ui/bento-pricing";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

/**
 * Pricing page — Bento grid layout with Xochiii's 4-tier pricing.
 *
 * Sections:
 * 1. Hero (headline + subtext + dots bg)
 * 2. BentoPricing grid
 * 3. FAQ-style trust signals
 * 4. CTA
 */

const trustSignals = [
    {
        question: "What does the 4% cover?",
        answer: "Escrow infrastructure, creator verification, contract enforcement, GST-compliant invoicing, and dispute resolution. Compare that to 15–30% agency commissions.",
    },
    {
        question: "Is the Creator Free tier actually free?",
        answer: "Yes, permanently. Verified profile, escrow protection, and basic deal tracking — no hidden fees, no commission on your earnings.",
    },
    {
        question: "Why is Pro currently ₹0?",
        answer: "We're in early access. All Pro features (AI Butler, priority payouts, advanced analytics) are free during launch. Lock in your account now.",
    },
    {
        question: "Can I cancel anytime?",
        answer: "Yes. No lock-in contracts, no cancellation fees. Your deals and earnings are always accessible.",
    },
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-[#070815] text-[#e2e0f0] font-sans selection:bg-accent selection:text-white">
            <Navbar />

            {/* ====== HERO ====== */}
            <section className="pt-28 pb-6 relative overflow-hidden">
                {/* Dots background */}
                <div
                    aria-hidden="true"
                    className={cn(
                        "absolute inset-0 -z-10 size-full opacity-30",
                        "bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)]",
                        "bg-[size:12px_12px]"
                    )}
                />
                {/* Gradient blob */}
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-[2px] px-3 py-1.5 rounded-full border border-accent/20 bg-accent/10 text-accent mb-6">
                        Pricing
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                        Pricing That Pays for Itself
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-4">
                        Creators join free. Brands pay only when deals close.
                        Everyone wins.
                    </p>
                </div>
            </section>

            {/* ====== BENTO GRID ====== */}
            <section className="py-12 relative z-10">
                <div className="max-w-5xl mx-auto px-6">
                    <BentoPricing />
                </div>
            </section>

            {/* ====== FAQ / TRUST SIGNALS ====== */}
            <section className="py-24 bg-[#0a0c1a]">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full border border-white/20 bg-white/5 text-white/70 mb-4">
                            Common Questions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                            No Hidden Fees. No Surprises.
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {trustSignals.map((item, i) => (
                            <div
                                key={i}
                                className="bg-[#12143a] border border-[#2b2f86]/50 rounded-xl p-6"
                            >
                                <h3 className="font-heading font-semibold text-white text-lg mb-2">
                                    {item.question}
                                </h3>
                                <p className="text-white/60 leading-relaxed text-sm">
                                    {item.answer}
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
                        Start Building on Trust.
                    </h2>
                    <p className="text-lg text-white/70 mb-10">
                        Join the waitlist and lock in early-access pricing
                        before we launch publicly.
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
                            No setup fees
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                            Escrow-protected from day one
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                            Cancel anytime
                        </span>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
