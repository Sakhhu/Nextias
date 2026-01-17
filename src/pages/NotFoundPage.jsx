import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ArrowLeftIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

const NotFoundPage = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-md w-full space-y-8 text-center">
        {/* 404 Illustration */}
        <div className="relative">
          <div className={`text-9xl font-bold ${darkMode ? 'text-gray-700' : 'text-gray-200'}`}>
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpenIcon className={`h-24 w-24 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Page Not Found
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Oops! The page you're looking for seems to have gone on a study break.
          </p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Don't worry, even the best aspirants get lost sometimes. Let's get you back on track!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            <HomeIcon className="h-5 w-5 mr-2" />
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className={`inline-flex items-center justify-center w-full px-6 py-3 border text-base font-medium rounded-md ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className={`pt-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <p className={`text-sm font-medium mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
            You might be looking for:
          </p>
          <div className="space-y-2">
            <Link
              to="/courses"
              className={`block text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors duration-200`}
            >
              → Our Courses
            </Link>
            <Link
              to="/blog"
              className={`block text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors duration-200`}
            >
              → Latest Blog Posts
            </Link>
            <Link
              to="/test-series"
              className={`block text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors duration-200`}
            >
              → Test Series
            </Link>
            <Link
              to="/contact"
              className={`block text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors duration-200`}
            >
              → Contact Us
            </Link>
          </div>
        </div>

        {/* Fun Quote */}
        <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
          <p className={`text-sm italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            "Success is not final, failure is not fatal: it is the courage to continue that counts."
          </p>
          <p className={`text-xs mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            - Winston Churchill
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
