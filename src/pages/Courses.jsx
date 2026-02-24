import { motion } from 'framer-motion';
import { CheckCircle, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const courses = [
        {
            title: "Noorani Qaida for Beginners",
            level: "Beginner",
            duration: "Flexible",
            desc: "The essential foundational step to reading the Quran. Designed perfectly for young children and adults.",
            priceText: "From $45/month",
            goals: ["Master Arabic phonetics", "Fluent reading capability", "Understanding basic rules"],
            color: "border-blue-200",
            linkTarget: "/pricing?plan=basic&course=qaida",
            comingSoon: false
        },
        {
            title: "Tajweed Mastery",
            level: "Intermediate",
            duration: "Flexible",
            desc: "Perfect your recitation by mastering the complex rules of Tajweed and characteristics of letters.",
            priceText: "From $45/month",
            goals: ["Flawless recitation", "Deep rules understanding", "Beautiful rhythm"],
            color: "border-brand-gold/50",
            linkTarget: "/pricing?plan=basic&course=tajweed",
            comingSoon: true
        },
        {
            title: "Hifz Program",
            level: "All Levels",
            duration: "Intensive",
            desc: "A dedicated memorization journey with structured revision strategies. Taught by certified Huffaz.",
            priceText: "From $75/month",
            goals: ["Daily active memorization", "Strong revision schedule", "Weekly milestones"],
            color: "border-brand-green/30",
            linkTarget: "/pricing?plan=premium&course=hifz",
            comingSoon: false
        },
        {
            title: "Kids Islamic Stories",
            level: "Ages 4-12",
            duration: "Ongoing",
            desc: "An engaging, interactive curriculum teaching essential Duas, Seerah, and basic Fiqh in a fun manner.",
            priceText: "With Family Plan",
            goals: ["Love for Islam", "Daily Duas memorized", "Understanding of Prophets"],
            color: "border-purple-200",
            linkTarget: "/pricing?plan=family&course=kids",
            comingSoon: true
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
                        Our Programs
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Structured curriculums designed for mastery, retention, and love for the Quran.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {courses.map((course, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`bg-white rounded-3xl p-8 md:p-10 shadow-lg border-2 ${course.color} hover:shadow-2xl transition-all relative overflow-hidden group`}
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                                <BookOpen size={120} />
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex gap-3 mb-4">
                                    <span className="px-3 py-1 bg-brand-green/10 text-brand-green text-sm font-bold rounded-full">{course.level}</span>
                                    {course.comingSoon ? (
                                        <motion.span
                                            initial={{ scale: 0.9, opacity: 0.8 }}
                                            animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.8, 1, 0.8] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                            className="px-3 py-1 bg-brand-gold text-white text-sm font-bold rounded-full shadow-md z-20"
                                        >
                                            Coming Soon
                                        </motion.span>
                                    ) : (
                                        <span className="px-3 py-1 bg-brand-gold/20 text-brand-gold-dark font-bold text-sm rounded-full flex items-center gap-1">
                                            <Clock size={14} /> {course.duration}
                                        </span>
                                    )}
                                </div>

                                <h2 className="text-3xl font-display font-bold text-brand-green mb-2">{course.title}</h2>
                                <h3 className="text-xl font-bold text-brand-gold-dark mb-4">{course.priceText}</h3>

                                <p className="text-gray-600 text-lg mb-8 leading-relaxed flex-grow">
                                    {course.desc}
                                </p>

                                <div className="space-y-3 mb-8">
                                    <h4 className="font-bold text-brand-navy">What they'll achieve:</h4>
                                    {course.goals.map((goal, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle size={20} className="text-brand-gold" />
                                            <span className="text-gray-700">{goal}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to={course.linkTarget}
                                    className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 bg-brand-navy text-white text-lg font-bold rounded-full hover:bg-brand-green transition-colors glow-gold-hover"
                                >
                                    View Plans for this Course <ChevronRight size={20} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Courses;
