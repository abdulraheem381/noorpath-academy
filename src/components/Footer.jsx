import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-navy text-white/80 pt-16 pb-8 border-t-4 border-brand-gold">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden bg-brand-cream hidden">
                                <img src="/noorpath-academy/animated-logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col text-white">
                                <span className="font-display font-bold text-2xl leading-none">NoorPath</span>
                                <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Academy</span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs pt-2">
                            Illuminating the Path to the Quran. A premium online platform for kids and adults worldwide, teaching with love and barakah.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors">
                                <Twitter size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-display font-bold text-lg mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
                        </h3>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Pricing', 'Reviews', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '') === 'home' ? '' : item.toLowerCase().replace(' ', '')}`} className="hover:text-brand-gold transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50 group-hover:bg-brand-gold transition-colors"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-white font-display font-bold text-lg mb-6 relative inline-block">
                            Our Programs
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
                        </h3>
                        <ul className="space-y-3">
                            {['Noorani Qaida', 'Tajweed Mastery', 'Hifz Program', 'Kids Islamic Studies'].map((item) => (
                                <li key={item}>
                                    <Link to="/courses" className="hover:text-brand-gold transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50 group-hover:bg-brand-gold transition-colors"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-display font-bold text-lg mb-6 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-gold"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail className="text-brand-gold shrink-0 mt-1" size={18} />
                                <a href="mailto:info@noorpath.online" className="hover:text-brand-gold transition-colors">info@noorpath.online</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="text-brand-gold shrink-0 mt-1" size={18} />
                                <a href="tel:+441234567890" className="hover:text-brand-gold transition-colors">+44 123 456 7890 (UK/Global)</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="text-brand-gold shrink-0 mt-1" size={18} />
                                <span>Serving students worldwide (UK, Germany, USA, Canada)</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                    <p>&copy; {new Date().getFullYear()} NoorPath Academy. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
