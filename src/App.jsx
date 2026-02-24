import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Pricing from './pages/Pricing';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
    return (
        <div className="min-h-screen flex flex-col relative bg-brand-cream selection:bg-brand-gold/30">
            {/* Background Pattern (subtle global pattern) */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0A3D2F 1px, transparent 0)', backgroundSize: '32px 32px' }}
            ></div>

            <Navbar />

            <main className="flex-grow z-10 w-full">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    } />
                </Routes>
            </main>

            <Footer />

            <WhatsAppButton />
        </div>
    );
}

export default App;
