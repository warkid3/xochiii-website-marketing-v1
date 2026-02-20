'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    CheckIcon,
    SparklesIcon,
    ShieldCheck,
    Wallet,
    Bot,
    Building2,
} from 'lucide-react';

/**
 * BentoPricing — Xochiii pricing grid in a bento layout.
 *
 * 4 tiers:
 *  - Creator Free (starter)
 *  - Creator Pro (featured/recommended, wide card)
 *  - Brands (per-deal pricing)
 *  - Enterprise (custom)
 *
 * @example
 *   <BentoPricing />
 */

/* ------------------------------------------------------------------ */
/* Reusable filled-check icon                                        */
/* ------------------------------------------------------------------ */
function FilledCheck() {
    return (
        <div className="bg-green-500 text-white rounded-full p-0.5 shrink-0">
            <CheckIcon className="size-3" strokeWidth={3} />
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Generic pricing card (used for smaller cards)                      */
/* ------------------------------------------------------------------ */
type PricingCardProps = {
    icon: React.ElementType;
    titleBadge: string;
    priceLabel: string;
    priceSuffix?: string;
    features: string[];
    cta?: string;
    ctaHref?: string;
    /** 'brand' = pink accent, 'creator' = blue accent, 'neutral' = white/grey */
    accentColor?: 'brand' | 'creator' | 'neutral';
    className?: string;
};

const accentStyles = {
    brand: {
        border: 'border-accent/30 hover:border-accent/60',
        badge: 'bg-accent/20 text-accent',
        price: 'text-accent',
    },
    creator: {
        border: 'border-secondary/30 hover:border-secondary/60',
        badge: 'bg-secondary/20 text-secondary',
        price: 'text-secondary',
    },
    neutral: {
        border: 'border-[#2b2f86]/50 hover:border-white/30',
        badge: 'bg-white/10 text-white',
        price: 'text-white/70',
    },
};

function PricingCard({
    icon: Icon,
    titleBadge,
    priceLabel,
    priceSuffix = '/month',
    features,
    cta = 'Join Waitlist',
    ctaHref = '/wishlist',
    accentColor = 'neutral',
    className,
}: PricingCardProps) {
    const colors = accentStyles[accentColor];
    return (
        <div
            className={cn(
                'bg-[#12143a] border relative overflow-hidden rounded-xl transition-all duration-300',
                colors.border,
                className
            )}
        >
            <div className="flex items-center gap-3 p-5">
                <Badge
                    variant="secondary"
                    className={cn('border-0 font-bold tracking-wider text-[11px]', colors.badge)}
                >
                    <Icon className="w-3 h-3 mr-1.5" />
                    {titleBadge}
                </Badge>
                <div className="ml-auto">
                    <a href={ctaHref}>
                        <Button
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                        >
                            {cta}
                        </Button>
                    </a>
                </div>
            </div>

            <div className="flex items-end gap-2 px-5 py-3">
                <span className="font-mono text-4xl md:text-5xl font-semibold tracking-tight text-white">
                    {priceLabel}
                </span>
                {priceLabel.toLowerCase() !== 'free' &&
                    priceLabel.toLowerCase() !== 'custom' && (
                        <span className="text-white/50 text-sm pb-1">
                            {priceSuffix}
                        </span>
                    )}
            </div>

            <ul className="grid gap-3.5 p-5 text-sm text-white/70">
                {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                        <FilledCheck />
                        <span>{f}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Main Bento Pricing component                                       */
/* ------------------------------------------------------------------ */
export function BentoPricing() {
    return (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-8">
            {/* ── Creator Pro — Wide featured card ────────────── */}
            <div
                className={cn(
                    'bg-[#12143a] border border-accent/30 relative w-full overflow-hidden rounded-xl',
                    'lg:col-span-5'
                )}
            >
                {/* Background pattern overlay */}
                <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                    <div className="from-accent/5 to-accent/2 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                        <div
                            aria-hidden="true"
                            className={cn(
                                'absolute inset-0 size-full mix-blend-overlay',
                                'bg-[linear-gradient(to_right,rgba(254,46,102,0.08)_1px,transparent_1px)]',
                                'bg-[size:24px]'
                            )}
                        />
                    </div>
                </div>

                {/* Header badges + CTA */}
                <div className="flex items-center gap-3 p-5 relative z-10">
                    <Badge
                        variant="secondary"
                        className="bg-accent/20 text-accent border-0 font-bold tracking-wider text-[11px]"
                    >
                        <Bot className="w-3 h-3 mr-1.5" />
                        CREATOR PRO
                    </Badge>
                    <Badge
                        variant="outline"
                        className="hidden lg:flex border-white/20 text-white/70"
                    >
                        <SparklesIcon className="mr-1 size-3 text-accent" />{' '}
                        Most Popular
                    </Badge>
                    <div className="ml-auto">
                        <a href="/wishlist">
                            <Button className="bg-accent hover:bg-accent/90 text-white shadow-[0_4px_16px_rgba(254,46,102,0.2)]">
                                Join Waitlist
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Price + Features in 2-column */}
                <div className="flex flex-col p-5 lg:flex-row relative z-10">
                    <div className="pb-4 lg:w-[35%]">
                        <div className="flex items-end gap-2">
                            <span className="font-mono text-4xl md:text-5xl font-semibold tracking-tight text-white">
                                ₹0
                            </span>
                            <span className="text-white/50 text-sm pb-1">
                                /month
                            </span>
                        </div>
                        <p className="text-xs text-accent mt-2 font-medium">
                            Early Access — Free during launch
                        </p>
                        <p className="text-[11px] text-white/40 mt-1">
                            Regular: ₹1,000 – ₹2,000/mo
                        </p>
                    </div>
                    <ul className="text-white/70 grid gap-3.5 text-sm lg:w-[65%]">
                        {[
                            <span key="theme" className="flex items-center gap-2 text-white font-medium">Custom theme for your Magic Profile <span className="text-[10px] font-bold uppercase tracking-wider bg-accent/20 text-accent border border-accent/30 px-1.5 py-0.5 rounded-full">New</span></span>,
                            <span key="apps" className="flex items-center gap-2 text-white font-medium">Connect apps to your Magic Profile <span className="text-[10px] font-bold uppercase tracking-wider bg-accent/20 text-accent border border-accent/30 px-1.5 py-0.5 rounded-full">New</span></span>,
                            'Priority payouts & enhanced protection',
                            'Advanced analytics & CRM automation',
                            <span key="ai" className="flex items-center gap-2 opacity-50">AI Account Manager (Creator Butler) <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded-full whitespace-nowrap">Coming Soon</span></span>,
                            <span key="nego" className="flex items-center gap-2 opacity-50">Automated deal negotiation & pricing intel <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded-full whitespace-nowrap">Coming Soon</span></span>,
                        ].map((f, i) => (
                            <li
                                key={i}
                                className="flex items-center gap-3"
                            >
                                <FilledCheck />
                                <span className="leading-relaxed">{f}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ── Creator Free — Starter ────────────────────── */}
            <PricingCard
                icon={ShieldCheck}
                titleBadge="CREATOR FREE"
                priceLabel="Free"
                accentColor="creator"
                features={[
                    'Verified profile & authenticity score',
                    'Escrow payment protection',
                    'Basic deal & payment tracking',
                    'Fraud alerts & trust score',
                    'Standard dispute protection',
                ]}
                className="lg:col-span-3"
            />

            {/* ── Brands — Per-Deal ─────────────────────────── */}
            <PricingCard
                icon={Wallet}
                titleBadge="FOR BRANDS"
                priceLabel="₹200"
                priceSuffix="flat + 4% per deal"
                accentColor="brand"
                features={[
                    'Escrow-secured payments',
                    'Creator authenticity scoring & search',
                    'Automated contracts & compliance',
                    'Campaign dashboard & unified inbox',
                    'GST-compliant invoicing',
                ]}
                cta="Get Started"
                className="lg:col-span-4"
            />

            {/* ── Enterprise — Custom ───────────────────────── */}
            <PricingCard
                icon={Building2}
                titleBadge="ENTERPRISE"
                priceLabel="Custom"
                features={[
                    'Volume-based pricing & dedicated support',
                    'Multi-team roles & approval workflows',
                    'White-label options & API access',
                    'Dedicated account management',
                ]}
                cta="Coming Soon"
                ctaHref="/wishlist"
                className="lg:col-span-4 opacity-50 pointer-events-none"
            />
        </div>
    );
}
