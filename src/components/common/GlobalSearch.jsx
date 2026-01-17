import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon, XMarkIcon, DocumentTextIcon, BookOpenIcon, NewspaperIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';

const GlobalSearch = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Mock data for search
  const mockData = {
    courses: [
      { id: 1, title: 'UPSC Prelims Complete Course', type: 'course', category: 'Prelims', description: 'Comprehensive course for UPSC Prelims preparation' },
      { id: 2, title: 'GS Mains Foundation', type: 'course', category: 'Mains', description: 'Foundation course for General Studies Mains' },
      { id: 3, title: 'Essay Writing Program', type: 'course', category: 'Mains', description: 'Master the art of essay writing' },
      { id: 4, title: 'CSAT Preparation', type: 'course', category: 'Prelims', description: 'Complete CSAT preparation course' },
    ],
    blog: [
      { id: 1, title: 'How to Prepare for UPSC 2024', type: 'blog', category: 'Strategy', description: 'Complete guide for UPSC 2024 preparation' },
      { id: 2, title: 'Current Affairs Analysis', type: 'blog', category: 'Current Affairs', description: 'Weekly current affairs analysis' },
      { id: 3, title: 'Mains Answer Writing Tips', type: 'blog', category: 'Mains', description: 'Tips for effective answer writing' },
    ],
    tests: [
      { id: 1, title: 'UPSC Prelims Test Series 2024', type: 'test', category: 'Test Series', description: 'Full test series for Prelims 2024' },
      { id: 2, title: 'GS Mains Test Series', type: 'test', category: 'Test Series', description: 'Comprehensive Mains test series' },
    ]
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchTimeout = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [query]);

  const performSearch = async (searchQuery) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const allResults = [];
    
    // Search in courses
    mockData.courses.forEach(item => {
      if (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        allResults.push(item);
      }
    });
    
    // Search in blog
    mockData.blog.forEach(item => {
      if (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        allResults.push(item);
      }
    });
    
    // Search in tests
    mockData.tests.forEach(item => {
      if (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        allResults.push(item);
      }
    });
    
    setResults(allResults.slice(0, 8)); // Limit to 8 results
    setIsLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev === -1 ? results.length - 1 : (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && results[selectedIndex]) {
        handleResultClick(results[selectedIndex]);
      }
    }
  };

  const handleResultClick = (result) => {
    const routes = {
      course: `/courses/${result.id}`,
      blog: `/blog/${result.id}`,
      test: `/test-series/${result.id}`
    };
    
    navigate(routes[result.type] || '/');
    setIsOpen(false);
    setQuery('');
    setResults([]);
    setSelectedIndex(-1);
  };

  const getTypeIcon = (type) => {
    const icons = {
      course: BookOpenIcon,
      blog: NewspaperIcon,
      test: DocumentTextIcon
    };
    return icons[type] || DocumentTextIcon;
  };

  const getTypeColor = (type) => {
    const colors = {
      course: 'text-blue-600 dark:text-blue-400',
      blog: 'text-green-600 dark:text-green-400',
      test: 'text-purple-600 dark:text-purple-400'
    };
    return colors[type] || 'text-gray-600 dark:text-gray-400';
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Button */}
      <button
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => inputRef.current?.focus(), 100);
        }}
        className={`p-2 rounded-lg transition-colors duration-200 ${
          darkMode 
            ? 'hover:bg-gray-700 text-gray-300' 
            : 'hover:bg-gray-100 text-gray-600'
        }`}
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>

      {/* Search Dropdown */}
      {isOpen && (
        <div className={`absolute top-full right-0 mt-2 w-96 rounded-lg shadow-2xl z-50 ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          {/* Search Input */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <MagnifyingGlassIcon className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search courses, blog posts, tests..."
                className={`w-full pl-10 pr-10 py-3 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                autoFocus
              />
              {query && (
                <button
                  onClick={() => {
                    setQuery('');
                    setResults([]);
                    setSelectedIndex(-1);
                  }}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                    darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-600'
                  }`}
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {isLoading ? (
              <div className="p-8 text-center">
                <div className="inline-flex items-center">
                  <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Searching...</span>
                </div>
              </div>
            ) : results.length > 0 ? (
              <div className="py-2">
                {results.map((result, index) => {
                  const Icon = getTypeIcon(result.type);
                  return (
                    <button
                      key={`${result.type}-${result.id}`}
                      onClick={() => handleResultClick(result)}
                      className={`w-full px-4 py-3 flex items-start space-x-3 transition-colors duration-200 ${
                        selectedIndex === index
                          ? darkMode ? 'bg-gray-700' : 'bg-blue-50'
                          : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                        <Icon className={`h-5 w-5 ${getTypeColor(result.type)}`} />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center space-x-2">
                          <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {result.title}
                          </h4>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            result.type === 'course' ? 'bg-blue-100 text-blue-700' :
                            result.type === 'blog' ? 'bg-green-100 text-green-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {result.type}
                          </span>
                        </div>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                          {result.description}
                        </p>
                        <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'} mt-1`}>
                          {result.category}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : query.length >= 2 ? (
              <div className="p-8 text-center">
                <DocumentTextIcon className={`h-12 w-12 mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  No results found for "{query}"
                </p>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                  Try searching with different keywords
                </p>
              </div>
            ) : (
              <div className="p-8 text-center">
                <MagnifyingGlassIcon className={`h-12 w-12 mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Type at least 2 characters to search
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className={`px-4 py-3 border-t ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}>
            <div className="flex items-center justify-between text-xs">
              <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Use ↑↓ to navigate, Enter to select
              </span>
              <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                ESC to close
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
