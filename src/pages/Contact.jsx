const Contact = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Get in Touch</h1>
            <p className="text-gray-600 mb-8">Have questions about our UPSC batches? Reach out to us!</p>
            <div className="space-y-4">
              <p className="flex items-center text-gray-700"><strong>📍 Address:</strong> Old Rajinder Nagar, Delhi</p>
              <p className="flex items-center text-gray-700"><strong>📞 Phone:</strong> 1800 102 4157</p>
              <p className="flex items-center text-gray-700"><strong>✉️ Email:</strong> info@nextias.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="grid gap-4">
              <input type="text" placeholder="Your Name" className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
              <input type="email" placeholder="Email Address" className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
              <textarea placeholder="Your Message" rows="4" className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
              <button className="bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700 transition">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;