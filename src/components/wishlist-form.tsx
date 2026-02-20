"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
    }),
    type: z.enum(["brand", "creator"], {
        message: "Please select if you are a brand or creator.",
    }),
    organization: z.string().optional(),
    channelLink: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),
    website: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),
});

export function WishlistForm() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            type: "creator",
            organization: "",
            channelLink: "",
            website: "",
        },
    });

    const watchType = form.watch("type");

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            console.log("Submitting wishlist form:", values);

            if (supabase) {
                const { error } = await supabase
                    .from('wishlist')
                    .insert({
                        name: values.name,
                        email: values.email,
                        phone: values.phone,
                        type: values.type,
                        organization: values.organization || null,
                        channel_link: values.channelLink || null,
                        website: values.website || null,
                    });

                if (error) throw error;
            } else {
                // Simulation for development without creds
                await new Promise(resolve => setTimeout(resolve, 1500));
                console.warn("Supabase not configured, simulation success.");
            }

            setIsSuccess(true);
            toast("You've been added to the wishlist!", {
                description: "We'll be in touch soon with your early access invite.",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            toast("Something went wrong.", {
                description: "Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-3xl font-bold font-heading text-white mt-4">Welcome to the Waitlist!</h3>
                <p className="text-white/60 max-w-md">
                    Thank you for joining. We're building the future of trust in the creator economy, and we're excited to have you on board.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-6 border-white/20 bg-transparent hover:bg-white/10 text-white">
                    Submit another response
                </Button>
            </div>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>I am a...</FormLabel>
                            <FormControl>
                                <div className="flex bg-white/10 p-1 rounded-lg border border-white/10">
                                    <button
                                        type="button"
                                        onClick={() => field.onChange("creator")}
                                        className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-md transition-all ${field.value === "creator"
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-white hover:bg-white/5"
                                            }`}
                                    >
                                        Creator / Influencer
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => field.onChange("brand")}
                                        className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-md transition-all ${field.value === "brand"
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-white hover:bg-white/5"
                                            }`}
                                    >
                                        Brand / Agency
                                    </button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="John Doe"
                                        className="bg-white text-gray-900 placeholder:text-gray-400 border-white/20 h-11"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="john@example.com"
                                        className="bg-white text-gray-900 placeholder:text-gray-400 border-white/20 h-11"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="+91 98765 43210"
                                    className="bg-white text-gray-900 placeholder:text-gray-400 border-white/20 h-11"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <AnimatePresence mode="wait">
                    {watchType === "brand" ? (
                        <motion.div
                            key="brand-field"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                        >
                            <FormField
                                control={form.control}
                                name="organization"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Organization Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Acme Corp"
                                                className="bg-white text-gray-900 placeholder:text-gray-400 border-white/20 h-11"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="creator-field"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                        >
                            <FormField
                                control={form.control}
                                name="channelLink"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Primary Channel Link</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="https://instagram.com/username"
                                                className="bg-white text-gray-900 placeholder:text-gray-400 border-white/20 h-11"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Your main social media profile.</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Website (Optional)</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="https://example.com"
                                    className="bg-white text-gray-900 placeholder:text-gray-400 border-white/20 h-11"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-12 text-lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        "Join Wishlist"
                    )}
                </Button>
            </form>
        </Form>
    );
}
