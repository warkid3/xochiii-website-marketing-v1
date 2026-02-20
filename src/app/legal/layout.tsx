import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-background font-sans">
            <Navbar />
            <div className="pt-32 pb-24 container mx-auto px-4 max-w-4xl">
                <div className="prose prose-lg prose-invert max-w-none prose-headings:font-heading prose-headings:text-white prose-p:text-white/80 prose-li:text-white/80 prose-strong:text-white prose-a:text-accent hover:prose-a:text-accent/80">
                    {children}
                </div>
            </div>
            <Footer />
        </main>
    );
}
