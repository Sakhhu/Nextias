import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { 
  BookOpenIcon, 
  ClockIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  CalendarIcon,
  DocumentTextIcon,
  ArrowTrendingUpIcon,
  TrophyIcon,
  BellIcon
} from '@heroicons/react/24/outline';
import StatsCard from '../components/dashboard/StatsCard';
import ProgressChart from '../components/dashboard/ProgressChart';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import UpcomingEvents from '../components/dashboard/UpcomingEvents';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const { darkMode } = useTheme();

  // Mock data for enrolled courses
  const enrolledCourses = [
    { id: 1, title: 'GS Foundation Course', progress: 65, nextClass: 'Indian Polity', nextClassTime: 'Tomorrow, 10:00 AM' },
    { id: 2, title: 'CSAT Crash Course', progress: 30, nextClass: 'Quantitative Aptitude', nextClassTime: 'In 2 days' },
  ];

  // Mock data for upcoming tests
  const upcomingTests = [
    { id: 1, title: 'Weekly Test - Current Affairs', date: 'Jan 15, 2024', duration: '2 hours' },
    { id: 2, title: 'Full Length Mock Test', date: 'Jan 20, 2024', duration: '3 hours' },
  ];

  // Mock study materials
  const studyMaterials = [
    { id: 1, title: 'Indian Polity - Complete Notes', type: 'PDF', subject: 'Polity' },
    { id: 2, title: 'Modern History - Timeline', type: 'PDF', subject: 'History' },
    { id: 3, title: 'Environment & Ecology - Current Affairs', type: 'PDF', subject: 'Environment' },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-blue-700'} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, {user?.name || 'Student'}!</h1>
              <p className="mt-2 text-blue-100">Track your progress and continue learning</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                to="/courses" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard 
            title="Enrolled Courses" 
            value="3" 
            subtitle="Active courses" 
            icon={BookOpenIcon} 
            color="blue"
            trend={{ type: 'up', value: 25 }}
          />
          <StatsCard 
            title="Average Score" 
            value="78%" 
            subtitle="Last 10 tests" 
            icon={ChartBarIcon} 
            color="green"
            trend={{ type: 'up', value: 12 }}
          />
          <StatsCard 
            title="Study Hours" 
            value="124" 
            subtitle="This month" 
            icon={ClockIcon} 
            color="yellow"
            trend={{ type: 'up', value: 8 }}
          />
          <StatsCard 
            title="Rank" 
            value="#42" 
            subtitle="All India" 
            icon={TrophyIcon} 
            color="purple"
            trend={{ type: 'up', value: 5 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Progress Chart */}
          <div className="lg:col-span-2">
            <ProgressChart 
              title="Performance Overview" 
              type="line" 
              color="blue"
              height={250}
            />
          </div>
          
          {/* Activity Feed */}
          <div>
            <ActivityFeed limit={5} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enrolled Courses */}
          <div className="lg:col-span-2">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg`}>
              <div className={`px-4 py-5 sm:px-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className={`text-lg leading-6 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>My Courses</h3>
                <p className={`mt-1 max-w-2xl text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Your enrolled courses and progress</p>
              </div>
              <div className={`divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="px-4 py-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-md font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{course.title}</h4>
                      <span className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                        {course.progress}% Complete
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center text-sm text-gray-500">
                      <CalendarIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      <p>Next: {course.nextClass} at {course.nextClassTime}</p>
                    </div>
                    <div className="mt-3">
                      <Link
                        to={`/courses/${course.id}`}
                        className="text-sm font-medium text-blue-600 hover:text-blue-500"
                      >
                        Continue Learning <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} px-4 py-4 sm:px-6 text-right`}>
                <Link
                  to="/courses"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  View all courses<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <UpcomingEvents limit={3} />
          </div>
        </div>

        {/* Study Materials */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg mb-8`}>
          <div className={`px-4 py-5 sm:px-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className={`text-lg leading-6 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Recommended Study Materials</h3>
            <p className={`mt-1 max-w-2xl text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Materials to help you prepare better</p>
          </div>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden`}>
            <ul className={`divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
              {studyMaterials.map((material) => (
                <li key={material.id} className={`px-4 py-4 sm:px-6 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DocumentTextIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-blue-600 truncate">{material.title}</p>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{material.type} • {material.subject}</p>
                      </div>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <button
                        type="button"
                        className={`ml-2 inline-flex items-center px-3 py-1.5 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} px-4 py-4 sm:px-6 text-right`}>
            <Link
              to="/study-materials"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              View all materials<span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg`}>
          <div className={`px-4 py-5 sm:px-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className={`text-lg leading-6 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quick Actions</h3>
          </div>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="p-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                to="/test-series"
                className={`px-4 py-5 ${darkMode ? 'bg-gray-700 border-gray-600 hover:border-blue-400' : 'bg-white border-gray-200 hover:border-blue-500'} border rounded-lg shadow-sm transition-colors duration-200`}
              >
                <div className="flex items-center">
                  <div className={`flex-shrink-0 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} rounded-md p-3`}>
                    <BookOpenIcon className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Take a Test</h4>
                    <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Practice with our test series</p>
                  </div>
                </div>
              </Link>

              <Link
                to="/doubt-solving"
                className={`px-4 py-5 ${darkMode ? 'bg-gray-700 border-gray-600 hover:border-green-400' : 'bg-white border-gray-200 hover:border-green-500'} border rounded-lg shadow-sm transition-colors duration-200`}
              >
                <div className="flex items-center">
                  <div className={`flex-shrink-0 ${darkMode ? 'bg-green-900/30' : 'bg-green-100'} rounded-md p-3`}>
                    <UserGroupIcon className={`h-6 w-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Ask a Doubt</h4>
                    <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Get your doubts cleared by experts</p>
                  </div>
                </div>
              </Link>

              <Link
                to="/performance"
                className={`px-4 py-5 ${darkMode ? 'bg-gray-700 border-gray-600 hover:border-yellow-400' : 'bg-white border-gray-200 hover:border-yellow-500'} border rounded-lg shadow-sm transition-colors duration-200`}
              >
                <div className="flex items-center">
                  <div className={`flex-shrink-0 ${darkMode ? 'bg-yellow-900/30' : 'bg-yellow-100'} rounded-md p-3`}>
                    <ChartBarIcon className={`h-6 w-6 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>View Performance</h4>
                    <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Track your progress and analytics</p>
                  </div>
                </div>
              </Link>

              <Link
                to="/study-planner"
                className={`px-4 py-5 ${darkMode ? 'bg-gray-700 border-gray-600 hover:border-purple-400' : 'bg-white border-gray-200 hover:border-purple-500'} border rounded-lg shadow-sm transition-colors duration-200`}
              >
                <div className="flex items-center">
                  <div className={`flex-shrink-0 ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100'} rounded-md p-3`}>
                    <CalendarIcon className={`h-6 w-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Study Planner</h4>
                    <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Plan your study schedule</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
