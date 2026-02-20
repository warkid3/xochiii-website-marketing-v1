"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Linkedin,
    Twitter,
    Mail,
    Target,
    Compass,
    Lock,
    ShieldCheck,
    FileText,
    Scale,
    Activity,
    User
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { HTMLMotionProps } from "framer-motion";

const fadeInUps: HTMLMotionProps<"div" | "h2" | "p"> = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#09090f] text-[#fbf8f9] font-sans selection:bg-accent/30 overflow-x-hidden">
            <Navbar />

            {/* Noise Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04] mix-blend-overlay">
                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>
            </div>

            {/* ─── HERO ─── */}
            <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-[8vw] py-20 overflow-hidden">
                {/* Animated Glows */}
                <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-[radial-gradient(circle_at_center,rgba(43,47,134,0.45)_0%,rgba(254,46,102,0.08)_50%,transparent_70%)] pointer-events-none animate-pulse-slow" />
                <div className="absolute -bottom-[30%] -left-[15%] w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(76,93,201,0.2)_0%,transparent_65%)] pointer-events-none animate-pulse-slow reverse" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center gap-3 mb-10"
                >
                    <div className="w-8 h-[1px] bg-accent" />
                    <span className="text-[0.72rem] tracking-[0.22em] uppercase text-accent font-mono">Our Story</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.35 }}
                    className="font-heading font-extrabold text-[2.8rem] md:text-[5rem] lg:text-[7rem] leading-[1] tracking-tight max-w-[14ch]"
                >
                    We're Building the Trust Layer the Creator Economy Was <span className="text-transparent border-primary-light [-webkit-text-stroke:1.5px_theme(colors.primary.light)] font-normal">Missing.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.5 }}
                    className="mt-8 text-lg md:text-xl text-[#9898b8] max-w-[52ch] font-light leading-relaxed"
                >
                    The creator economy generates billions in value — but operates on handshakes, DMs, and hope. We built the infrastructure to change that.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.65 }}
                    className="mt-14 inline-flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full bg-[#2b2f86]/10 backdrop-blur-xl w-fit"
                >
                    <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_theme(colors.accent)] animate-pulse" />
                    <span className="text-[0.82rem] text-[#9898b8]">Making fraud economically unsustainable since day one</span>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-12 left-6 md:left-[8vw] flex items-center gap-3 text-[0.72rem] tracking-[0.18em] uppercase text-[#6b6b8a]"
                >
                    <div className="w-10 h-[1px] bg-gradient-to-r from-primary-light to-transparent" />
                    <span>Scroll to explore</span>
                </motion.div>
            </section>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* ─── STORY ─── */}
            <section className="bg-[#0e0e1a] border-y border-white/5 py-32 px-6 md:px-[8vw]">
                <div className="flex items-center gap-2 mb-12">
                    <span className="text-[0.7rem] tracking-[0.25em] uppercase text-accent font-mono">Background</span>
                    <div className="w-10 h-px bg-accent/50" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    <div className="lg:sticky lg:top-32 h-fit">
                        <motion.h2 {...fadeInUps} className="font-heading font-bold text-3xl md:text-5xl leading-[1.15] tracking-tight">
                            A broken system<br />needed<br /><span className="text-primary-light">new rules.</span>
                        </motion.h2>
                    </div>

                    <div className="space-y-8">
                        <motion.p {...fadeInUps} transition={{ delay: 0.1 }} className="text-[#9898b8] text-lg leading-relaxed font-light">
                            Creators get ghosted after delivery. Brands lose budget to fake audiences. Agencies take their cut and add opacity. The ecosystem was generating billions — but built on fragile, informal trust.
                        </motion.p>
                        <motion.p {...fadeInUps} transition={{ delay: 0.2 }} className="text-[#9898b8] text-lg leading-relaxed font-light">
                            We saw an infrastructure gap. Not a product gap — an infrastructure gap. The rails that should underpin every creator–brand collaboration simply didn't exist. So we built them.
                        </motion.p>
                        <motion.p {...fadeInUps} transition={{ delay: 0.3 }} className="text-[#9898b8] text-lg leading-relaxed font-light">
                            Creator Trust Infrastructure isn't a platform. It's the foundational layer that makes reliable collaboration the default — not the exception.
                        </motion.p>

                        <motion.div {...fadeInUps} transition={{ delay: 0.4 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
                            <div>
                                <span className="block font-mono font-extrabold text-4xl text-white tracking-tighter">$<span className="text-accent">250</span>B+</span>
                                <span className="block text-[0.78rem] text-[#6b6b8a] tracking-wider mt-1">Global creator economy value</span>
                            </div>
                            <div>
                                <span className="block font-mono font-extrabold text-4xl text-white tracking-tighter"><span className="text-accent">1</span>/3</span>
                                <span className="block text-[0.78rem] text-[#6b6b8a] tracking-wider mt-1">Collaborations end in dispute</span>
                            </div>
                            <div>
                                <span className="block font-mono font-extrabold text-4xl text-white tracking-tighter text-accent">0</span>
                                <span className="block text-[0.78rem] text-[#6b6b8a] tracking-wider mt-1">Enforceable deal standards</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── MISSION / VISION ─── */}
            <section className="py-32 px-6 md:px-[8vw] bg-[#09090f]">
                <div className="flex items-center gap-2 mb-12">
                    <span className="text-[0.7rem] tracking-[0.25em] uppercase text-accent font-mono">What Drives Us</span>
                    <div className="w-10 h-px bg-accent/50" />
                </div>

                <motion.div {...fadeInUps} className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
                    <div className="bg-[#111120] p-10 md:p-14 group transition-colors hover:bg-white/5 relative">
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-primary via-primary-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-11 h-11 rounded-xl bg-primary/30 border border-primary-light/30 flex items-center justify-center text-xl mb-7">🎯</div>
                        <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#6b6b8a] font-mono mb-3 block">Our Mission</span>
                        <h3 className="font-heading font-bold text-2xl mb-4 text-white">Embed trust into every transaction.</h3>
                        <p className="text-[#9898b8] text-[0.95rem] leading-relaxed font-light">To embed trust directly into every creator–brand transaction — making fraud economically unsustainable and reliable collaboration the default.</p>
                    </div>
                    <div className="bg-[#111120] p-10 md:p-14 group transition-colors hover:bg-white/5 relative md:border-l border-white/10">
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-primary via-primary-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-11 h-11 rounded-xl bg-primary/30 border border-primary-light/30 flex items-center justify-center text-xl mb-7">🔭</div>
                        <span className="text-[0.68rem] tracking-[0.22em] uppercase text-[#6b6b8a] font-mono mb-3 block">Our Vision</span>
                        <h3 className="font-heading font-bold text-2xl mb-4 text-white">The foundational layer for the economy.</h3>
                        <p className="text-[#9898b8] text-[0.95rem] leading-relaxed font-light">Where collaborations are safe, payments are secure, and reputation is earned — not assumed. The infrastructure that powers a new era.</p>
                    </div>
                </motion.div>
            </section>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* ─── PRINCIPLES ─── */}
            <section className="py-32 px-6 md:px-[8vw] bg-[#09090f]">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-16 items-end mb-20">
                    <motion.div {...fadeInUps}>
                        <div className="flex items-center gap-2 mb-5">
                            <span className="text-[0.7rem] tracking-[0.25em] uppercase text-accent font-mono">Core Principles</span>
                            <div className="w-10 h-px bg-accent/50" />
                        </div>
                        <h2 className="font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">The rules that define us.</h2>
                    </motion.div>
                    <motion.p {...fadeInUps} transition={{ delay: 0.2 }} className="text-[#9898b8] text-lg leading-relaxed font-light border-l-2 border-white/10 pl-8">
                        These aren't values on a wall. They're the active constraints baked into every feature we ship, every deal we structure, and every dispute we adjudicate. Infrastructure has rules. So do we.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[1.5px] bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                    {[
                        { num: "01", icon: <Lock className="w-6 h-6 text-accent" />, title: "Payment-First Safety", text: "Funds secured before work begins. Always. Non-negotiable.", tag: "Core" },
                        { num: "02", icon: <ShieldCheck className="w-6 h-6 text-accent" />, title: "Verified Authenticity", text: "Audience-backed signals, not vanity metrics. What's real matters.", tag: "Signal" },
                        { num: "03", icon: <FileText className="w-6 h-6 text-accent" />, title: "Structured Lifecycle", text: "Clear, trackable, and enforceable agreements. Every stage visible.", tag: "Process" },
                        { num: "04", icon: <Scale className="w-6 h-6 text-accent" />, title: "Evidence-Based", text: "Fair, rule-driven enforcement. No he-said-she-said — just facts.", tag: "Fair" },
                        { num: "05", icon: <Activity className="w-6 h-6 text-accent" />, title: "Transparent Risk", text: "Informed decisions for both sides. Risk surfaced early.", tag: "Clarity" },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            {...fadeInUps}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#111120] p-10 flex flex-col group hover:bg-[#13132a] transition-colors h-full"
                        >
                            <div className="font-mono font-extrabold text-[3rem] text-primary/25 leading-none mb-8 tracking-tighter transition-colors group-hover:text-primary-light/40">{item.num}</div>
                            <div className="mb-4">{item.icon}</div>
                            <h4 className="font-heading font-bold text-[0.95rem] mb-3 text-white leading-tight">{item.title}</h4>
                            <p className="text-[0.8rem] text-[#6b6b8a] leading-relaxed mb-auto">{item.text}</p>
                            <span className="mt-8 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-[0.65rem] tracking-widest uppercase px-3 py-1 rounded-full border border-accent/25 text-accent w-fit">{item.tag}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* ─── FOUNDER ─── */}
            <section className="bg-[#0e0e1a] border-y border-white/5 py-32 px-6 md:px-[8vw]">
                <div className="flex items-center gap-2 mb-12">
                    <span className="text-[0.7rem] tracking-[0.25em] uppercase text-accent font-mono">The Person Behind It</span>
                    <div className="w-10 h-px bg-accent/50" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    <motion.div {...fadeInUps} className="relative group max-w-[530px] mx-auto md:mx-0 h-full">
                        <div className="h-full rounded-3xl bg-gradient-to-br from-[#0e0e1e] to-[#13132a] border border-white/10 overflow-hidden relative shadow-2xl min-h-[400px]">
                            <Image
                                src="/HarshTambe_Photo.jpeg"
                                alt="Harsh Tambe"
                                fill
                                className="object-cover"
                                priority
                            />

                            <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 pr-6">
                                <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_theme(colors.accent)]" />
                                <div className="font-mono text-[0.62rem] tracking-tight leading-tight uppercase">
                                    <strong className="block text-white text-sm mb-1 font-heading font-semibold tracking-normal uppercase">Harsh Tambe</strong>
                                    Founder & CEO · KIAGS
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary to-primary-light rounded-2xl -z-10 opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />
                        <div className="absolute -top-[10px] -left-[10px] w-14 h-14 border border-accent/30 rounded-xl -z-10" />
                    </motion.div>

                    <div>
                        <motion.h2 {...fadeInUps} className="font-heading font-extrabold text-[2.5rem] md:text-[4rem] leading-none tracking-tight mb-2">Harsh<br />Tambe.</motion.h2>
                        <div className="flex items-center gap-2 text-accent text-[0.72rem] tracking-[0.2rem] uppercase font-mono mb-10">
                            Founder & CEO — KIAGS
                            <div className="w-10 h-px bg-accent/40" />
                        </div>

                        <div className="space-y-6 text-[#9898b8] leading-relaxed font-light text-[1.05rem]">
                            <motion.p {...fadeInUps} transition={{ delay: 0.1 }}>
                                Harsh didn't set out to build a company. He set out to fix something <strong className="text-white font-medium">genuinely broken.</strong> After watching creators pour their hearts into brand collaborations — only to get ghosted or underpaid — he knew the problem was the absence of infrastructure.
                            </motion.p>
                            <motion.p {...fadeInUps} transition={{ delay: 0.2 }}>
                                So he built it. Under the banner of <strong className="text-white font-medium">KIAGS (Klover Interactive Arts & Gametech Solutions)</strong>, Harsh has been quietly architecting the trust rails the creator economy should have had from day one.
                            </motion.p>
                            <motion.p {...fadeInUps} transition={{ delay: 0.3 }}>
                                His conviction is simple: <strong className="text-white font-medium">trust shouldn't be a premium feature.</strong> It should be the default for all.
                            </motion.p>
                        </div>

                        <motion.div {...fadeInUps} transition={{ delay: 0.4 }} className="mt-10 p-8 border-l-2 border-primary-light bg-primary/5 rounded-r-2xl italic font-heading text-white/90 text-lg md:text-xl">
                            "The creator economy doesn't have a talent problem or a demand problem. It has a trust problem. And trust problems are infrastructure problems in disguise."
                        </motion.div>

                        <motion.div {...fadeInUps} transition={{ delay: 0.5 }} className="flex gap-4 mt-10">
                            <Button variant="outline" size="sm" className="bg-transparent border-white/10 text-[#9898b8] hover:text-white hover:bg-primary/10 gap-2">
                                <Linkedin size={14} /> LinkedIn
                            </Button>
                            <Button variant="outline" size="sm" className="bg-transparent border-white/10 text-[#9898b8] hover:text-white hover:bg-primary/10 gap-2">
                                <Twitter size={14} /> X
                            </Button>
                            <Button variant="outline" size="sm" className="bg-transparent border-white/10 text-[#9898b8] hover:text-white hover:bg-primary/10 gap-2">
                                <Mail size={14} /> Get in touch
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="relative overflow-hidden py-40 px-6 md:px-[8vw] bg-[#0e0e1a] text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-[radial-gradient(ellipse,rgba(43,47,134,0.35)_0%,transparent_70%)] pointer-events-none" />

                <motion.h2 {...fadeInUps} className="font-heading font-extrabold text-[2.5rem] md:text-[5rem] tracking-tight leading-[1.05] relative z-10">
                    Ready to build on<br />solid ground?
                </motion.h2>
                <motion.p {...fadeInUps} transition={{ delay: 0.1 }} className="mt-6 mb-12 text-[#9898b8] text-lg max-w-[48ch] mx-auto relative z-10 leading-relaxed font-light">
                    Join the creators and brands who've decided that trust shouldn't be a luxury — it should be the default.
                </motion.p>

                <motion.div {...fadeInUps} transition={{ delay: 0.2 }} className="flex flex-wrap gap-4 justify-center relative z-10">
                    <Link href="/wishlist">
                        <Button className="bg-gradient-to-r from-primary to-primary-light text-white border-0 h-14 px-10 rounded-xl font-medium shadow-[0_0_30px_rgba(43,47,134,0.4)] hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(76,93,201,0.5)] transition-all">
                            Get Early Access <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                    <Link href="/#how-it-works">
                        <Button variant="outline" className="h-14 px-10 rounded-xl border-white/10 bg-transparent text-[#9898b8] hover:text-white hover:border-primary-light transition-all">
                            Learn How It Works
                        </Button>
                    </Link>
                </motion.div>
            </section>

            {/* ─── ATTRIBUTION STRIP ─── */}
            <div className="bg-[#07070f] border-t border-white/10 py-10 px-6 md:px-[8vw] flex flex-wrap items-center justify-between gap-6">
                <div className="flex flex-col gap-1">
                    <span className="font-mono text-[0.62rem] tracking-[0.22em] uppercase text-[#6b6b8a]">A sub-brand of</span>
                    <div className="flex items-center gap-1">
                        <span className="font-heading font-extrabold text-lg tracking-tight text-[#4c5dc9]">KIAGS.</span>
                        <div className="w-px h-4 bg-white/10 mx-3" />
                        <span className="text-[0.65rem] text-[#6b6b8a] font-light tracking-wide max-w-[30ch]">Klover Interactive Arts & Gametech Solutions Pvt Ltd</span>
                    </div>
                </div>

                <div className="font-mono text-[0.62rem] text-[#6b6b8a] tracking-widest text-right leading-relaxed">
                    <span className="block text-accent text-[0.7rem] mb-1 font-bold">Xochiii.</span>
                    &copy; 2026 Klover Interactive Arts & Gametech Solutions Pvt Ltd.
                </div>
            </div>

            <Footer />
        </main>
    );
}
