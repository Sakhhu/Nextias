import React from 'react';
import { 
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  TrophyIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';

const StatsCard = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  color = 'blue',
  trend = null,
  loading = false 
}) => {
  const { darkMode } = useTheme();

  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500',
    indigo: 'bg-indigo-500'
  };

  const bgColorClasses = {
    blue: darkMode ? 'bg-blue-900/20' : 'bg-blue-50',
    green: darkMode ? 'bg-green-900/20' : 'bg-green-50',
    yellow: darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50',
    red: darkMode ? 'bg-red-900/20' : 'bg-red-50',
    purple: darkMode ? 'bg-purple-900/20' : 'bg-purple-50',
    indigo: darkMode ? 'bg-indigo-900/20' : 'bg-indigo-50'
  };

  const textColorClasses = {
    blue: 'text-blue-600 dark:text-blue-400',
    green: 'text-green-600 dark:text-green-400',
    yellow: 'text-yellow-600 dark:text-yellow-400',
    red: 'text-red-600 dark:text-red-400',
    purple: 'text-purple-600 dark:text-purple-400',
    indigo: 'text-indigo-600 dark:text-indigo-400'
  };

  if (loading) {
    return (
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md animate-pulse`}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-8 bg-gray-300 rounded w-1/2"></div>
          </div>
          <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md hover:shadow-lg transition-shadow duration-300`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {title}
          </p>
          <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mt-1`}>
            {value}
          </p>
          {subtitle && (
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
              {subtitle}
            </p>
          )}
          {trend && (
            <div className="flex items-center mt-2">
              <span className={`text-sm font-medium ${
                trend.type === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {trend.type === 'up' ? '↑' : '↓'} {trend.value}%
              </span>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} ml-1`}>
                from last month
              </span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full ${bgColorClasses[color]}`}>
          <Icon className={`h-6 w-6 ${textColorClasses[color]}`} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
