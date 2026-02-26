import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Play, Quote, MessageSquarePlus } from 'lucide-react';

const Reviews = () => {
    const reviews = [
        {
            name: "Aisha M.",
            location: "London, UK",
            text: "The Noorani Qaida program has been incredible for my 6-year-old. The teacher is so patient and engaging. MashaAllah, he is already reading short words with ease.",
            program: "Noorani Qaida Mastery"
        },
        {
            name: "Omar K.",
            location: "Berlin, Germany",
            text: "I started the Recitation program as an adult convert. It was intimidating at first, but the 1-on-1 attention really helped me build confidence. Highly recommend.",
            program: "Beautiful Quran Recitation"
        },
        {
            name: "Fatima R.",
            location: "New York, USA",
            text: "My two daughters have been on the Family Plan for 6 months. It's so convenient to schedule, and I receive detailed progress reports every week.",
            program: "Beautiful Quran Recitation - Family"
        },
        {
            name: "Zayn H.",
            location: "Toronto, Canada",
            text: "The Complete Hifz program is demanding but deeply rewarding. My tutor is incredibly skilled and holds me accountable every day.",
            program: "Complete Hifz Program"
        },
        {
            name: "Mariam T.",
            location: "Manchester, UK",
            text: "Beautiful platform. The teachers are not only knowledgeable but genuinely care about the student's tarbiyah. Alhamdulillah we found NoorPath.",
            program: "Noorani Qaida Mastery"
        },
        {
            name: "Afshan",
            location: "United Kingdom",
            text: "The teacher is incredibly patient, especially with such young students. My daughter is only 6 years old and she is doing amazingly well, progressing at a fast pace. We’re so pleased with her development.",
            program: "Beautiful Quran Recitation"
        }
    ];

    const REVIEW_URL = import.meta.env.VITE_REVIEW_URL;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const [newReview, setNewReview] = useState({
        name: '',
        country: '',
        course: 'Noorani Qaida Mastery',
        rating: 5,
        comment: ''
    });

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(false);
        setSubmitSuccess(false);

        try {
            const formData = {
                name: newReview.name,
                country: newReview.country,
                course: newReview.course,
                rating: newReview.rating,
                comment: newReview.comment
            };

            await fetch(REVIEW_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            setSubmitSuccess(true);
            setTimeout(() => {
                setShowReviewForm(false);
                setSubmitSuccess(false);
                setNewReview({ name: '', country: '', course: 'Noorani Qaida Mastery', rating: 5, comment: '' });
            }, 3000);

        } catch (error) {
            console.error("Error submitting review:", error);
            setSubmitError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 3) * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden flex flex-col"
                        >
                            <Quote className="absolute top-6 right-6 text-brand-cream-light w-16 h-16 -z-0 opacity-50 group-hover:scale-110 transition-transform" />
                            <div className="flex gap-1 text-brand-gold mb-6 relative z-10">
                                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                            </div>
                            <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed flex-grow">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-4 relative z-10 border-t border-gray-100 pt-6 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center text-brand-gold font-bold text-lg shadow-inner shrink-0">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-navy">{review.name}</h4>
                                    <p className="text-xs text-brand-green font-semibold">{review.program}</p>
                                    <p className="text-xs text-gray-400">{review.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-2xl mx-auto text-center bg-white p-10 rounded-3xl shadow-xl border-t-4 border-brand-gold">
                    <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold">
                        <MessageSquarePlus size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-brand-navy mb-4">Share Your Experience</h2>
                    <p className="text-gray-600 mb-8">Has NoorPath Academy made a positive impact on your family? We'd love to hear your story!</p>

                    {!showReviewForm ? (
                        <button
                            onClick={() => setShowReviewForm(true)}
                            className="px-8 py-4 bg-brand-navy text-white font-bold rounded-xl hover:bg-brand-green transition-all shadow-lg glow-green"
                        >
                            Write a Review
                        </button>
                    ) : (
                        <AnimatePresence>
                            <motion.form
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                onSubmit={handleSubmitReview}
                                className="text-left space-y-4"
                            >
                                {submitSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="p-4 bg-green-50 text-green-700 rounded-xl font-medium text-center border border-green-200"
                                    >
                                        Thank you! Your review has been received.
                                    </motion.div>
                                ) : (
                                    <>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-bold text-brand-navy mb-1">Your Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={newReview.name}
                                                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-gold"
                                                    placeholder="E.g. Aisha M."
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-brand-navy mb-1">Country</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={newReview.country}
                                                    onChange={(e) => setNewReview({ ...newReview, country: e.target.value })}
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-gold"
                                                    placeholder="E.g. United Kingdom"
                                                />
                                            </div>
                                        </div>
                                        <div className="pb-1 mt-2">
                                            <label className="block text-sm font-bold text-brand-navy mb-1">Course Taken</label>
                                            <select
                                                value={newReview.course}
                                                onChange={(e) => setNewReview({ ...newReview, course: e.target.value })}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-gold"
                                            >
                                                <option>Noorani Qaida Mastery</option>
                                                <option>Beautiful Quran Recitation</option>
                                                <option>Complete Hifz Program</option>
                                            </select>
                                        </div>
                                        <div className="pb-1">
                                            <label className="block text-sm font-bold text-brand-navy mb-2">Rating</label>
                                            <div className="flex gap-2">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <button
                                                        key={star}
                                                        type="button"
                                                        onClick={() => setNewReview({ ...newReview, rating: star })}
                                                        className={`transition-colors ${newReview.rating >= star ? 'text-brand-gold' : 'text-gray-300'}`}
                                                    >
                                                        <Star fill="currentColor" size={24} />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-brand-navy mb-1">Your Review</label>
                                            <textarea
                                                required
                                                rows="4"
                                                value={newReview.comment}
                                                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-gold"
                                                placeholder="Share your experience..."
                                            ></textarea>
                                        </div>
                                        {submitError && (
                                            <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-xl text-center border border-red-200">
                                                Oops! Something went wrong. Please try again.
                                            </div>
                                        )}
                                        <div className="flex justify-end gap-3 mt-4">
                                            <button
                                                type="button"
                                                onClick={() => setShowReviewForm(false)}
                                                className="px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="px-6 py-3 bg-brand-gold text-white font-bold rounded-xl hover:bg-brand-gold-light glow-gold transition-colors disabled:opacity-50"
                                            >
                                                {isSubmitting ? 'Submitting...' : 'Submit Review'}
                                            </button>
                                        </div>
                                    </>
                                )}
                            </motion.form>
                        </AnimatePresence>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
