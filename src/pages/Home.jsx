import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Shield, BookOpen, Clock, Heart, Users } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden bg-gradient-to-br from-brand-cream to-white">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-gold/10 blur-[100px]"
                    />
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-green/10 blur-[100px]"
                    />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8 relative inline-block group"
                    >
                        <div className="absolute inset-0 bg-brand-gold/20 blur-2xl rounded-full group-hover:bg-brand-gold/40 transition-all duration-500"></div>
                        <img
                            src="/animated-logo.jpg"
                            alt="NoorPath Academy Logo"
                            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-2xl border-4 border-white relative z-10"
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-display font-bold text-brand-green mb-6"
                    >
                        Illuminating the Path <br className="hidden md:block" /> to the Quran
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl md:text-2xl text-brand-navy/80 mb-10 max-w-3xl mx-auto font-medium"
                    >
                        Premium online Quran learning for kids and adults worldwide, taught with love, excellence, and barakah.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-brand-green text-white text-lg font-bold rounded-full hover:bg-brand-green-dark transition-all duration-300 shadow-[0_0_20px_rgba(10,61,47,0.4)] hover:shadow-[0_0_25px_rgba(10,61,47,0.6)] flex items-center gap-2"
                        >
                            Start Your Free Trial Class <ChevronRight size={24} />
                        </Link>
                        <Link
                            to="/courses"
                            className="px-8 py-4 bg-white text-brand-navy text-lg font-bold rounded-full border-2 border-brand-green/20 hover:border-brand-green transition-all duration-300"
                        >
                            Explore Programs
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="bg-brand-green text-brand-cream py-6 border-y border-brand-gold/30">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                    >
                        <div className="flex text-brand-gold">
                            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                        </div>
                        <span className="font-semibold">4.9/5 from 50+ parents</span>
                    </motion.div>
                    <div className="hidden md:block w-px h-6 bg-brand-gold/30"></div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 font-medium"
                    >
                        <Shield className="text-brand-gold" size={20} />
                        Serving students in UK, Germany, USA, & Canada
                    </motion.div>
                </div>
            </section>

            {/* About Founder Highlights */}
            <section className="py-24 px-4 bg-white relative">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-4xl font-display font-bold text-brand-green mb-6">
                            Founded on Excellence <br />& Barakah
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg text-gray-700 leading-relaxed mb-6">
                            NoorPath Academy was founded by a Hafiz who completed his memorization at age 15 with a verified certificate. We understand the journey, the struggles, and the profound beauty of connecting with the Book of Allah.
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-lg text-gray-700 leading-relaxed mb-8">
                            Our mission is to bring high-quality, engaging, and personalized Quranic education into your home, combining traditional mastery with modern teaching methods.
                        </motion.p>
                        <motion.div variants={fadeInUp}>
                            <Link to="/about" className="inline-flex items-center gap-2 text-brand-gold font-bold hover:gap-4 transition-all uppercase tracking-wide">
                                Read Our Story <ChevronRight size={20} />
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Decorative Frame */}
                        <div className="absolute inset-0 border-4 border-brand-gold rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div className="relative bg-brand-cream rounded-2xl overflow-hidden shadow-xl aspect-[4/3] flex flex-col items-center justify-center p-8 text-center border-4 border-white">
                            <Shield size={64} className="text-brand-gold mb-4" />
                            <h3 className="font-display text-2xl text-brand-green font-bold mb-2">Verified Excellence</h3>
                            <p className="text-gray-600 mb-6">Certified by leading scholars in Quranic recitation and memorization.</p>
                            <Link to="/about" className="px-6 py-3 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-light transition-all shadow-md flex items-center gap-2 hover:-translate-y-1">
                                View Certificate <ChevronRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Courses Highlights */}
            <section className="py-24 px-4 bg-brand-cream relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-display font-bold text-brand-green mb-4"
                        >
                            Our Premium Programs
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-600 max-w-2xl mx-auto"
                        >
                            Structured, engaging, and deeply rewarding journeys tailored for every age and level.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {[
                            { title: "Noorani Qaida Mastery", desc: "For complete beginners to read Arabic fluently.", icon: BookOpen },
                            { title: "Beautiful Quran Recitation", desc: "Perfect your recitation with Tajweed rules.", icon: Star },
                            { title: "Complete Hifz Program", desc: "Memorize the Quran with structured revision.", icon: Shield }
                        ].map((course, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-brand-cream rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors text-brand-green">
                                    <course.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-brand-green mb-3">{course.title}</h3>
                                <p className="text-gray-600 mb-6">{course.desc}</p>
                                <Link to="/courses" className="text-brand-gold font-semibold flex items-center gap-1 group-hover:gap-3 transition-all">
                                    Learn more <ChevronRight size={18} />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose NoorPath */}
            <section className="py-24 px-4 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-brand-green mb-4">Why Families Choose Us</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: "Personalized 1-on-1 Attention", desc: "Every student learns at their own pace with tailored lesson plans.", icon: Users },
                            { title: "Verified, Loving Tutors", desc: "Our teachers are rigorously tested not just for knowledge, but for their ability to connect with students.", icon: Heart },
                            { title: "Flexible Scheduling", desc: "Choose times that fit your busy life, 24/7 availability for global students.", icon: Clock },
                            { title: "Structured Progress Tracking", desc: "Regular reports and milestone celebrations to keep students motivated.", icon: Shield }
                        ].map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-6"
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center text-brand-gold shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
                                    <benefit.icon size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-green mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-brand-green relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #D4A017 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
                    >
                        Join 100+ Happy Students Worldwide
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 mb-10"
                    >
                        Experience the difference of learning the Quran with excellence and barakah. Book your free, no-obligation trial class today.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-brand-gold text-white text-xl font-bold rounded-full hover:bg-white hover:text-brand-green transition-all duration-300 shadow-[0_0_30px_rgba(212,160,23,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transform hover:-translate-y-1"
                        >
                            Book Your Free Trial <ChevronRight size={24} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
