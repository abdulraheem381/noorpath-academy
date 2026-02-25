import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [childNames, setChildNames] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName,
                    child_names: childNames,
                    role: 'parent'
                }
            }
        });

        if (error) {
            setError(error.message);
        } else {
            setSuccess(true);
            setTimeout(() => {
                navigate('/dashboard');
            }, 3000);
        }
        setLoading(false);
    };

    return (
        <div className="pt-32 pb-20 bg-brand-cream min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #D4A017 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 max-w-md w-full relative z-10"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-display font-bold text-brand-green">Create Account</h1>
                    <p className="text-gray-500 mt-2">Join the NoorPath Academy family</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded-r-lg">
                        {error}
                    </div>
                )}

                {success ? (
                    <div className="p-6 bg-green-50 text-green-800 rounded-xl text-center border border-green-200 shadow-sm">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-xl mb-2">Welcome to NoorPath!</h3>
                        <p className="text-sm">Your account has been created successfully. Redirecting to dashboard...</p>
                    </div>
                ) : (
                    <form onSubmit={handleSignup} className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-brand-navy mb-1">Parent's Full Name</label>
                            <input
                                type="text"
                                required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                                placeholder="E.g. Ahmed Ali"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-brand-navy mb-1">Email Address</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-brand-navy mb-1">Password</label>
                            <input
                                type="password"
                                required
                                minLength={6}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                                placeholder="Min. 6 characters"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-brand-navy mb-1">Child Name(s) <span className="text-gray-400 font-normal">(Optional)</span></label>
                            <input
                                type="text"
                                value={childNames}
                                onChange={(e) => setChildNames(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                                placeholder="E.g. Yusuf, Maryam"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3.5 bg-brand-gold text-white font-bold rounded-xl hover:bg-brand-gold-light transition-all shadow-lg glow-gold mt-6 flex justify-center items-center disabled:opacity-70"
                        >
                            {loading ? 'Creating Account...' : 'Sign Up Securely'}
                        </button>
                    </form>
                )}

                <p className="mt-8 text-center text-gray-600">
                    Already have an account? <Link to="/login" className="text-brand-green font-bold hover:text-brand-navy transition-colors">Login</Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Signup;
