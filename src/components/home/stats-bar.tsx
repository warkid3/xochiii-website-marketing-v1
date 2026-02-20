/**
 * Stats / Credibility Bar section.
 *
 * 4-column stat strip with large numbers and labels.
 * Creates a trust-building visual break between content sections.
 */

const stats = [
    { stat: "₹0", label: "Lost to Fraud" },
    { stat: "94%", label: "Avg Authenticity Score" },
    { stat: "48 hrs", label: "Deal-to-Payment Cycle" },
    { stat: "100%", label: "Escrow Protection" },
];

export function StatsBar() {
    return (
        <section className="py-16 bg-[#12143a] border-y border-[#2b2f86]/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-white/10 text-center">
                    {stats.map((item, i) => (
                        <div key={i} className="px-4">
                            <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-2">
                                {item.stat}
                            </div>
                            <div className="text-xs md:text-sm font-medium text-secondary uppercase tracking-wider">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
