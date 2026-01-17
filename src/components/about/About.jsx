import { BookOpenIcon, CheckCircleIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Expert Faculty',
    description: 'Learn from the best in the industry with years of experience in guiding UPSC aspirants.',
    icon: UserGroupIcon,
  },
  {
    name: 'Comprehensive Study Material',
    description: 'Well-researched and regularly updated study material covering the entire UPSC syllabus.',
    icon: BookOpenIcon,
  },
  {
    name: 'Proven Track Record',
    description: 'Consistent results with hundreds of successful candidates in the civil services.',
    icon: TrophyIcon,
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <img
                src="/about-image.jpg"
                alt="About Next IAS"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-lg shadow-lg hidden lg:block">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold">10+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-accent">Next IAS</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At Next IAS, we are committed to providing the best guidance and resources to help you succeed in the UPSC Civil Services Examination. Our comprehensive approach and expert faculty ensure that you are well-prepared for every stage of the examination.
            </p>
            
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.name} className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-secondary transition-colors duration-200"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
