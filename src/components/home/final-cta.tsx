import Link from "next/link";

/**
 * Final CTA section.
 *
 * Full-width gradient background with glow blobs,
 * large headline, and dual CTA buttons (Brand / Creator).
 */
export function FinalCta() {
    return (
        <section className="py-32 relative overflow-hidden bg-gradient-to-br from-[#2b2f86] to-[#070815]">
            {/* Abstract Glow Shapes */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight text-center">
                    <span className="whitespace-nowrap">The Creator Economy Deserves</span><br />
                    Infrastructure It Can Trust.
                </h2>
                <p className="text-lg md:text-xl text-white/70 mb-10">
                    Join brands and creators who&apos;ve stopped operating on
                    hope and started operating on proof.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/wishlist">
                        <button className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg shadow-[0_4px_16px_rgba(254,46,102,0.2)] hover:shadow-[0_6px_24px_rgba(254,46,102,0.3)] hover:scale-[1.02]">
                            Start as a Brand
                        </button>
                    </Link>
                    <Link href="/wishlist">
                        <button className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 bg-[#12143a]/50 border border-white/20 hover:border-white/50 text-white px-8 py-4 text-lg hover:bg-white/5">
                            Join as a Creator — It&apos;s Free
                        </button>
                    </Link>
                </div>

                <p className="mt-8 text-sm text-white/40">
                    No setup fees · Escrow-protected from day one · Cancel
                    anytime
                </p>
            </div>
        </section>
    );
}
