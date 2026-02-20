"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

/**
 * Navigation bar component.
 *
 * Features:
 * - Transparent by default, frosted glass on scroll
 * - Animated underline hover effect on links
 * - Brand name "Xochiii" with ShieldCheck icon
 * - "Join Waitlist" CTA
 * - Responsive mobile drawer via Shadcn Sheet
 */
export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "How It Works", href: "/#how-it-works" },
        { name: "For Brands", href: "/for-brands" },
        { name: "For Creators", href: "/for-creators" },
        { name: "Pricing", href: "/pricing" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-[#070815]/80 backdrop-blur-xl border-b border-white/5 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5">
                    <Image
                        src="/Xochiii-Logo.svg"
                        alt="Xochiii logo"
                        width={32}
                        height={32}
                        className="rounded-lg"
                        priority
                    />
                    <span className="font-heading font-bold text-2xl tracking-tight text-white">
                        Xochiii
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium relative group transition-colors py-1",
                                    pathname === link.href
                                        ? "text-white"
                                        : "text-white/70 hover:text-white"
                                )}
                            >
                                {link.name}
                                <span
                                    className={cn(
                                        "absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300",
                                        pathname === link.href
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                    )}
                                />
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                        <Button
                            variant="ghost"
                            className="text-white/80 hover:text-white hover:bg-white/5"
                        >
                            Log In
                        </Button>
                        <Link href="/wishlist">
                            <Button className="bg-accent hover:bg-accent/90 text-white border-0 font-semibold shadow-[0_4px_16px_rgba(254,46,102,0.2)] hover:shadow-[0_6px_24px_rgba(254,46,102,0.3)] hover:scale-[1.02] transition-all">
                                Join Waitlist
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-white hover:bg-white/10"
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="bg-[#070815] border-l-white/5 p-0"
                        >
                            <div className="flex flex-col h-full p-6 pt-12">
                                <div className="mb-8">
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2.5"
                                    >
                                        <Image
                                            src="/Xochiii-Logo.svg"
                                            alt="Xochiii logo"
                                            width={28}
                                            height={28}
                                            className="rounded-md"
                                        />
                                        <span className="text-white font-bold text-xl font-heading">
                                            Xochiii
                                        </span>
                                    </Link>
                                </div>
                                <div className="flex flex-col gap-6">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="text-xl font-heading text-white border-b border-white/5 pb-4 hover:text-accent transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                    <hr className="border-white/10 my-2" />
                                    <Button
                                        variant="ghost"
                                        className="text-white justify-start px-0 hover:text-accent hover:bg-transparent text-lg"
                                    >
                                        Log In
                                    </Button>
                                    <Link href="/wishlist" className="w-full">
                                        <Button className="bg-accent hover:bg-accent/90 text-white w-full text-lg py-6">
                                            Join Waitlist
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
