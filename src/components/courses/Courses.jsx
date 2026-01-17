import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpenIcon, 
  AcademicCapIcon, 
  ChartBarIcon, 
  UsersIcon 
} from '@heroicons/react/24/outline';

const courses = [
  {
    id: 1,
    name: 'GS Foundation Course',
    description: 'Comprehensive coverage of General Studies papers with a focus on conceptual clarity and answer writing practice.',
    duration: '12 Months',
    icon: BookOpenIcon,
    path: '/courses/gs-foundation'
  },
  {
    id: 2,
    name: 'Prelims + Mains',
    description: 'Integrated program covering both Preliminary and Mains examination with test series and answer writing practice.',
    duration: '18 Months',
    icon: AcademicCapIcon,
    path: '/courses/prelims-mains'
  },
  {
    id: 3,
    name: 'Optional Subjects',
    description: 'Expert guidance for optional subjects with comprehensive study material and test series.',
    duration: '10 Months',
    icon: ChartBarIcon,
    path: '/courses/optional'
  },
  {
    id: 4,
    name: 'Interview Guidance',
    description: 'Personality test preparation with mock interviews and one-on-one mentoring by experts.',
    duration: '2 Months',
    icon: UsersIcon,
    path: '/courses/interview'
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to help you excel in all stages of the UPSC examination.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-600 transition-colors duration-300">
                <course.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{course.name}</h3>
              <p className="text-gray-600 mb-6 text-center text-sm flex-grow leading-relaxed">
                {course.description}
              </p>

              {/* Duration & Link */}
              <div className="mt-auto border-t pt-4">
                <div className="flex items-center justify-center text-xs text-gray-500 mb-4">
                  <span className="font-semibold uppercase tracking-wider mr-1">Duration:</span> {course.duration}
                </div>
                
                <div className="text-center">
                  <Link
                    to={course.path}
                    className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center text-sm transition-colors"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center justify-center px-10 py-3 border border-transparent text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-200 transition-all duration-200"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;