import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Play, Quote, MessageSquarePlus } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

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

    const { user } = useAuth();
    const [fetchedReviews, setFetchedReviews] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [newReview, setNewReview] = useState({
        name: '',
        comment: '',
        course: 'Noorani Qaida',
        country: '',
        rating: 5
    });
    const [submitSuccess, setSubmitSuccess] = useState(false);

    useEffect(() => {
        if (user && !newReview.name) {
            setNewReview(prev => ({ ...prev, name: user.user_metadata?.full_name || '' }));
        }
    }, [user]);

    useEffect(() => {
        const fetchReviews = async () => {
            const { data, error } = await supabase
                .from('reviews')
                .select('*')
                .eq('approved', true)
                .order('created_at', { ascending: false });

            if (!error && data) {
                setFetchedReviews(data);
            }
        };
        fetchReviews();
    }, []);

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { data: { user: currentUser } } = await supabase.auth.getUser();

            if (!currentUser) throw new Error("No active user session found.");

            const { error } = await supabase.from('reviews').insert([{
                parent_id: currentUser.id,
                name: newReview.name || currentUser.user_metadata?.full_name || 'Anonymous',
                course: newReview.course,
                country: newReview.country || null,
                rating: newReview.rating,
                comment: newReview.comment,
                approved: false
            }]);

            if (error) {
                console.error("Supabase insert error details:", error);
                throw error;
            }

            setSubmitSuccess(true);
            setTimeout(() => {
                setShowReviewForm(false);
                setSubmitSuccess(false);
                setNewReview({ name: currentUser.user_metadata?.full_name || '', comment: '', course: 'Noorani Qaida', country: '', rating: 5 });
            }, 3000);

        } catch (error) {
            console.error('Error submitting review catch block:', error);
            alert(`Failed to submit review. Details: ${error.message || error}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Combine static and dynamic for display
    const displayReviews = [...fetchedReviews, ...reviews];

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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {displayReviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 3) * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden"
                        >
                            <Quote className="absolute top-6 right-6 text-brand-cream-light w-16 h-16 -z-0 opacity-50 group-hover:scale-110 transition-transform" />
                            <div className="flex gap-1 text-brand-gold mb-6 relative z-10">
                                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                            </div>
                            <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed min-h-[100px]">
                                "{review.comment || review.text}"
                            </p>
                            <div className="flex items-center gap-4 relative z-10 border-t border-gray-100 pt-6 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center text-brand-gold font-bold text-lg shadow-inner">
                                    {review.name?.charAt(0) || 'U'}
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-navy">{review.name || 'Anonymous Parent'}</h4>
                                    {(review.course || review.program) && <p className="text-xs text-brand-green font-semibold">{review.course || review.program}</p>}
                                    {(review.country || review.location) && <p className="text-xs text-gray-400">{review.country || review.location}</p>}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Submit Review Section */}
                <div className="max-w-2xl mx-auto text-center bg-white p-10 rounded-3xl shadow-xl border-t-4 border-brand-gold">
                    <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold">
                        <MessageSquarePlus size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-brand-navy mb-4">Share Your Experience</h2>
                    <p className="text-gray-600 mb-8">Has NoorPath Academy made a positive impact on your family? We'd love to hear your story!</p>

                    {!user ? (
                        <p className="text-brand-green font-bold bg-brand-cream py-3 px-6 rounded-xl inline-block">Please log in to submit a review.</p>
                    ) : (
                        <>
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
                                            <div className="p-4 bg-green-50 text-green-700 rounded-xl font-medium text-center border border-green-200">
                                                Thank you! Your review has been submitted for approval.
                                            </div>
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
                                                        <label className="block text-sm font-bold text-brand-navy mb-1">Course Taken</label>
                                                        <select
                                                            value={newReview.course}
                                                            onChange={(e) => setNewReview({ ...newReview, course: e.target.value })}
                                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-gold"
                                                        >
                                                            <option>Noorani Qaida</option>
                                                            <option>Tajweed Mastery</option>
                                                            <option>Hifz Program</option>
                                                            <option>Kids Islamic Stories</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                                                    <div>
                                                        <label className="block text-sm font-bold text-brand-navy mb-1">Country <span className="text-gray-400 font-normal">(Optional)</span></label>
                                                        <input
                                                            type="text"
                                                            value={newReview.country}
                                                            onChange={(e) => setNewReview({ ...newReview, country: e.target.value })}
                                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-gold"
                                                            placeholder="E.g. United Kingdom, Germany"
                                                        />
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
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-bold text-brand-navy mb-1">Your Review</label>
                                                    <textarea
                                                        required
                                                        rows="4"
                                                        value={newReview.comment}
                                                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-gold"
                                                        placeholder="Share your child's progress and your experience with our teachers..."
                                                    ></textarea>
                                                </div>
                                                <div className="flex justify-end gap-3 mt-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowReviewForm(false)}
                                                        className="px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200"
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
                        </>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Reviews;
