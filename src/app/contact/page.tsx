import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, MapPinIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function ContactPage() {
    return (
        <main className="flex flex-col min-h-screen bg-[#070815] text-[#e2e0f0] font-sans selection:bg-accent selection:text-white">
            <Navbar />
            <div className="flex-1 w-full flex items-center justify-center p-4 pt-40 pb-24 relative overflow-hidden">
                {/* Background glow for esthetics */}
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] pointer-events-none z-0" />
                <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[120px] pointer-events-none z-0" />

                <div className="mx-auto max-w-5xl w-full relative z-10">
                    <ContactCard
                        className="bg-[#0e0f22]/80 backdrop-blur-xl border-white/10 rounded-2xl md:rounded-[32px] overflow-hidden"
                        title="Get in touch"
                        description="If you have any questions regarding our Services, Escrow process or need help getting started. We do our best to respond within 1 business day."
                        contactInfo={[
                            {
                                icon: MailIcon,
                                label: 'General & Support',
                                value: 'hello@xochiii.com \nsupport@xochiii.com'
                            },
                            {
                                icon: MailIcon,
                                label: 'Disputes',
                                value: 'disputes@xochiii.com',
                            },
                            {
                                icon: MailIcon,
                                label: 'Grievance Officer',
                                value: 'Harsh Tambe \n+91-9987804837',
                            },
                            {
                                icon: MapPinIcon,
                                label: 'Corporate Office',
                                value: 'Klover Interacve arts and game tech silution pvt ltd\n4th Floor, Phase II Building, NFDC Campus, 24, Pedder Rd, IT Colony, Cumballa Hill, Mumbai, Maharashtra 400026',
                                className: 'col-span-1 md:col-span-2 lg:col-span-3',
                            }
                        ]}
                    >
                        <form action="" className="w-full space-y-6">
                            <div>
                                <h3 className="text-xl font-bold font-heading mb-4 text-white">Send a Message</h3>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label className="text-white/80">Name</Label>
                                <Input type="text" className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-11" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label className="text-white/80">Email</Label>
                                <Input type="email" className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-11" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label className="text-white/80">Message</Label>
                                <Textarea className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[120px]" />
                            </div>
                            <Button className="w-full bg-accent hover:bg-accent/90 text-white h-11 text-base font-medium" type="button">
                                Submit Message
                            </Button>
                        </form>
                    </ContactCard>
                </div>
            </div>
            <Footer />
        </main >
    );
}
