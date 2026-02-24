import { motion } from 'framer-motion';
import { Star, Play, Quote } from 'lucide-react';

const Reviews = () => {
    const reviews = [
        {
            name: "Aisha M.",
            location: "London, UK",
            avatar: "https://i.pravatar.cc/150?img=5",
            text: "The Noorani Qaida program has been incredible for my 6-year-old. The teacher is so patient and engaging. MashaAllah, he is already reading short words with ease.",
            program: "Kids Islamic Studies"
        },
        {
            name: "Omar K.",
            location: "Berlin, Germany",
            avatar: "https://i.pravatar.cc/150?img=11",
            text: "I started the Tajweed Mastery as an adult convert. It was intimidating at first, but the 1-on-1 attention really helped me build confidence. Highly recommend.",
            program: "Tajweed Mastery"
        },
        {
            name: "Fatima R.",
            location: "New York, USA",
            avatar: "https://i.pravatar.cc/150?img=20",
            text: "My two daughters have been on the Family Plan for 6 months. It's so convenient to schedule, and I receive detailed progress reports every week.",
            program: "Family Plan"
        },
        {
            name: "Zayn H.",
            location: "Toronto, Canada",
            avatar: "https://i.pravatar.cc/150?img=33",
            text: "The Premium Hifz program is demanding but deeply rewarding. My tutor is incredibly skilled and holds me accountable every day.",
            program: "Premium Hifz"
        },
        {
            name: "Mariam T.",
            location: "Manchester, UK",
            avatar: "https://i.pravatar.cc/150?img=42",
            text: "Beautiful platform. The teachers are not only knowledgeable but genuinely care about the student's tarbiyah. Alhamdulillah we found NoorPath.",
            program: "Kids Islamic Studies"
        },
        {
            name: "Ahmed S.",
            location: "Chicago, USA",
            avatar: "https://i.pravatar.cc/150?img=53",
            text: "The monthly reports and recordings feature are fantastic. I can review the lessons and see exactly what my son needs to practice.",
            program: "Noorani Qaida"
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
                        Family Success Stories
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Don't just take our word for it. Hear from parents and students whose lives have been illuminated by the Quran.
                    </motion.p>
                </div>

                {/* Video Placeholder Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-24 relative group cursor-pointer"
                >
                    <div className="absolute inset-0 bg-brand-gold/20 rounded-3xl transform translate-x-4 translate-y-4"></div>
                    <div className="relative bg-brand-navy rounded-3xl aspect-video overflow-hidden shadow-2xl flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(212,160,23,0.3)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-white text-2xl font-bold font-display">Student Spotlight: Amina's Hifz Journey</h3>
                            <p className="text-white/80">Watch how 8-year-old Amina memorized Juz Amma in 6 months.</p>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center text-white glow-gold shadow-2xl z-10"
                        >
                            <Play size={32} className="ml-2" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative"
                        >
                            <Quote className="absolute top-6 right-6 text-brand-cream-light w-16 h-16 -z-0" />
                            <div className="flex gap-1 text-brand-gold mb-6 relative z-10">
                                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                            </div>
                            <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed min-h-[100px]">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-4 relative z-10 border-t border-gray-100 pt-6">
                                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full ring-2 ring-brand-gold/30" />
                                <div>
                                    <h4 className="font-bold text-brand-navy">{review.name}</h4>
                                    <p className="text-xs text-brand-green font-semibold">{review.program}</p>
                                    <p className="text-xs text-gray-400">{review.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Reviews;
