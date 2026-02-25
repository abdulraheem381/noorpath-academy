import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const AuthCallback = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleAuthCallback = async () => {
            try {
                const { error } = await supabase.auth.getSession();
                if (error) throw error;

                // Read role and redirect appropriately
                const { data: { user } } = await supabase.auth.getUser();
                if (user) {
                    const role = user.user_metadata?.role || 'parent';
                    if (role === 'admin') {
                        navigate('/admin');
                    } else {
                        navigate('/dashboard');
                    }
                } else {
                    navigate('/login');
                }
            } catch (err) {
                console.error('Error during auth callback:', err);
                setError(err.message);
                setTimeout(() => navigate('/login'), 3000);
            }
        };

        handleAuthCallback();
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-brand-cream">
            <div className="text-center">
                {!error ? (
                    <>
                        <div className="w-16 h-16 border-4 border-brand-green border-t-brand-gold rounded-full animate-spin mx-auto mb-4"></div>
                        <h2 className="text-xl font-bold text-brand-navy">Completing login...</h2>
                        <p className="text-gray-500 mt-2">Please wait while we redirect you.</p>
                    </>
                ) : (
                    <>
                        <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-red-700">Authentication Failed</h2>
                        <p className="text-gray-600 mt-2">{error}</p>
                        <p className="text-gray-500 text-sm mt-1">Redirecting to login...</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default AuthCallback;
