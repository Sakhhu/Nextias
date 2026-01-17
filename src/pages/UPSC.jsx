import React from 'react';
import { BookOpenIcon, DocumentTextIcon, AcademicCapIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const UPSC = () => {
  const resources = [
    {
      title: "Syllabus & Strategy",
      description: "Detailed breakdown of Prelims and Mains syllabus with recommended booklists.",
      icon: <BookOpenIcon className="h-8 w-8 text-blue-600" />,
      items: ["Prelims Syllabus", "Mains Syllabus", "Optional Subjects List"]
    },
    {
      title: "Previous Year Papers",
      description: "Download UPSC CSE Previous Year Question papers from 2015 to 2025.",
      icon: <DocumentTextIcon className="h-8 w-8 text-orange-500" />,
      items: ["GS Paper I (Prelims)", "CSAT Paper", "Mains GS 1-4"]
    },
    {
      title: "Study Material",
      description: "Subject-wise comprehensive notes curated by NEXT IAS experts.",
      icon: <AcademicCapIcon className="h-8 w-8 text-green-600" />,
      items: ["Indian Polity", "Modern History", "Geography & Environment"]
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-white text-center mb-16 shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">UPSC Preparation Hub</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Everything you need to crack the Civil Services Examination in one place.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-300 transition-all group">
              <div className="mb-4">{resource.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{resource.title}</h3>
              <p className="text-gray-600 mb-6">{resource.description}</p>
              
              <ul className="space-y-3">
                {resource.items.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between text-sm font-medium text-gray-700 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                    {item}
                    <ArrowDownTrayIcon className="h-4 w-4 text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="mt-16 text-center p-8 border-2 border-dashed border-gray-200 rounded-2xl">
          <h4 className="text-lg font-semibold text-gray-800">New Resources Added Weekly</h4>
          <p className="text-gray-500">Stay updated with the latest Current Affairs and Monthly Magazines.</p>
          <button className="mt-4 text-blue-600 font-bold hover:underline">Subscribe to Newsletter</button>
        </div>
      </div>
    </div>
  );
};

export default UPSC;