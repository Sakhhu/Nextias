import React, { useState, useEffect } from 'react';
import { 
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  TrophyIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  AcademicCapIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';

const ActivityFeed = ({ limit = 5 }) => {
  const { darkMode } = useTheme();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching activities
    const fetchActivities = async () => {
      setLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockActivities = [
        {
          id: 1,
          type: 'course_completed',
          title: 'Completed Course: Indian Polity',
          description: 'You have successfully completed the Indian Polity course',
          time: '2 hours ago',
          icon: CheckCircleIcon,
          color: 'green'
        },
        {
          id: 2,
          type: 'test_submitted',
          title: 'Test Submitted: GS Paper 1',
          description: 'Your test has been submitted for evaluation',
          time: '5 hours ago',
          icon: ClipboardDocumentCheckIcon,
          color: 'blue'
        },
        {
          id: 3,
          type: 'achievement',
          title: 'Achievement Unlocked!',
          description: 'You have completed 10 mock tests',
          time: '1 day ago',
          icon: TrophyIcon,
          color: 'yellow'
        },
        {
          id: 4,
          type: 'discussion',
          title: 'New Reply to Your Post',
          description: 'Someone replied to your discussion on Current Affairs',
          time: '2 days ago',
          icon: ChatBubbleLeftRightIcon,
          color: 'purple'
        },
        {
          id: 5,
          type: 'reminder',
          title: 'Test Reminder',
          description: 'UPSC Prelims Test Series starts tomorrow',
          time: '3 days ago',
          icon: BellIcon,
          color: 'red'
        },
        {
          id: 6,
          type: 'course_started',
          title: 'Started New Course',
          description: 'You have enrolled in Economy Fundamentals',
          time: '4 days ago',
          icon: BookOpenIcon,
          color: 'indigo'
        },
        {
          id: 7,
          type: 'milestone',
          title: 'Study Streak: 30 Days!',
          description: 'Congratulations! You have maintained a 30-day study streak',
          time: '5 days ago',
          icon: AcademicCapIcon,
          color: 'green'
        }
      ];
      
      setActivities(mockActivities.slice(0, limit));
      setLoading(false);
    };

    fetchActivities();
  }, [limit]);

  const getColorClasses = (color) => {
    const colors = {
      green: 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400',
      blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
      yellow: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400',
      red: 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400',
      purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
      indigo: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400'
    };
    return colors[color] || colors.blue;
  };

  if (loading) {
    return (
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Recent Activity
        </h3>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-start space-x-3 animate-pulse">
              <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Recent Activity
        </h3>
        <button className={`text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors`}>
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 group hover:bg-gray-50 dark:hover:bg-gray-700/50 p-2 rounded-lg transition-colors">
            <div className={`p-2 rounded-full ${getColorClasses(activity.color)} flex-shrink-0`}>
              <activity.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                {activity.title}
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                {activity.description}
              </p>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <ClockIcon className="h-3 w-3 mr-1" />
                {activity.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {activities.length === 0 && (
        <div className="text-center py-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mb-4`}>
            <ClockIcon className="h-8 w-8 text-gray-400" />
          </div>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            No recent activity
          </p>
          <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'} mt-1`}>
            Start learning to see your activity here
          </p>
        </div>
      )}
    </div>
  );
};

export default ActivityFeed;
