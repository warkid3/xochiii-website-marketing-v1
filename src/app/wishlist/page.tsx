import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WishlistForm } from "@/components/wishlist-form";
import { Shield, Sparkles, Zap, CheckCircle, Lock } from "lucide-react";
import { LiquidGlassCard } from "@/components/ui/liquid-weather-glass";

export default function WishlistPage() {
    return (
        <main className="min-h-screen bg-[#070815] font-sans flex flex-col">
            <Navbar />

            {/* Main content area taking full height minus navbar/footer */}
            <div
                className='flex-1 w-full gap-8 pt-32 pb-24 px-4 relative flex items-center justify-center'
                style={{
                    background: 'url("/wishlist-bg.jpeg") center / cover no-repeat',
                }}
            >
                {/* Light black overlay for better contrast with the white inputs/cards */}
                <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
                <div className='grid w-full max-w-5xl grid-cols-1 md:grid-cols-3 gap-6 mx-auto relative z-10'>

                    {/* Left Column: Form (Spans 2 on desktop) */}
                    <LiquidGlassCard
                        shadowIntensity='md'
                        borderRadius='24px'
                        glowIntensity='lg'
                        blurIntensity='xl'
                        className='md:col-span-2 p-8 md:p-10 text-white bg-white/[0.06] border border-white/20'
                    >
                        <div className="mb-8 space-y-3">
                            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center border border-accent/30 shadow-[0_0_20px_rgba(254,46,102,0.3)] mb-6">
                                <Shield className="w-6 h-6 text-accent" />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight">
                                Secure Your Spot
                            </h1>
                            <p className="text-lg text-white/60">
                                We're rolling out access in waves to ensure quality. Join the waitlist to be among the first to experience zero-risk creator partnerships.
                            </p>
                        </div>

                        <WishlistForm />

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-[13px] text-white/40">
                                By joining, you agree to our <a href="/legal/terms" className="underline hover:text-white transition-colors">Terms</a> and <a href="/legal/privacy" className="underline hover:text-white transition-colors">Privacy Policy</a>.
                            </p>
                        </div>
                    </LiquidGlassCard>

                    {/* Right Column: Bento Highlight Cards (Like the demo's weather cards) */}
                    <div className="flex flex-col gap-6">
                        {/* Stat Card 1 */}
                        <LiquidGlassCard
                            shadowIntensity='sm'
                            borderRadius='24px'
                            glowIntensity='md'
                            blurIntensity='xl'
                            className='p-6 text-white bg-white/[0.05] border border-white/15 flex flex-col items-start justify-center relative overflow-hidden'
                        >
                            {/* Decorative gradient orb for glass displacement */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/30 blur-3xl rounded-full pointer-events-none" />

                            <Sparkles className="w-6 h-6 text-secondary mb-4 relative z-10" />
                            <div className='text-5xl font-bold mb-1 font-heading relative z-10'>ZERO</div>
                            <div className='text-sm text-white/60 font-medium relative z-10'>Counterparty Risk</div>
                        </LiquidGlassCard>

                        {/* Feature Card 2 */}
                        <LiquidGlassCard
                            shadowIntensity='sm'
                            borderRadius='24px'
                            glowIntensity='md'
                            blurIntensity='xl'
                            className='p-6 text-white bg-white/[0.05] border border-white/15 flex flex-col items-start justify-center flex-1 relative overflow-hidden'
                        >
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 blur-3xl rounded-full pointer-events-none" />

                            <Zap className="w-6 h-6 text-accent mb-4 relative z-10" />
                            <div className='text-3xl font-bold font-heading mb-3 relative z-10'>Instant<br />Payouts</div>
                            <div className='text-sm text-white/60 mb-6 relative z-10'>Get paid the second deliverables are approved. No net-30 delays.</div>

                            <div className='inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium border border-white/10 relative z-10 backdrop-blur-md'>
                                <Lock className='h-3.5 w-3.5 text-accent' />
                                Escrow Protected
                            </div>
                        </LiquidGlassCard>

                        {/* List Card 3 */}
                        <LiquidGlassCard
                            shadowIntensity='sm'
                            borderRadius='24px'
                            glowIntensity='md'
                            blurIntensity='xl'
                            className='p-6 text-white bg-white/[0.05] border border-white/15'
                        >
                            <div className="space-y-4">
                                <div className='flex items-center gap-3'>
                                    <CheckCircle className='h-5 w-5 text-green-400' />
                                    <span className="text-sm font-medium">Smart Contracts</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <CheckCircle className='h-5 w-5 text-green-400' />
                                    <span className="text-sm font-medium">Verified Analytics</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <CheckCircle className='h-5 w-5 text-green-400' />
                                    <span className="text-sm font-medium">Direct Deals</span>
                                </div>
                            </div>
                        </LiquidGlassCard>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}
