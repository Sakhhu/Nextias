import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  XMarkIcon, 
  ChevronDownIcon, 
  ChevronRightIcon,
  HomeIcon,
  BookOpenIcon,
  DocumentTextIcon,
  NewspaperIcon,
  PhoneIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';

const MobileMenu = ({ isOpen, onClose }) => {
  const { darkMode } = useTheme();
  const [expandedSections, setExpandedSections] = useState({});
  const menuRef = useRef(null);

  // Simple haptic feedback function
  const triggerHaptic = (type = 'light') => {
    if ('vibrate' in navigator) {
      switch (type) {
        case 'light':
          navigator.vibrate(10);
          break;
        case 'medium':
          navigator.vibrate(25);
          break;
        case 'heavy':
          navigator.vibrate(50);
          break;
        default:
          navigator.vibrate(10);
      }
    }
  };

  const navSections = [
    {
      title: 'Main',
      items: [
        { name: 'Home', path: '/', icon: HomeIcon },
        { name: 'About Us', path: '/about', icon: ChevronRightIcon },
        { name: 'Courses', path: '/courses', icon: BookOpenIcon },
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Blog', path: '/blog', icon: NewspaperIcon },
        { name: 'Study Materials', path: '/study-materials', icon: DocumentTextIcon },
        { name: 'Test Series', path: '/test-series', icon: DocumentTextIcon },
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'Contact Us', path: '/contact', icon: PhoneIcon },
        { name: 'Login/Register', path: '#', icon: UserCircleIcon, action: 'auth' },
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const toggleSection = (sectionTitle) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }));
    triggerHaptic('light');
  };

  const handleItemClick = (item) => {
    if (item.action === 'auth') {
      // Trigger auth modal
      window.dispatchEvent(new CustomEvent('openAuthModal'));
    } else {
      triggerHaptic('medium');
    }
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div 
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Menu</h2>
          <button
            onClick={() => {
              triggerHaptic('light');
              onClose();
            }}
            className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-200`}
          >
            <XMarkIcon className={`h-6 w-6 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 80px)' }}>
          {navSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className={darkMode ? 'border-gray-700' : 'border-gray-200'}>
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.title)}
                className={`w-full flex items-center justify-between p-4 text-left transition-colors duration-200 ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                }`}
              >
                <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {section.title}
                </span>
                <ChevronDownIcon 
                  className={`h-5 w-5 transition-transform duration-200 ${
                    expandedSections[section.title] ? 'rotate-180' : ''
                  } ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} 
                />
              </button>

              {/* Section Items */}
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedSections[section.title] ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="pb-2">
                  {section.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.path}
                      onClick={() => handleItemClick(item)}
                      className={`flex items-center p-4 pl-6 transition-colors duration-200 ${
                        darkMode 
                          ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <item.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                      <span className="text-sm font-medium">{item.name}</span>
                      {item.action === 'auth' && (
                        <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
                          darkMode ? 'bg-blue-600' : 'bg-blue-600'
                        } text-white`}>
                          Popular
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between mb-4">
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Need help?
            </span>
            <a
              href="tel:18001024157"
              className={`flex items-center text-sm font-medium ${
                darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
              }`}
              onClick={() => triggerHaptic('medium')}
            >
              <PhoneIcon className="h-4 w-4 mr-2" />
              Call Now
            </a>
          </div>
          <div className={`text-center text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            <p>© 2024 NEXT IAS. All rights reserved.</p>
            <p className="mt-1">
              Made with ❤️ for UPSC Aspirants
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
