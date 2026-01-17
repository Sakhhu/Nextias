import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, PhoneIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import AuthModal from '../auth/AuthModal';
import GlobalSearch from '../common/GlobalSearch';
import ThemeToggle from '../common/ThemeToggle';
import MobileMenu from '../common/MobileMenu';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  // 2. Add state to control the visibility of popup
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Test Series', path: '/test-series' },
    { name: 'UPSC', path: '/upsc' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? (darkMode ? 'bg-gray-900 shadow-md py-2' : 'bg-white shadow-md py-2')
          : (darkMode ? 'bg-gray-800' : 'bg-blue-600') + ' py-4'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className={`text-xl font-bold ${
            scrolled 
              ? (darkMode ? 'text-blue-400' : 'text-blue-600')
              : (darkMode ? 'text-white' : 'text-blue-600')
          }`}>
            NEXT IAS
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode 
                  ? 'text-gray-300 hover:bg-gray-700' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-medium hover:opacity-75 ${
                  scrolled 
                    ? (darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600')
                    : (darkMode ? 'text-gray-200 hover:text-white' : 'text-white hover:opacity-75')
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-3 ml-4">
              <GlobalSearch />
              <ThemeToggle />
              <div className={`flex items-center px-3 py-2 rounded ${
                scrolled 
                  ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white')
                  : 'bg-white/10 text-white border border-white/20'
              }`}>
                <PhoneIcon className="h-4 w-4 mr-2" />
                <span className="text-xs font-bold">1800 102 4157</span>
              </div>

              {/* 3. Added onClick to trigger the modal */}
              <button 
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="relative z-50 bg-white text-blue-600 px-4 py-2 rounded shadow-sm text-sm font-bold flex items-center transition-all hover:bg-gray-100 active:scale-95 cursor-pointer pointer-events-auto"
              >
                <UserCircleIcon className="h-4 w-4 mr-2" />
                Login / Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 4. Render Mobile Menu and AuthModal */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <AuthModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;