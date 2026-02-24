import { motion } from 'framer-motion';
import { Send, Phone, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="pt-32 pb-20 bg-white min-h-screen relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-1/2 h-[800px] bg-brand-cream/50 rounded-bl-full -z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Info */}
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
                            Have questions or ready to book your free 1-on-1 trial class? We're here to help you take the first step.
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
                                    <p className="text-gray-600 mb-2">Available Mon-Fri, 9am - 8pm (UK Time)</p>
                                    <a href="tel:+441234567890" className="text-lg font-bold text-brand-navy hover:text-brand-gold transition-colors">+44 123 456 7890</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-gold shadow-sm shrink-0">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-green mb-1">WhatsApp</h3>
                                    <p className="text-gray-600 mb-2">Message us for quick replies.</p>
                                    <a href="https://wa.me/441234567890" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-brand-navy hover:text-brand-gold transition-colors">Start Chat</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-gold shadow-sm shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-green mb-1">Email Us</h3>
                                    <p className="text-gray-600 mb-2">We usually reply within 24 hours.</p>
                                    <a href="mailto:info@noorpath.online" className="text-lg font-bold text-brand-navy hover:text-brand-gold transition-colors">info@noorpath.online</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100"
                    >
                        <h2 className="text-3xl font-display font-bold text-brand-green mb-8">Book Free Trial Class</h2>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-50 text-green-800 p-8 rounded-2xl text-center"
                            >
                                <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Send size={40} className="text-green-600 ml-1" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                                <p>JazakAllah Khair. Our team will contact you shortly to schedule your trial class.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-navy">Parent/Guardian Name</label>
                                        <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" placeholder="Enter your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-navy">Email Address</label>
                                        <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" placeholder="Enter your email" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-navy">Phone / WhatsApp</label>
                                        <input required type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" placeholder="With country code" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-navy">Student Age</label>
                                        <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all text-gray-700">
                                            <option value="">Select age</option>
                                            <option value="4-7">4-7 years</option>
                                            <option value="8-12">8-12 years</option>
                                            <option value="13-17">13-17 years</option>
                                            <option value="adult">Adult</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-navy">Interested Program</label>
                                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all text-gray-700">
                                        <option value="">Select a program</option>
                                        <option value="qaida">Noorani Qaida</option>
                                        <option value="tajweed">Tajweed Mastery</option>
                                        <option value="hifz">Hifz Program</option>
                                        <option value="kids">Kids Islamic Studies</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-navy">Message (Optional)</label>
                                    <textarea rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all resize-none" placeholder="Any specific requirements or timings?"></textarea>
                                </div>

                                <button type="submit" className="w-full py-4 bg-brand-gold text-white font-bold rounded-xl hover:bg-brand-gold-light transition-all glow-gold shadow-lg flex justify-center items-center gap-2 group">
                                    Send Trial Request <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
