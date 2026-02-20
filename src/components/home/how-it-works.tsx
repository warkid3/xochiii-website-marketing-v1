/**
 * How It Works section.
 *
 * Left-aligned badge + heading, 3-column step grid with
 * horizontal connector line, numbered circles with accent glow,
 * and ghost step numbers behind each card.
 */
export function HowItWorks() {
    const steps = [
        {
            step: "01",
            title: "Verify",
            desc: "Creators are validated through audience-backed authenticity scoring. Real humans only.",
        },
        {
            step: "02",
            title: "Protect",
            desc: "Funds are locked in escrow before work begins. Neither side can lose their investment.",
        },
        {
            step: "03",
            title: "Execute",
            desc: "Deals run on structured timelines with automated contracts, tracking, and enforcement.",
        },
    ];

    return (
        <section
            id="how-it-works"
            className="py-24 bg-[#070815] relative border-y border-white/5"
        >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2b2f86]/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-20">
                    <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-full border border-white/20 bg-white/10 text-white/70 mb-4">
                        How It Works
                    </span>
                    <h2 className="text-4xl md:text-5xl text-white font-heading font-bold">
                        Trust Built Into <br />
                        Every Transaction
                    </h2>
                </div>

                <div className="relative">
                    {/* Desktop Connector Line */}
                    <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#2b2f86] via-accent to-[#2b2f86] opacity-30" />

                    <div className="grid md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((item, i) => (
                            <div key={i} className="relative">
                                {/* Numbered Circle */}
                                <div className="w-14 h-14 rounded-full bg-[#12143a] border-2 border-accent flex items-center justify-center font-mono font-bold text-white text-xl mb-6 shadow-[0_0_20px_rgba(254,46,102,0.3)] relative z-10">
                                    {i + 1}
                                </div>

                                {/* Ghost Step Number */}
                                <div className="absolute -top-10 -left-6 text-9xl font-heading font-bold text-white/[0.02] z-0 select-none pointer-events-none">
                                    {item.step}
                                </div>

                                <h3 className="text-2xl font-heading font-semibold text-white mb-3 relative z-10">
                                    {item.title}
                                </h3>
                                <p className="text-white/60 leading-relaxed relative z-10">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
