import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Lock, Info } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Pricing = () => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const selectedCourse = queryParams.get('course'); // qaida, recitation, hifz

    useEffect(() => {
        if (selectedCourse) {
            setTimeout(() => {
                const element = document.getElementById(`plan-${selectedCourse}`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 500);
        }
    }, [selectedCourse]);

    const plans = [
        {
            id: "qaida",
            name: "Noorani Qaida Mastery",
            desc: "For complete beginners to start their journey",
            individualPrice: { original: 45, current: 35 },
            familyPrice: { original: 135, current: 94.5 },
            individualLink: "/contact?plan=qaida-individual",
            familyLink: "/contact?plan=qaida-family",
            features: [
                "Master Arabic phonetics",
                "Fluent reading capability",
                "Personalized learning pace",
                "Student portal access"
            ],
            popular: true,
            hasFamily: true
        },
        {
            id: "recitation",
            name: "Beautiful Quran Recitation",
            desc: "Perfect your recitation and Tajweed rules",
            individualPrice: { original: 60, current: 55 },
            familyPrice: { original: 180, current: 148.5 },
            individualLink: "/contact?plan=recitation-individual",
            familyLink: "/contact?plan=recitation-family",
            features: [
                "Flawless recitation practice",
                "Deep Tajweed rules understanding",
                "Beautiful rhythm development",
                "1-on-1 feedback sessions"
            ],
            popular: false,
            hasFamily: true
        },
        {
            id: "hifz",
            name: "Complete Hifz Program",
            desc: "Intensive memorization journey",
            individualPrice: { current: 75 },
            individualLink: "/contact?plan=hifz-individual",
            features: [
                "Daily active memorization",
                "Strong revision schedule",
                "Weekly milestones tracking",
                "Direct teacher accountability"
            ],
            popular: false,
            hasFamily: false
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
                        Invest in your family's hereafter. High-quality Islamic education accessible to everyone. All plans are billed monthly.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, idx) => {
                        const isHighlighted = selectedCourse === plan.id;

                        return (
                            <motion.div
                                key={idx}
                                id={`plan-${plan.id}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 flex flex-col
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

                                <div className="mb-6 pb-6 border-b border-gray-100 flex-grow">
                                    <p className="text-sm font-bold text-brand-navy mb-2 uppercase tracking-wide">Individual Plan</p>
                                    <div className="flex items-baseline gap-2 mb-4">
                                        {plan.individualPrice.original && (
                                            <span className="text-2xl font-bold text-gray-400 line-through">
                                                ${plan.individualPrice.original}
                                            </span>
                                        )}
                                        <span className="text-5xl font-display font-bold text-brand-navy">
                                            ${plan.individualPrice.current}
                                        </span>
                                        <span className="text-gray-500 font-medium">/mo</span>
                                    </div>

                                    {plan.hasFamily && (
                                        <>
                                            <div className="mt-8 mb-2 flex items-center gap-2">
                                                <p className="text-sm font-bold text-brand-navy uppercase tracking-wide">Family Plan</p>
                                                <span className="text-xs bg-brand-gold/20 text-brand-gold-dark px-2 py-0.5 rounded-full font-bold">10% OFF</span>
                                            </div>
                                            <p className="text-xs text-gray-500 mb-2">Up to 3 kids included</p>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-xl font-bold text-gray-400 line-through">
                                                    ${plan.familyPrice.original}
                                                </span>
                                                <span className="text-3xl font-display font-bold text-brand-green">
                                                    ${plan.familyPrice.current}
                                                </span>
                                                <span className="text-gray-500 font-medium text-sm">/mo</span>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check size={20} className="text-brand-gold shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto space-y-3">
                                    <Link
                                        to={plan.individualLink}
                                        className="w-full py-3 rounded-xl font-bold text-lg flex justify-center items-center transition-all bg-brand-navy text-white hover:bg-brand-green glow-green hover:-translate-y-1"
                                    >
                                        Enroll Individual
                                    </Link>
                                    {plan.hasFamily && (
                                        <Link
                                            to={plan.familyLink}
                                            className="w-full py-3 rounded-xl font-bold text-lg flex justify-center items-center transition-all bg-brand-cream border border-brand-green/20 text-brand-green hover:bg-brand-gold hover:text-white hover:border-transparent glow-gold-hover hover:-translate-y-1"
                                        >
                                            Enroll Family
                                        </Link>
                                    )}
                                </div>
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
