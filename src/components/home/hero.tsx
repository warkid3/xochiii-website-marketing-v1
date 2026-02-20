"use client";

import Link from "next/link";
import Image from "next/image";
import { Lock, CheckCircle, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DitheringShader } from "@/components/ui/dithering-shader";

/**
 * Hero section for the home page.
 *
 * Features:
 * - Deep dark bg with animated dithering wave shader
 * - Badge with Lock icon
 * - Large headline with wavy-underline accent
 * - Two CTAs: Brand (accent) and Creator (outline)
 * - 3 floating glassmorphism mockup cards on the right
 * - Social proof brand strip at bottom
 */
export function Hero() {
    return (
        <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden">
            {/* Dithering Shader Background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <DitheringShader
                    shape="wave"
                    type="8x8"
                    colorBack="#070815"
                    colorFront="#2b2f86"
                    pxSize={3}
                    speed={0.4}
                    width={1920}
                    height={1080}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>

            {/* Background Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#2b2f86]/40 blur-[120px] pointer-events-none" />
            <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="max-w-2xl"
                    >
                        {/* Badge */}
                        <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-[2px] px-3 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/70 mb-6">
                            <Lock className="w-3 h-3 mr-2 text-accent" />
                            Creator Trust Infrastructure
                        </span>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6 font-heading font-bold">
                            The Creator Economy Has a{" "}
                            <span className="wavy-underline">
                                Trust Problem
                            </span>
                            .
                            <br />
                            We Fixed It.
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
                            Verified creators. Escrow-secured payments.
                            Structured deals. The foundational infrastructure
                            both brands and creators have been waiting for.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Link href="/for-brands">
                                <button className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 bg-accent hover:bg-accent/90 text-white px-6 py-3 shadow-[0_4px_16px_rgba(254,46,102,0.2)] hover:shadow-[0_6px_24px_rgba(254,46,102,0.3)] hover:scale-[1.02] w-full sm:w-auto">
                                    I&apos;m a Brand — Protect Budget
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </Link>
                            <Link href="/for-creators">
                                <button className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 bg-transparent border border-white/20 hover:border-white/50 text-white px-6 py-3 hover:bg-white/5 w-full sm:w-auto">
                                    I&apos;m a Creator — Secure Payments
                                </button>
                            </Link>
                        </div>

                        {/* Trust Signals */}
                        <p className="text-[13px] text-white/50 font-medium flex flex-wrap gap-4">
                            <span className="flex items-center gap-1.5">
                                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                                No credit card required
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                                Free for creators
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                                Setup in 5 minutes
                            </span>
                        </p>
                    </motion.div>

                    {/* Right Visual — Hero Image + Floating Mockup Cards */}
                    <div className="relative h-[600px] hidden lg:block">
                        {/* Hero Image — displayed at natural 3:4 ratio */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                src="/lansdingHero.png"
                                alt="Creator Trust Platform"
                                width={400}
                                height={533}
                                className="rounded-2xl drop-shadow-2xl"
                                priority
                            />
                        </div>
                        {/* Card 1: Deal Protected — top-right corner */}
                        <motion.div
                            initial={{ opacity: 0, x: 20, y: -20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -top-2 -right-4 w-[200px] bg-[#1a1c3b]/80 backdrop-blur-xl border border-white/10 rounded-lg p-3 shadow-2xl animate-float glow-primary z-20"
                        >
                            <div className="flex items-center gap-2 mb-1.5">
                                <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <CheckCircle className="text-green-400 w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="text-xs font-heading text-white">Deal Protected</p>
                                    <p className="text-[10px] text-white/50">Escrow Locked</p>
                                </div>
                            </div>
                            <div className="font-mono text-lg text-green-400 font-bold">
                                ₹1,20,000
                            </div>
                        </motion.div>

                        {/* Card 2: Verified Creator — bottom-left */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, y: 20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="absolute bottom-16 -left-6 w-[190px] bg-[#12143a]/90 backdrop-blur-md border border-accent/30 rounded-lg p-3 shadow-2xl animate-float-delayed z-30"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-[10px]">
                                    AK
                                </div>
                                <div>
                                    <p className="font-bold text-white text-xs">Ananya K.</p>
                                    <p className="text-[10px] text-white/50">Verified Creator</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-secondary/20 p-2 rounded-md border border-secondary/30">
                                <span className="text-[10px] font-medium text-secondary">Trust Score</span>
                                <span className="text-base font-bold text-secondary font-mono">94</span>
                            </div>
                        </motion.div>

                        {/* Card 3: Escrow Status — bottom-right */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="absolute -bottom-2 -right-4 w-[170px] bg-gradient-to-br from-[#2b2f86] to-[#12143a] border border-secondary/30 rounded-lg p-3 shadow-2xl animate-float z-10"
                        >
                            <div className="flex items-center gap-1.5 mb-1">
                                <ShieldCheck className="w-3 h-3 text-accent" />
                                <p className="text-[10px] text-white/60">Escrow Status</p>
                            </div>
                            <div className="flex items-end gap-1">
                                <span className="font-mono text-xl text-white font-bold">100%</span>
                                <span className="text-[10px] text-white/40 pb-0.5">secured</span>
                            </div>
                            <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                <motion.div
                                    className="h-full bg-accent rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{
                                        delay: 1.2,
                                        duration: 1.5,
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    );
}
