import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children, allowedRoles }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && allowedRoles.length > 0) {
        const userRole = user.user_metadata?.role || 'parent';
        if (!allowedRoles.includes(userRole)) {
            // Redirect unauthorized users to their appropriate dashboard
            if (userRole === 'admin') return <Navigate to="/admin" replace />;
            return <Navigate to="/dashboard" replace />;
        }
    }

    return children;
};
