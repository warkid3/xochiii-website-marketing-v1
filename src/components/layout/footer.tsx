import Link from "next/link";
import Image from "next/image";

/**
 * Footer component.
 *
 * 5-column layout on desktop, darker bg (#05060f),
 * Xochiii branding, social placeholders, and organized link groups.
 */
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#05060f] border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2.5 mb-4">
                            <Image
                                src="/Xochiii-Logo.svg"
                                alt="Xochiii logo"
                                width={28}
                                height={28}
                                className="rounded-md"
                            />
                            <span className="font-heading font-bold text-xl text-white">
                                Xochiii
                            </span>
                        </div>
                        <p className="text-sm text-white/50 mb-6 max-w-sm leading-relaxed">
                            The trust and transaction backbone where real
                            creator–brand collaborations happen safely. Built
                            for the modern creator economy.
                        </p>
                        <div className="flex gap-4">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 cursor-pointer transition-colors flex items-center justify-center"
                                >
                                    <div className="w-3 h-3 bg-white/30 rounded-full" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-heading text-white font-semibold mb-4">
                            Product
                        </h4>
                        <ul className="space-y-3">
                            {[
                                {
                                    label: "How It Works",
                                    href: "/#how-it-works",
                                },
                                { label: "For Brands", href: "/for-brands" },
                                {
                                    label: "For Creators",
                                    href: "/for-creators",
                                },
                                { label: "Pricing", href: "/pricing" },
                                {
                                    label: "Join Waitlist",
                                    href: "/wishlist",
                                },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/50 hover:text-accent transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-heading text-white font-semibold mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { label: "About Us", href: "/about" },
                                { label: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/50 hover:text-accent transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-heading text-white font-semibold mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            {[
                                {
                                    label: "Privacy Policy",
                                    href: "/legal/privacy",
                                },
                                {
                                    label: "Terms of Service",
                                    href: "/legal/terms",
                                },
                                {
                                    label: "Refund Policy",
                                    href: "/legal/refund",
                                },
                                {
                                    label: "Dispute Policy",
                                    href: "/legal/disputes",
                                },
                                {
                                    label: "Payments & Contact",
                                    href: "/legal/payments",
                                },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/50 hover:text-accent transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-white/40">
                        © {currentYear} Xochiii · Creator Trust Infrastructure
                    </p>
                    <div className="flex items-center gap-2 text-sm text-white/40">
                        Built in India 🇮🇳
                    </div>
                </div>
            </div>
        </footer>
    );
}
