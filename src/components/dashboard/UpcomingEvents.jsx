import React, { useState, useEffect } from 'react';
import { 
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  AcademicCapIcon,
  VideoCameraIcon,
  ClipboardDocumentListIcon,
  BellIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';

const UpcomingEvents = ({ limit = 3 }) => {
  const { darkMode } = useTheme();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching events
    const fetchEvents = async () => {
      setLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const mockEvents = [
        {
          id: 1,
          title: 'UPSC Prelims Mock Test - GS Paper 1',
          type: 'test',
          date: '2024-01-20',
          time: '10:00 AM',
          duration: '2 hours',
          location: 'Online',
          instructor: 'Dr. Rajesh Kumar',
          registered: 245,
          capacity: 300,
          color: 'blue'
        },
        {
          id: 2,
          title: 'Current Affairs Weekly Discussion',
          type: 'webinar',
          date: '2024-01-22',
          time: '6:00 PM',
          duration: '1 hour',
          location: 'Online',
          instructor: 'Prof. Anita Sharma',
          registered: 189,
          capacity: 250,
          color: 'green'
        },
        {
          id: 3,
          title: 'Essay Writing Workshop',
          type: 'workshop',
          date: '2024-01-25',
          time: '2:00 PM',
          duration: '3 hours',
          location: 'Delhi Center',
          instructor: 'Shri Prakash Singh',
          registered: 45,
          capacity: 50,
          color: 'purple'
        },
        {
          id: 4,
          title: 'Interview Preparation Session',
          type: 'session',
          date: '2024-01-28',
          time: '11:00 AM',
          duration: '2 hours',
          location: 'Online',
          instructor: 'IAS Officer (Retd.)',
          registered: 78,
          capacity: 100,
          color: 'yellow'
        },
        {
          id: 5,
          title: 'Mains Answer Writing Practice',
          type: 'practice',
          date: '2024-01-30',
          time: '4:00 PM',
          duration: '1.5 hours',
          location: 'Online',
          instructor: 'Ms. Priya Patel',
          registered: 156,
          capacity: 200,
          color: 'red'
        }
      ];
      
      // Filter only future events
      const today = new Date();
      const futureEvents = mockEvents
        .filter(event => new Date(event.date) >= today)
        .slice(0, limit);
      
      setEvents(futureEvents);
      setLoading(false);
    };

    fetchEvents();
  }, [limit]);

  const getTypeIcon = (type) => {
    const icons = {
      test: ClipboardDocumentListIcon,
      webinar: VideoCameraIcon,
      workshop: AcademicCapIcon,
      session: UserGroupIcon,
      practice: BellIcon
    };
    return icons[type] || CalendarIcon;
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
      green: 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400',
      yellow: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400',
      red: 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400',
      purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400'
    };
    return colors[color] || colors.blue;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  if (loading) {
    return (
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Upcoming Events
        </h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-2/3"></div>
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
          Upcoming Events
        </h3>
        <button className={`text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors`}>
          View Calendar
        </button>
      </div>

      <div className="space-y-4">
        {events.map((event) => {
          const Icon = getTypeIcon(event.type);
          return (
            <div 
              key={event.id} 
              className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300'} transition-all duration-200 group cursor-pointer`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`p-1.5 rounded ${getColorClasses(event.color)}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className={`text-xs font-medium uppercase tracking-wide ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1`}>
                    {event.title}
                  </h4>
                  
                  <div className="space-y-1 text-sm">
                    <div className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      {formatDate(event.date)} at {event.time}
                    </div>
                    <div className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <ClockIcon className="h-4 w-4 mr-2" />
                      {event.duration}
                    </div>
                    <div className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <MapPinIcon className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <UserGroupIcon className="h-4 w-4 mr-2" />
                      {event.registered}/{event.capacity} registered
                    </div>
                  </div>
                </div>
                
                <button className={`ml-4 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  event.registered >= event.capacity
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                  disabled={event.registered >= event.capacity}
                >
                  {event.registered >= event.capacity ? 'Full' : 'Register'}
                </button>
              </div>
              
              {/* Progress bar for registration */}
              <div className="mt-3">
                <div className={`h-1.5 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div 
                    className={`h-1.5 rounded-full ${
                      event.registered >= event.capacity ? 'bg-red-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${Math.min((event.registered / event.capacity) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {events.length === 0 && (
        <div className="text-center py-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mb-4`}>
            <CalendarIcon className="h-8 w-8 text-gray-400" />
          </div>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            No upcoming events
          </p>
          <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'} mt-1`}>
            Check back later for new events
          </p>
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
