import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * Dual Benefits section — full-width split screen.
 *
 * Left half: "For Brands" value proposition (darker bg).
 * Right half: "For Creators" value proposition (surface bg + glow).
 * Each side has a checkmark bullet list and a CTA link.
 */

const brandBenefits = [
    "Access platform-verified creators only",
    "Escrow payments — released on verified delivery",
    "Automated contracts, invoices & tax compliance",
    "Fraud-risk detection before committing budget",
];

const creatorBenefits = [
    "Guaranteed payment protection via Escrow",
    "Smart pricing intelligence & market data",
    "Automated legal docs & priority payouts",
    "Dedicated account support & deal tracking",
];

export function DualBenefits() {
    return (
        <section className="flex flex-col md:flex-row min-h-[600px]">
            {/* Brands Side */}
            <div className="flex-1 bg-[#0a0c1a] p-12 md:p-24 flex justify-end">
                <div className="max-w-lg w-full">
                    <span className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">
                        For Brands
                    </span>
                    <h2 className="text-3xl md:text-4xl text-white font-heading font-bold mb-8">
                        Stop Paying for <br />
                        Uncertainty
                    </h2>
                    <ul className="space-y-4 mb-10">
                        {brandBenefits.map((text, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-white/70">{text}</span>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="/for-brands"
                        className="text-accent font-medium hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                        Protect My Campaign Budget
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Creators Side */}
            <div className="flex-1 bg-[#12143a] p-12 md:p-24 flex justify-start relative overflow-hidden">
                {/* Subtle Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[80px] pointer-events-none" />

                <div className="max-w-lg w-full relative z-10">
                    <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">
                        For Creators
                    </span>
                    <h2 className="text-3xl md:text-4xl text-white font-heading font-bold mb-8">
                        Get Paid.
                        <br />
                        Every Time.
                    </h2>
                    <ul className="space-y-4 mb-10">
                        {creatorBenefits.map((text, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-3"
                            >
                                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                <span className="text-white/70">{text}</span>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="/for-creators"
                        className="text-white font-medium hover:text-secondary transition-colors inline-flex items-center gap-2"
                    >
                        Secure My Payments
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
