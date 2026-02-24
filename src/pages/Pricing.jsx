import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Lock, Info } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Pricing = () => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const selectedPlan = queryParams.get('plan');
    const selectedCourse = queryParams.get('course');

    let courseName = '';
    if (selectedCourse === 'qaida') courseName = 'Noorani Qaida';
    else if (selectedCourse === 'tajweed') courseName = 'Tajweed Mastery';
    else if (selectedCourse === 'hifz') courseName = 'Hifz Program';
    else if (selectedCourse === 'kids') courseName = 'Kids Islamic Stories';

    useEffect(() => {
        if (selectedPlan) {
            setTimeout(() => {
                const element = document.getElementById(`plan-${selectedPlan}`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 500);
        }
    }, [selectedPlan]);

    const plans = [
        {
            id: "basic",
            name: "Basic",
            desc: "Perfect for getting started",
            monthlyPrice: 45,
            annualPrice: 45,
            coursesLabel: "Noorani Qaida OR Tajweed Mastery",
            features: [
                "5 live 1-on-1 classes per week",
                "Personalized lesson plan",
                "Basic progress tracking",
                "Student portal access"
            ],
            popular: false
        },
        {
            id: "family",
            name: "Family",
            desc: "Best for multiple children",
            monthlyPrice: 100,
            annualPrice: 100,
            coursesLabel: "Noorani Qaida + Tajweed + Kids Islamic Stories",
            features: [
                "Up to 3 kids included",
                "5 classes per week per child",
                "Saturday group session",
                "Family dashboard",
                "Monthly progress reports",
                "Priority WhatsApp support"
            ],
            popular: true
        },
        {
            id: "premium",
            name: "Premium Hifz",
            desc: "For serious memorization",
            monthlyPrice: 75,
            annualPrice: 75,
            coursesLabel: "Full Hifz Program",
            features: [
                "Daily classes (6 days a week)",
                "Certified Hifz instructor",
                "Longer sessions + session recordings",
                "Detailed weekly reports",
                "Direct teacher WhatsApp access"
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

                    {selectedPlan && courseName && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-brand-green/10 border-2 border-brand-green text-brand-green font-bold text-lg md:text-xl p-6 rounded-2xl mb-12 shadow-md max-w-3xl mx-auto flex items-center justify-center gap-3"
                        >
                            <Info size={28} className="text-brand-gold" />
                            Great choice! You selected {courseName} → {plans.find(p => p.id === selectedPlan)?.name} Plan is perfect for you ✅
                        </motion.div>
                    )}
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, idx) => {
                        const isHighlighted = selectedPlan === plan.id;

                        return (
                            <motion.div
                                key={idx}
                                id={`plan-${plan.id}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 
                                    ${plan.popular ? 'border-4 border-brand-gold transform md:-translate-y-4 shadow-2xl z-10' : 'border border-gray-100 mt-0 md:mt-4'}
                                    ${isHighlighted ? 'ring-4 ring-brand-gold ring-offset-4 shadow-[0_0_40px_rgba(212,160,23,0.3)]' : ''}
                                `}
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

                                <div className="mb-6 flex items-baseline gap-2">
                                    <span className="text-5xl font-display font-bold text-brand-navy">
                                        ${plan.monthlyPrice}
                                    </span>
                                    <span className="text-gray-500 font-medium">/month</span>
                                </div>

                                <div className="mb-6 p-4 bg-brand-cream/50 rounded-xl border border-brand-gold/20">
                                    <p className="text-sm font-bold text-brand-green mb-1">Courses included:</p>
                                    <p className="text-gray-700 text-sm font-medium">{plan.coursesLabel}</p>
                                </div>

                                <ul className="space-y-4 mb-10 border-t border-gray-100 pt-8 min-h-[260px]">
                                    {plan.features.map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check size={20} className="text-brand-gold shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to={`/contact?course=${selectedCourse || plan.id}`}
                                    className={`w-full py-4 rounded-full font-bold text-lg flex justify-center items-center transition-all ${plan.popular || isHighlighted
                                        ? 'bg-brand-gold text-white hover:bg-brand-gold-light glow-gold hover:-translate-y-1'
                                        : 'bg-brand-cream text-brand-green hover:bg-brand-green hover:text-white'
                                        }`}
                                >
                                    Start Free 1-on-1 Trial
                                </Link>
                            </motion.div>
                        );
                    })}
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
