import { motion } from 'framer-motion';
import { Target, Heart, Globe, Award } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-32 pb-20 overflow-hidden bg-brand-cream min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-display font-bold text-brand-green mb-6"
                    >
                        Our Story & Mission
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-1 bg-brand-gold mx-auto rounded-full"
                    />
                </div>

                {/* Founder Story */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative">
                    {/* Decorative Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-[100px] rounded-tr-3xl -z-10"></div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] bg-brand-cream rounded-2xl shadow-2xl border-8 border-white relative z-10 flex items-center justify-center p-2">
                            <img src="/noorpath-academy/cert.jpeg" alt="Hifz Certificate" className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-700 rounded-md" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-green rounded-full -z-0 opacity-10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-display font-bold text-brand-green mb-6">A Journey of Dedication</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                            <p>
                                NoorPath Academy was born from a deep love for the Quran. Our founder completed his Hifz (memorization of the Quran) at the young age of 15, receiving a verified certificate of excellence.
                            </p>
                            <p>
                                Through years of dedication, he realized that learning the Quran shouldn't just be about repetition; it should be about connection, understanding, and joy. He saw a need for a platform that brings the warmth of traditional Madrasa learning into the modern, digital world.
                            </p>
                            <p>
                                Today, NoorPath Academy serves families across the UK, Germany, USA, and Canada, bringing top-tier instructors directly to your home.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Our Values */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold text-brand-green mb-4">Our Core Values</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Barakah in Teaching", icon: Heart, desc: "We believe in teaching with love and patience, ensuring every lesson is blessed and beneficial." },
                        { title: "Pursuit of Excellence", icon: Award, desc: "We maintain the highest standards in Tajweed and Hifz, accepting no compromises in quality." },
                        { title: "Personal Attention", icon: Target, desc: "Every student's journey is unique. We tailor our approach to fit their individual learning style." },
                        { title: "Global Community", icon: Globe, desc: "Connecting hearts to the Quran across borders, serving the Ummah worldwide." }
                    ].map((value, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-brand-gold group"
                        >
                            <div className="w-16 h-16 bg-brand-cream text-brand-green rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <value.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-green mb-3">{value.title}</h3>
                            <p className="text-gray-600">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default About;
