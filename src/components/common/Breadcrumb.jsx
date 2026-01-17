import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';

const Breadcrumb = ({ items, customSeparator }) => {
  const { darkMode } = useTheme();
  const location = useLocation();

  // Default breadcrumb generation based on current path
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    
    const breadcrumbs = [
      { name: 'Home', href: '/', icon: HomeIcon }
    ];

    // Build breadcrumb items based on path
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert kebab-case to title case
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Check if it's the last item (current page)
      const isLast = index === pathSegments.length - 1;
      
      breadcrumbs.push({
        name: name,
        href: isLast ? null : currentPath,
        isLast: isLast
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  if (breadcrumbItems.length <= 1) {
    return null; // Don't show breadcrumbs for just "Home"
  }

  const Separator = customSeparator || (
    <ChevronRightIcon className={`h-4 w-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
  );

  return (
    <nav className={`py-3 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <li key={index} className="flex items-center">
                {index > 0 && <div className="mx-2">{Separator}</div>}
                
                {item.isLast ? (
                  <div className={`flex items-center space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                    {Icon && <Icon className="h-4 w-4" />}
                    <span>{item.name}</span>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-2 transition-colors duration-200 ${
                      darkMode 
                        ? 'text-gray-400 hover:text-gray-200' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
