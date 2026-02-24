import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/03143409371"
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
