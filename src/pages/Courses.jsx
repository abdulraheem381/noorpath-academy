import { motion } from 'framer-motion';
import { CheckCircle, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const courses = [
        {
            title: "Noorani Qaida for Beginners",
            level: "Beginner",
            duration: "3-6 Months",
            desc: "The essential foundational step to reading the Quran. Designed perfectly for young children and adult converts to master Arabic alphabet recognition and basic pronunciation.",
            goals: ["Master Arabic phonetics", "Fluent reading capability", "Understanding basic rules"],
            color: "border-blue-200"
        },
        {
            title: "Tajweed Mastery",
            level: "Intermediate to Advanced",
            duration: "Ongoing",
            desc: "Perfect your recitation by mastering the complex rules of Tajweed. Learn the characteristics (Sifaat) and articulation points (Makharij) of each letter.",
            goals: ["Flawless recitation", "Deep understanding of rules", "Beautiful rhythm"],
            color: "border-brand-gold/50"
        },
        {
            title: "Hifz Program",
            level: "All Levels",
            duration: "Flexible (Full/Part Time)",
            desc: "A dedicated memorization journey with structured revision strategies to ensure lifelong retention. Taught by certified Huffaz.",
            goals: ["Daily active memorization", "Strong revision schedule", "Weekly milestones"],
            color: "border-brand-green/30"
        },
        {
            title: "Kids Islamic Studies",
            level: "Ages 4-12",
            duration: "Ongoing",
            desc: "An engaging, interactive curriculum teaching essential Duas, Seerah (Stories of Prophets), and basic Fiqh in a fun and age-appropriate manner.",
            goals: ["Love for Islam", "Daily Duas memorized", "Understanding of Prophets"],
            color: "border-purple-200"
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
                                    <span className="px-3 py-1 bg-brand-gold/20 text-brand-gold-dark font-bold text-sm rounded-full flex items-center gap-1">
                                        <Clock size={14} /> {course.duration}
                                    </span>
                                </div>

                                <h2 className="text-3xl font-display font-bold text-brand-green mb-4">{course.title}</h2>
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
                                    to="/pricing"
                                    className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 bg-brand-navy text-white text-lg font-bold rounded-full hover:bg-brand-green transition-colors glow-gold-hover"
                                >
                                    View Plans <ChevronRight size={20} />
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
