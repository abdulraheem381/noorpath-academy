import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: "Basic",
            desc: "Perfect for getting started",
            monthlyPrice: 25,
            annualPrice: 20, // 20% off
            features: [
                "1 Class per week",
                "1-on-1 Live Sessions",
                "Basic Progress Tracking",
                "Access to Student Portal"
            ],
            popular: false
        },
        {
            name: "Family",
            desc: "Best for multiple children",
            monthlyPrice: 45,
            annualPrice: 36, // 20% off
            features: [
                "Up to 3 Kids Included",
                "2 Classes per week per child",
                "Family Dashboard",
                "Priority Support",
                "Monthly Progress Reports"
            ],
            popular: true
        },
        {
            name: "Premium Hifz",
            desc: "For serious memorization",
            monthlyPrice: 65,
            annualPrice: 52, // 20% off
            features: [
                "Daily Classes (5x week)",
                "Certified Hifz Instructors",
                "Session Recordings",
                "Detailed Weekly Reports",
                "Direct Teacher WhatsApp Access"
            ],
            popular: false
        }
    ];

    return (
        <div className="pt-32 pb-20 bg-brand-cream min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-display font-bold text-brand-green mb-6"
                    >
                        Simple, Transparent Pricing
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
                    >
                        Invest in your family's hereafter. High-quality Islamic education accessible to everyone.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <span className={`text-lg font-bold ${!isAnnual ? 'text-brand-green' : 'text-gray-500'}`}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="w-16 h-8 bg-brand-green rounded-full p-1 relative transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2"
                        >
                            <motion.div
                                className="w-6 h-6 bg-brand-gold rounded-full shadow-md"
                                animate={{ x: isAnnual ? 32 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={`text-lg font-bold flex items-center gap-2 ${isAnnual ? 'text-brand-green' : 'text-gray-500'}`}>
                            Annual <span className="text-xs px-2 py-1 bg-brand-gold/20 text-brand-gold-dark rounded-full">Save 20%</span>
                        </span>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative bg-white rounded-3xl p-8 shadow-xl ${plan.popular ? 'border-4 border-brand-gold transform md:-translate-y-4 shadow-2xl z-10' : 'border border-gray-100 mt-0 md:mt-4'}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-white font-bold px-6 py-2 rounded-full uppercase tracking-wider text-sm shadow-lg whitespace-nowrap">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-brand-green mb-2">{plan.name}</h3>
                                <p className="text-gray-500 min-h-[48px]">{plan.desc}</p>
                            </div>

                            <div className="mb-8 flex items-baseline gap-2">
                                <span className="text-5xl font-display font-bold text-brand-navy">
                                    £{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                                </span>
                                <span className="text-gray-500 font-medium">/month</span>
                            </div>

                            <ul className="space-y-4 mb-10 border-t border-gray-100 pt-8 min-h-[220px]">
                                {plan.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check size={20} className="text-brand-gold shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/contact"
                                className={`w-full py-4 rounded-full font-bold text-lg flex justify-center items-center transition-all ${plan.popular
                                        ? 'bg-brand-gold text-white hover:bg-brand-gold-light glow-gold hover:-translate-y-1'
                                        : 'bg-brand-cream text-brand-green hover:bg-brand-green hover:text-white'
                                    }`}
                            >
                                Start Free 1-on-1 Trial
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 bg-white rounded-2xl p-6 border border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left shadow-sm max-w-3xl mx-auto">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
                        <Lock size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-brand-navy flex items-center justify-center sm:justify-start gap-2">
                            <Shield size={16} className="text-brand-green" /> 100% Secure Payments
                        </h4>
                        <p className="text-gray-500 text-sm">Processed securely via XPay Global. Monthly auto-renew, cancel anytime.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Pricing;
