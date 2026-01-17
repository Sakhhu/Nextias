import React from 'react';

const TestSeries = () => {
  const categories = [
    { id: 1, title: 'Prelims 2026', tests: '45 Tests', type: 'Objective', color: 'bg-blue-600' },
    { id: 2, title: 'Mains 2025', tests: '12 Tests', type: 'Subjective', color: 'bg-orange-500' },
    { id: 3, title: 'CSAT Special', tests: '15 Tests', type: 'Objective', color: 'bg-green-600' },
  ];

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">UPSC All India Test Series</h1>
          <p className="text-lg text-gray-600">
            Real-time exam experience with detailed performance analysis and All India Ranking.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
              <div className={`${item.color} h-3 text-white`}></div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{item.type}</span>
                <h3 className="text-2xl font-bold text-gray-800 mt-2">{item.title}</h3>
                <p className="text-blue-600 font-semibold mt-1">{item.tests}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  <li>• Detailed Video Solutions</li>
                  <li>• All India Performance Benchmarking</li>
                  <li>• Based on Latest UPSC Pattern</li>
                </ul>
                <button className="w-full mt-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                  View Schedule
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">Practice makes perfect.</h2>
            <p className="text-blue-100">Join over 50,000+ aspirants in the most trusted UPSC Test Series.</p>
          </div>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestSeries;