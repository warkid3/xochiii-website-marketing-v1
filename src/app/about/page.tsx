import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Shield, Lock, CheckCircle2, Scale, AlertTriangle, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background font-sans">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-white leading-tight max-w-4xl mx-auto mb-6">
                        We're Building the Trust Layer <br />
                        the Creator Economy Was Missing.
                    </h1>
                </div>
            </section>

            {/* Brand Story */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Story</span>
                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
                        The creator economy generates billions in value — but operates on handshakes, DMs, and hope.
                        Creators get ghosted after delivery. Brands lose budget to fake audiences. Agencies take their cut and add opacity.
                        We built Creator Trust Infrastructure because the ecosystem deserved better.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-primary p-8 md:p-12 rounded-2xl relative overflow-hidden border-l-4 border-accent">
                            <h3 className="text-white/60 text-sm font-bold tracking-widest uppercase mb-4">Our Mission</h3>
                            <p className="text-2xl font-bold font-heading text-white leading-relaxed">
                                To embed trust directly into every creator–brand transaction — making fraud economically unsustainable and reliable collaboration the default.
                            </p>
                        </div>
                        <div className="bg-primary p-8 md:p-12 rounded-2xl relative overflow-hidden border-l-4 border-secondary">
                            <h3 className="text-white/60 text-sm font-bold tracking-widest uppercase mb-4">Our Vision</h3>
                            <p className="text-2xl font-bold font-heading text-white leading-relaxed">
                                To become the foundational trust and transaction infrastructure powering the creator economy — where collaborations are safe, payments are secure, and reputation is earned.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Principles */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Core Principles</h2>
                        <p className="text-muted-foreground">The rules that define our infrastructure.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Payment-First Safety", desc: "Funds secured before work begins. Always.", icon: Lock },
                            { title: "Verified Authenticity", desc: "Audience-backed signals, not vanity metrics.", icon: Shield },
                            { title: "Structured Deal Lifecycle", desc: "Clear, trackable, and enforceable agreements.", icon: Users },
                            { title: "Evidence-Based Disputes", desc: "Fair, rule-driven enforcement. No he-said-she-said.", icon: Scale },
                            { title: "Transparent Risk Signaling", desc: "Informed decisions for both sides, at every step.", icon: AlertTriangle },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-4">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
