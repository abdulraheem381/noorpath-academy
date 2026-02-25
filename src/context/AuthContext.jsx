import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleSession = async (currentSession) => {
            setSession(currentSession);
            setUser(currentSession?.user ?? null);

            if (currentSession?.user) {
                const { user: supaUser } = currentSession;
                // Upsert to profiles table to ensure row exists
                const { error: profileError } = await supabase.from('profiles').upsert({
                    id: supaUser.id,
                    full_name: supaUser.user_metadata?.full_name || '',
                    role: supaUser.user_metadata?.role || 'parent',
                    updated_at: new Date().toISOString()
                }, { onConflict: 'id' });

                if (profileError) {
                    console.error('Error syncing profile in AuthContext:', profileError);
                }
            }

            setLoading(false);
        };

        // Get initial session
        supabase.auth.getSession().then(({ data: { session: initialSession } }) => {
            handleSession(initialSession);
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, currentSession) => {
            handleSession(currentSession);
        });

        return () => subscription.unsubscribe();
    }, []);

    const value = {
        session,
        user,
        loading,
        signOut: () => supabase.auth.signOut(),
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
