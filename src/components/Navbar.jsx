import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Reviews', path: '/reviews' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-gold group-hover:glow-gold transition-all duration-300">
                            {/* Animated logo placeholder */}
                            <img src="/animated-logo.jpg" alt="NoorPath Logo" className="w-full h-full object-cover" />
                        </div>
                        <div className={`flex flex-col ${isScrolled ? 'text-brand-green' : 'text-white'}`}>
                            <span className="font-display font-bold text-xl leading-none">NoorPath</span>
                            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Academy</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-brand-gold ${location.pathname === link.path
                                        ? 'text-brand-gold'
                                        : isScrolled ? 'text-brand-navy' : 'text-white/90'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="px-6 py-2.5 bg-brand-gold text-white font-semibold rounded-full hover:bg-brand-gold-light hover:-translate-y-0.5 glow-gold-hover transition-all duration-300 flex items-center gap-2"
                        >
                            Book Free Trial <ChevronRight size={16} />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`${isScrolled ? 'text-brand-navy' : 'text-white'} hover:text-brand-gold transition-colors`}
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1 shadow-xl">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-3 py-3 rounded-md text-base font-medium ${location.pathname === link.path
                                            ? 'text-brand-green bg-brand-green/5'
                                            : 'text-gray-700 hover:text-brand-gold hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link
                                    to="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-brand-gold text-white font-semibold rounded-full hover:bg-brand-gold-light transition-colors glow-gold"
                                >
                                    Start Free Trial <ChevronRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
