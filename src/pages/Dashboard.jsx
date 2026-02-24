import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, Calendar, Award, Book, Download, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    const parentName = user?.user_metadata?.full_name || 'Parent';

    const handleLogout = async () => {
        await signOut();
        navigate('/login');
    };

    const handleDownloadPDF = () => {
        alert("Downloading PDF report... (In production, this would generate a real PDF)");
    };

    return (
        <div className="pt-28 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green">
                            <User size={32} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-display font-bold text-brand-navy">Welcome back, {parentName}</h1>
                            <p className="text-gray-500">Manage your family's Quran journal.</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-red-50 text-gray-700 hover:text-red-600 font-bold rounded-lg transition-colors border border-gray-200 hover:border-red-200"
                    >
                        <LogOut size={18} /> Logout
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Column (Children & Classes) */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Section 1: My Children */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-3xl p-8 shadow-md border border-gray-100"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-brand-green flex items-center gap-2">
                                    <User size={24} className="text-brand-gold" /> My Children
                                </h2>
                                <button className="text-brand-gold font-bold hover:underline text-sm">+ Add Child</button>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {/* Dummy Child 1 */}
                                <div className="border border-gray-100 rounded-2xl p-6 bg-brand-cream/30 relative overflow-hidden group hover:border-brand-gold/50 transition-colors">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                                    <h3 className="text-xl font-bold text-brand-navy mb-1">Yusuf</h3>
                                    <p className="text-sm text-gray-500 mb-4">Age: 8 • Noorani Qaida</p>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm font-semibold">
                                            <span className="text-brand-green">Qaida Progress</span>
                                            <span className="text-brand-gold">65%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-brand-gold h-2.5 rounded-full" style={{ width: '65%' }}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Dummy Child 2 */}
                                <div className="border border-gray-100 rounded-2xl p-6 bg-brand-cream/30 relative overflow-hidden group hover:border-brand-gold/50 transition-colors">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                                    <h3 className="text-xl font-bold text-brand-navy mb-1">Maryam</h3>
                                    <p className="text-sm text-gray-500 mb-4">Age: 11 • Tajweed Mastery</p>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm font-semibold">
                                            <span className="text-brand-green">Juz 30 Memorization</span>
                                            <span className="text-brand-gold">80%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-brand-green h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Section 2: Upcoming Classes */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-md border border-gray-100"
                        >
                            <h2 className="text-2xl font-bold text-brand-green flex items-center gap-2 mb-6">
                                <Calendar size={24} className="text-brand-gold" /> Upcoming Classes
                            </h2>

                            <div className="space-y-4">
                                {/* Class 1 */}
                                <div className="flex items-center p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                                    <div className="w-16 h-16 bg-brand-cream rounded-xl flex flex-col justify-center items-center text-brand-navy font-bold mr-4 shrink-0">
                                        <span className="text-xs text-gray-500 uppercase">Today</span>
                                        <span className="text-lg">4:00</span>
                                        <span className="text-xs">PM</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-bold text-lg text-brand-navy">Noorani Qaida Live</h4>
                                        <p className="text-sm text-gray-500">Student: Yusuf • Teacher: Ustadh Hamza</p>
                                    </div>
                                    <button className="px-4 py-2 bg-brand-green text-white font-bold rounded-lg hover:bg-brand-navy transition-colors shrink-0 hidden sm:block">
                                        Join Zoom Link
                                    </button>
                                </div>

                                {/* Class 2 */}
                                <div className="flex items-center p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                                    <div className="w-16 h-16 bg-gray-50 rounded-xl flex flex-col justify-center items-center text-brand-navy font-bold mr-4 shrink-0">
                                        <span className="text-xs text-gray-500 uppercase">Tmrw</span>
                                        <span className="text-lg">5:30</span>
                                        <span className="text-xs">PM</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-bold text-lg text-brand-navy">Tajweed & Revision</h4>
                                        <p className="text-sm text-gray-500">Student: Maryam • Teacher: Ustadha Aisha</p>
                                    </div>
                                    <button className="px-4 py-2 bg-gray-200 text-gray-500 font-bold rounded-lg cursor-not-allowed shrink-0 hidden sm:block border border-gray-300">
                                        Link available 10m before
                                    </button>
                                </div>
                            </div>
                        </motion.section>

                    </div>

                    {/* Right Column (Stats & Reports) */}
                    <div className="space-y-8">

                        {/* Section 4: Family Stats */}
                        <motion.section
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-brand-green rounded-3xl p-8 shadow-xl text-white relative overflow-hidden"
                        >
                            <div className="absolute -top-10 -right-10 opacity-10">
                                <Award size={150} />
                            </div>
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
                                <Award className="text-brand-gold" size={24} /> Monthly Summary
                            </h2>

                            <div className="space-y-6 relative z-10">
                                <div>
                                    <p className="text-brand-cream/80 text-sm font-semibold uppercase tracking-wider mb-1">Classes Attended</p>
                                    <p className="text-4xl font-display font-bold text-brand-gold">24 <span className="text-lg text-white font-normal">/ 40</span></p>
                                </div>
                                <div>
                                    <p className="text-brand-cream/80 text-sm font-semibold uppercase tracking-wider mb-1">Total Learning Hours</p>
                                    <p className="text-4xl font-display font-bold text-brand-gold">18 <span className="text-lg text-white font-normal">hrs</span></p>
                                </div>
                            </div>
                        </motion.section>

                        {/* Section 3: Progress Reports */}
                        <motion.section
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-md border border-gray-100"
                        >
                            <h2 className="text-xl font-bold text-brand-green mb-6 flex items-center gap-2">
                                <Book size={20} className="text-brand-gold" /> Latest Reports
                            </h2>

                            <div className="space-y-3">
                                {/* Dummy Report 1 */}
                                <div className="p-3 border border-gray-100 rounded-lg flex items-center justify-between hover:bg-gray-50 transition-colors group">
                                    <div>
                                        <p className="font-bold text-sm text-brand-navy group-hover:text-brand-green transition-colors">Maryam - Jan 2026</p>
                                        <p className="text-xs text-gray-500 flex items-center gap-1"><Clock size={12} /> Published 2 days ago</p>
                                    </div>
                                    <button onClick={handleDownloadPDF} className="p-2 text-brand-gold hover:bg-brand-cream rounded-full transition-colors" title="Download PDF">
                                        <Download size={18} />
                                    </button>
                                </div>

                                {/* Dummy Report 2 */}
                                <div className="p-3 border border-gray-100 rounded-lg flex items-center justify-between hover:bg-gray-50 transition-colors group">
                                    <div>
                                        <p className="font-bold text-sm text-brand-navy group-hover:text-brand-green transition-colors">Yusuf - Jan 2026</p>
                                        <p className="text-xs text-gray-500 flex items-center gap-1"><Clock size={12} /> Published 2 days ago</p>
                                    </div>
                                    <button onClick={handleDownloadPDF} className="p-2 text-brand-gold hover:bg-brand-cream rounded-full transition-colors" title="Download PDF">
                                        <Download size={18} />
                                    </button>
                                </div>

                            </div>
                        </motion.section>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
