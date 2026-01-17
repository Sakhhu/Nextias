import React, { useState } from 'react';
import { 
  BookOpenIcon, 
  ClockIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  CalendarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { StarIcon as SolidStarIcon } from '@heroicons/react/24/solid';

const TestSeries = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  const testSeries = [
    {
      id: 1,
      title: 'Prelims Test Series',
      description: 'Comprehensive test series for UPSC Prelims with detailed solutions and performance analysis.',
      icon: <BookOpenIcon className="h-8 w-8 text-blue-600" />,
      features: [
        '40+ Full Length Tests',
        'Sectional & Subject-wise Tests',
        'Current Affairs Coverage',
        'Previous Year Questions',
      ],
      price: '₹9,999',
      originalPrice: '₹14,999',
      discount: '33% OFF',
    },
    {
      id: 2,
      title: 'Mains Test Series',
      description: 'Structured test series for UPSC Mains with model answers and one-to-one evaluation.',
      icon: <ChartBarIcon className="h-8 w-8 text-blue-600" />,
      features: [
        '20+ Tests (Sectional & Full Length)',
        'Detailed Evaluation',
        'Model Answers',
        'Answer Writing Practice',
      ],
      price: '₹14,999',
      originalPrice: '₹19,999',
      discount: '25% OFF',
      popular: true,
    },
    {
      id: 3,
      title: 'Prelims + Mains Combo',
      description: 'Complete test series package covering both Prelims and Mains with comprehensive study material.',
      icon: <UserGroupIcon className="h-8 w-8 text-blue-600" />,
      features: [
        '60+ Tests Total',
        'Prelims & Mains Coverage',
        'Personal Mentorship',
        'Doubt Clearing Sessions',
      ],
      price: '₹19,999',
      originalPrice: '₹29,999',
      discount: '33% OFF',
      bestValue: true,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      rank: 'AIR 24, UPSC 2023',
      content: 'The test series was instrumental in my preparation. The detailed analysis helped me identify my weak areas and improve my score significantly.',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Patel',
      rank: 'AIR 56, UPSC 2023',
      content: 'The quality of questions was excellent and very close to the actual UPSC pattern. The mentor support was exceptional.',
      rating: 5
    },
    {
      id: 3,
      name: 'Amit Kumar',
      rank: 'AIR 89, UPSC 2023',
      content: 'The test series covered all important topics and the answer explanations were very detailed. Highly recommended!',
      rating: 4
    }
  ];

  const schedule = [
    { week: 'Week 1-4', topic: 'Prelims GS Paper I - Indian Polity & Governance' },
    { week: 'Week 5-8', topic: 'Prelims GS Paper I - History & Culture' },
    { week: 'Week 9-12', topic: 'Prelims GS Paper I - Geography' },
    { week: 'Week 13-16', topic: 'Prelims GS Paper I - Economy' },
    { week: 'Week 17-20', topic: 'Prelims GS Paper I - Environment & Ecology' },
    { week: 'Week 21-24', topic: 'Prelims GS Paper I - Science & Technology' },
    { week: 'Week 25-28', topic: 'Full Length Mock Tests & Revision' },
  ];

  const faqs = [
    {
      question: 'How is this test series different from others?',
      answer: 'Our test series is designed by UPSC experts and toppers, focusing on the latest pattern and difficulty level. We provide detailed solutions, performance analysis, and personalized feedback.'
    },
    {
      question: 'Can I access the tests on mobile?',
      answer: 'Yes, our platform is fully responsive and can be accessed on mobile, tablet, and desktop devices.'
    },
    {
      question: 'Is there any validity period for the test series?',
      answer: 'The test series is valid for 1 year from the date of purchase. You can attempt the tests anytime during this period.'
    },
    {
      question: 'Will I get solutions to the tests?',
      answer: 'Yes, detailed solutions with explanations are provided for all tests. You can also discuss your doubts with our mentors.'
    },
    {
      question: 'How are the tests evaluated?',
      answer: 'Tests are evaluated based on UPSC standards. You will receive a detailed performance report with All India ranking, subject-wise analysis, and improvement areas.'
    }
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      i < rating ? 
      <SolidStarIcon key={i} className="h-5 w-5 text-yellow-400" /> : 
      <StarIcon key={i} className="h-5 w-5 text-gray-300" />
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">UPSC Test Series</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive test series designed by experts to help you ace the UPSC examination with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testSeries.map((test) => (
            <div 
              key={test.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
                test.popular ? 'ring-2 ring-blue-600 transform -translate-y-2' : ''
              } ${test.bestValue ? 'border-2 border-yellow-400' : ''}`}
            >
              {test.popular && (
                <div className="bg-blue-600 text-white text-center py-1 text-sm font-medium">
                  MOST POPULAR
                </div>
              )}
              {test.bestValue && (
                <div className="bg-yellow-400 text-gray-900 text-center py-1 text-sm font-medium">
                  BEST VALUE
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50">
                  {test.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-2">{test.title}</h3>
                <p className="text-gray-600 text-center mb-6">{test.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{test.price}</span>
                  <span className="ml-2 text-gray-500 line-through">{test.originalPrice}</span>
                  <span className="ml-2 text-green-600 font-medium">{test.discount}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {test.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Test Series?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600">
                <ClockIcon className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Real Exam Simulation</h4>
              <p className="text-gray-600">Tests designed to simulate the actual UPSC exam pattern and difficulty level.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600">
                <UserGroupIcon className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Evaluation</h4>
              <p className="text-gray-600">Detailed evaluation and feedback from experienced mentors.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600">
                <ChartBarIcon className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Performance Analysis</h4>
              <p className="text-gray-600">Comprehensive performance reports with All India ranking.</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600">{testimonial.rank}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Section */}
        <div className="mt-20 bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Test Series Schedule</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-start border-l-4 border-blue-500 pl-4 py-2 hover:bg-gray-50 transition-colors duration-200 rounded-r">
                    <div className="w-24 font-medium text-gray-700">{item.week}</div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <CalendarIcon className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-gray-800">{item.topic}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4 pt-2 bg-gray-50 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Ace Your UPSC Preparation?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of successful candidates who have cleared UPSC with our comprehensive test series.</p>
            <button className="bg-white text-blue-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md text-lg transition-colors duration-300">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestSeries;
