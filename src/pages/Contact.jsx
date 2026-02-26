import { motion } from 'framer-motion';
import { Send, Phone, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Contact = () => {
    const ENROLL_URL = "https://script.google.com/macros/s/AKfycbyK3G5DuJOMb-LiShANOEKnhVLyqvKOmzrwRMMGPHKeZopxRWUStsNB1kRZ7YGGUZ9U/exec";

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const [searchParams] = useSearchParams();
    const planParam = searchParams.get('plan') || '';

    let formattedPlan = "General Inquiry";
    if (planParam === 'qaida-individual') formattedPlan = "Noorani Qaida Mastery - Individual Plan";
    else if (planParam === 'qaida-family') formattedPlan = "Noorani Qaida Mastery - Family Plan (3 kids)";
    else if (planParam === 'recitation-individual') formattedPlan = "Beautiful Quran Recitation - Individual Plan";
    else if (planParam === 'recitation-family') formattedPlan = "Beautiful Quran Recitation - Family Plan (3 kids)";
    else if (planParam === 'hifz-individual') formattedPlan = "Complete Hifz Program - Individual Plan";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(false);
        setSubmitSuccess(false);

        const form = e.target;

        // Exact schema matching the Google Apps Script
        const formData = {
            plan: formattedPlan,
            name: form.name.value,
            email: form.email.value,
            whatsapp: form.phone.value,
            childInfo: form.studentAge.value,
            message: form.message.value
        };

        try {
            await fetch(ENROLL_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            setSubmitSuccess(true);
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
            form.reset();

        } catch (error) {
            console.error("Form Submission Error:", error);
            setSubmitError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-32 pb-20 bg-white min-h-screen relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-[800px] bg-brand-cream/50 rounded-bl-full -z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl font-display font-bold text-brand-green mb-6"
                        >
                            Start Your Journey
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 mb-12 max-w-lg leading-relaxed"
                        >
                            Have questions or ready to enroll? We're here to help you take the first step.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-gold shadow-sm shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-green mb-1">Call Us</h3>
                                    <p className="text-gray-600 mb-2">Available Mon-Fri, 9am - 8pm (PK Time)</p>
                                    <a href="tel:+923143409371" className="text-lg font-bold text-brand-navy hover:text-brand-gold transition-colors">+92 314 340 9371</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-gold shadow-sm shrink-0">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-green mb-1">WhatsApp</h3>
                                    <p className="text-gray-600 mb-2">Message us for quick replies.</p>
                                    <a href="https://wa.me/923143409371" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-brand-navy hover:text-brand-gold transition-colors">Start Chat</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-gold shadow-sm shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-green mb-1">Email Us</h3>
                                    <p className="text-gray-600 mb-2">We usually reply within 24 hours.</p>
                                    <a href="mailto:abdulraheemcloud116@gmail.com" className="text-lg font-bold text-brand-navy hover:text-brand-gold transition-colors">abdulraheemcloud116@gmail.com</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100"
                    >
                        <h2 className="text-3xl font-display font-bold text-brand-green mb-8">Enroll Now</h2>

                        {submitSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-50 text-green-800 p-8 rounded-2xl text-center border border-green-200"
                            >
                                <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Send size={40} className="text-green-600 ml-1" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                                <p>JazakAllah Khair. Our team will contact you shortly to finalize your enrollment.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="bg-brand-cream p-5 rounded-xl border-2 border-brand-gold/50 shadow-sm mb-6">
                                    <label className="text-sm font-bold text-brand-navy block mb-1 uppercase tracking-wider">Selected Plan:</label>
                                    <input
                                        type="text"
                                        name="selectedPlan"
                                        readOnly
                                        value={formattedPlan}
                                        className="w-full bg-transparent font-bold text-brand-green text-xl md:text-2xl outline-none"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-navy">Your Name</label>
                                        <input name="name" required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" placeholder="Enter your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-navy">Email Address</label>
                                        <input name="email" required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" placeholder="Enter your email" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-navy">Student Age</label>
                                        <input name="studentAge" required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" placeholder="E.g. 8 years old" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-navy">Phone / WhatsApp</label>
                                        <input name="phone" required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" placeholder="With country code" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-navy">Message (Optional)</label>
                                    <textarea name="message" rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all resize-none" placeholder="Any specific requirements or timings?"></textarea>
                                </div>

                                {submitError && (
                                    <div className="p-4 bg-red-50 text-red-600 rounded-xl text-center border border-red-200">
                                        Oops! Something went wrong submitting your request. Please try again.
                                    </div>
                                )}

                                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-brand-gold text-white font-bold rounded-xl hover:bg-brand-gold-light transition-all glow-gold shadow-lg flex justify-center items-center gap-2 group disabled:opacity-50">
                                    {isSubmitting ? 'Submitting...' : (
                                        <>Submit Request <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
