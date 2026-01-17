import React from 'react';
import { Link } from 'react-router-dom';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  AcademicCapIcon,
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Test Series', href: '/test-series' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' }
  ];

  const courses = [
    { name: 'UPSC Prelims', href: '/courses/upsc-prelims' },
    { name: 'UPSC Mains', href: '/courses/upsc-mains' },
    { name: 'Interview Guidance', href: '/courses/interview' },
    { name: 'Optional Subjects', href: '/courses/optional' },
    { name: 'Current Affairs', href: '/courses/current-affairs' },
    { name: 'Test Series', href: '/test-series' }
  ];

  const resources = [
    { name: 'Study Materials', href: '/resources' },
    { name: 'Previous Papers', href: '/resources/papers' },
    { name: 'Toppers Notes', href: '/resources/notes' },
    { name: 'Current Affairs', href: '/resources/current-affairs' },
    { name: 'Mock Tests', href: '/resources/mock-tests' },
    { name: 'Answer Writing', href: '/resources/answer-writing' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: FacebookIcon },
    { name: 'Twitter', href: '#', icon: TwitterIcon },
    { name: 'Instagram', href: '#', icon: InstagramIcon },
    { name: 'YouTube', href: '#', icon: YoutubeIcon },
    { name: 'LinkedIn', href: '#', icon: LinkedinIcon }
  ];

  return (
    <footer className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'} mt-auto`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <AcademicCapIcon className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">NEXT IAS</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner in UPSC Civil Services Examination preparation. 
              Join thousands of successful aspirants who have achieved their dreams with our expert guidance.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <PhoneIcon className="h-5 w-5 mr-3 text-blue-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-gray-300">
                <EnvelopeIcon className="h-5 w-5 mr-3 text-blue-400" />
                <span>info@nextias.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPinIcon className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                <span>123, Civil Services Lane,<br />
                New Delhi - 110001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Courses</h4>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link 
                    to={course.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    to={resource.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-blue-400">Stay Updated</h4>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest UPSC updates, study tips, and exam notifications.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 sm:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} NEXT IAS. All rights reserved. | 
              <Link to="/privacy" className="hover:text-blue-400 ml-1">Privacy Policy</Link> | 
              <Link to="/terms" className="hover:text-blue-400 ml-1">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <span>🏆 Trusted by 50,000+ Aspirants</span>
              <span>•</span>
              <span>⭐ 4.8/5 Rating</span>
              <span>•</span>
              <span>📚 500+ Study Materials</span>
            </div>
            <div>
              Made with ❤️ for UPSC Aspirants
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
