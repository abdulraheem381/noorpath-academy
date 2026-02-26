import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const WhatsAppButton = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const courseParam = queryParams.get('course');

    let courseName = '';
    if (courseParam === 'qaida') courseName = 'Noorani Qaida Mastery';
    else if (courseParam === 'recitation') courseName = 'Beautiful Quran Recitation';
    else if (courseParam === 'hifz') courseName = 'Complete Hifz Program';

    const message = courseName
        ? `Assalamualaikum, I want free trial for ${courseName}`
        : `Assalamualaikum, I want free trial`;

    const waUrl = `https://wa.me/03143409371?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] flex items-center justify-center group"
        >
            <MessageCircle size={32} />
            <span className="absolute right-full mr-4 bg-white text-brand-navy px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                Chat with us
            </span>
        </motion.a>
    );
};

export default WhatsAppButton;
