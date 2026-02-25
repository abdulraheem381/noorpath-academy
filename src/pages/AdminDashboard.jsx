import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Shield, Users, FileText, CheckCircle, XCircle } from 'lucide-react';

const AdminDashboard = () => {
    const { user } = useAuth();
    const adminName = user?.user_metadata?.full_name || 'Admin';

    return (
        <div className="pt-28 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex justify-between items-center mb-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-brand-gold">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-brand-navy rounded-xl flex items-center justify-center text-white">
                            <Shield size={32} className="text-brand-gold" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-display font-bold text-brand-navy">Admin Portal</h1>
                            <p className="text-gray-500">Welcome back, {adminName}. Manage students, reports, and reviews.</p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-6">

                    {/* Sidebar Stats */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10"><Users size={48} /></div>
                            <p className="text-gray-500 text-sm font-bold uppercase mb-1">Total Families</p>
                            <p className="text-3xl font-display font-bold text-brand-green">142</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10"><FileText size={48} /></div>
                            <p className="text-gray-500 text-sm font-bold uppercase mb-1">Reports Pending</p>
                            <p className="text-3xl font-display font-bold text-brand-gold">14</p>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3 space-y-8">

                        {/* Review Moderation */}
                        <motion.section
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-3xl p-8 shadow-md border border-gray-100"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-brand-navy flex items-center gap-2">
                                    Pending Testimonials
                                </h2>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 border border-gray-100 rounded-xl bg-gray-50 flex gap-4">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="font-bold text-sm text-brand-navy">Sarah Ahmed</span>
                                            <span className="text-xs text-gray-400">Parent of 2</span>
                                            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs font-bold rounded">Pending Approval</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-2">"The teachers here are simply wonderful! My kids learned so much."</p>
                                    </div>
                                    <div className="flex flex-col gap-2 shrink-0">
                                        <button className="flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-700 hover:bg-green-200 font-bold text-xs rounded transition-colors"><CheckCircle size={14} /> Approve</button>
                                        <button className="flex items-center gap-1 px-3 py-1.5 bg-red-100 text-red-700 hover:bg-red-200 font-bold text-xs rounded transition-colors"><XCircle size={14} /> Reject</button>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Student Management Mock */}
                        <motion.section
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-md border border-gray-100"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-brand-navy flex items-center gap-2">
                                    Recent Student Enrollments
                                </h2>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-brand-green/10 text-brand-green text-sm">
                                            <th className="py-3 px-4">Student</th>
                                            <th className="py-3 px-4">Parent Email</th>
                                            <th className="py-3 px-4">Course</th>
                                            <th className="py-3 px-4">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-gray-600">
                                        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                            <td className="py-3 px-4 font-bold text-brand-navy">Yusuf Ali</td>
                                            <td className="py-3 px-4">ahmed@example.com</td>
                                            <td className="py-3 px-4">Noorani Qaida</td>
                                            <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Active</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.section>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;
