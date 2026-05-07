import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Quality', path: '/quality' },
  { label: 'Infrastructure', path: '/infrastructure' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const navBg = scrolled || !isHome
    ? 'bg-inverse-surface/95 backdrop-blur-md shadow-lg'
    : 'bg-transparent';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-margin h-20 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center">
              <span className="text-on-secondary-fixed font-black text-lg">PC</span>
            </div>
            <div>
              <span className="font-headline-md text-[20px] font-black text-on-primary tracking-tight">
                POWER CRESTS
              </span>
              <span className="block text-[10px] text-primary-fixed-dim tracking-[0.25em] uppercase -mt-1">
                Pvt Ltd
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex gap-1 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-secondary-container bg-white/10'
                    : 'text-on-tertiary-container hover:text-on-primary hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919512927779" className="flex items-center gap-2 text-on-tertiary-container hover:text-on-primary transition-colors">
              <Phone size={16} />
              <span className="text-[14px]">+91-9512927779</span>
            </a>
            <Link
              to="/contact"
              className="bg-secondary-container text-on-secondary-fixed-variant px-6 py-2.5 rounded-lg font-bold text-[13px] uppercase tracking-wider hover:bg-secondary-fixed-dim transition-all duration-300 hover:shadow-lg hover:shadow-secondary-container/30"
            >
              Get Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-on-primary p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-inverse-surface/98 backdrop-blur-xl border-t border-white/10 lg:hidden"
          >
            <div className="px-6 py-8 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-[16px] font-medium transition-all ${
                      location.pathname === link.path
                        ? 'text-secondary-container bg-white/10'
                        : 'text-on-tertiary-container hover:text-on-primary hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-secondary-container text-on-secondary-fixed-variant px-6 py-3 rounded-lg font-bold text-[14px] uppercase tracking-wider"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
