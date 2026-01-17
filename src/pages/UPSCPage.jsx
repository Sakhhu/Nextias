import React from 'react';
import { BookOpenIcon, UserGroupIcon, ChartBarIcon, ClockIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const UPSCPage = () => {
  const features = [
    {
      title: 'Comprehensive Syllabus Coverage',
      description: 'Complete coverage of UPSC syllabus including GS, CSAT, and optional subjects.',
      icon: <BookOpenIcon className="h-8 w-8 text-blue-600" />
    },
    {
      title: 'Expert Faculty',
      description: 'Learn from experienced educators and former civil servants.',
      icon: <UserGroupIcon className="h-8 w-8 text-blue-600" />
    },
    {
      title: 'Performance Tracking',
      description: 'Detailed analysis and All India ranking in tests.',
      icon: <ChartBarIcon className="h-8 w-8 text-blue-600" />
    },
    {
      title: 'Flexible Learning',
      description: 'Access study material anytime, anywhere with our online platform.',
      icon: <ClockIcon className="h-8 w-8 text-blue-600" />
    },
    {
      title: 'Answer Writing Practice',
      description: 'Regular answer writing sessions with expert evaluation.',
      icon: <AcademicCapIcon className="h-8 w-8 text-blue-600" />
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">UPSC Civil Services Examination</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guidance and resources to help you crack the UPSC Civil Services Examination with confidence.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Exam Pattern */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">UPSC Exam Pattern</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900">Preliminary Examination</h3>
                <p className="text-gray-600">Objective type questions (MCQs) for screening candidates for Mains.</p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• General Studies Paper I</li>
                  <li>• CSAT (General Studies Paper II)</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900">Mains Examination</h3>
                <p className="text-gray-600">Descriptive type questions to test the candidate's academic expertise.</p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• Essay</li>
                  <li>• General Studies I-IV</li>
                  <li>• Optional Subject Paper I & II</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900">Personality Test (Interview)</h3>
                <p className="text-gray-600">Assessment of the candidate's personality traits and suitability for a career in civil services.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Start Your UPSC Journey Today</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">Join thousands of successful candidates who have cleared UPSC with our guidance.</p>
          <button className="bg-white text-blue-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md text-lg transition-colors duration-300">
            Explore Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default UPSCPage;
