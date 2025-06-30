import React, { useState, useEffect } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const backendUrl = "http://localhost:3001/submit-contact";

  useEffect(() => {
    setIsLoaded(true);
    
    // Continuous typewriter effect
    const text = "Get in Touch";
    let index = 0;
    let isDeleting = false;
    
    const typeWriter = () => {
      if (!isDeleting && index <= text.length) {
        setTypewriterText(text.slice(0, index));
        index++;
      } else if (isDeleting && index >= 0) {
        setTypewriterText(text.slice(0, index));
        index--;
      }
      
      if (index === text.length + 1) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000); // Wait 2 seconds before deleting
      }
      
      if (index === -1) {
        isDeleting = false;
        index = 0;
      }
      
      const speed = isDeleting ? 100 : 150;
      setTimeout(typeWriter, speed);
    };
    
    typeWriter();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, mobile, address, message } = formData;
    if (!name || !email || !mobile || !address || !message) {
      setStatus('Please fill in all fields.');
      return false;
    }
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setStatus('Please enter a valid email address.');
      return false;
    }
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
      setStatus('Please enter a valid 10-digit mobile number.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('Sending...');

    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! status: ${response.status}, Details: ${errorData.message || JSON.stringify(errorData)}`);
      }
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', mobile: '', address: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus(`Error sending message. Details: ${error.message}. Please try again later.`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300 via-blue-200 to-orange-400 relative overflow-hidden">
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-orange-200 to-orange-500 opacity-80"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-40 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 drop-shadow-lg">
            {typewriterText}<span className="animate-pulse">|</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-600 to-orange-700 mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className={`lg:col-span-2 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="backdrop-blur-xl bg-white bg-opacity-20 p-8 rounded-3xl border border-white border-opacity-30 shadow-2xl hover:shadow-orange-600 hover:shadow-opacity-20 transition-all duration-500 hover:bg-white hover:bg-opacity-30">
              <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-md">
                Send us a message
              </h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-white text-opacity-90 mb-2 font-medium drop-shadow-sm">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl text-gray-800 placeholder-gray-600 focus:border-orange-600 focus:bg-white focus:bg-opacity-40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 backdrop-blur-sm"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-white text-opacity-90 mb-2 font-medium drop-shadow-sm">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl text-gray-800 placeholder-gray-600 focus:border-orange-600 focus:bg-white focus:bg-opacity-40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 backdrop-blur-sm"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-white text-opacity-90 mb-2 font-medium drop-shadow-sm">Mobile</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl text-gray-800 placeholder-gray-600 focus:border-orange-600 focus:bg-white focus:bg-opacity-40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 backdrop-blur-sm"
                      placeholder="1234567890"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-white text-opacity-90 mb-2 font-medium drop-shadow-sm">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl text-gray-800 placeholder-gray-600 focus:border-orange-600 focus:bg-white focus:bg-opacity-40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 backdrop-blur-sm"
                      placeholder="Your Address"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-white text-opacity-90 mb-2 font-medium drop-shadow-sm">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-4 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl text-gray-800 placeholder-gray-600 focus:border-orange-600 focus:bg-white focus:bg-opacity-40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 resize-none backdrop-blur-sm"
                    placeholder="Enter your message..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={status === 'Sending...'}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-orange-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-600 hover:shadow-opacity-40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {status === 'Sending...' ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-opacity-30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

              {status && status !== 'Sending...' && (
                <div className={`mt-6 p-4 rounded-xl text-center font-medium transition-all duration-300 backdrop-blur-sm ${
                  status.includes('successfully') 
                    ? 'bg-green-500 bg-opacity-30 text-green-800 border border-green-500 border-opacity-50' 
                    : 'bg-red-500 bg-opacity-30 text-red-800 border border-red-500 border-opacity-50'
                }`}>
                  {status}
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className={`transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="backdrop-blur-xl bg-white bg-opacity-20 p-8 rounded-3xl border border-white border-opacity-30 shadow-2xl hover:shadow-orange-600 hover:shadow-opacity-20 transition-all duration-500 hover:bg-white hover:bg-opacity-30 h-fit">
              <h2 className="text-2xl font-bold text-white mb-8 drop-shadow-md">
                Contact Info
              </h2>
              
              <div className="space-y-8">
                <div className="group hover:bg-white hover:bg-opacity-20 p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-sm">Email</h3>
                      <p className="text-white text-opacity-80 hover:text-orange-600 transition-colors cursor-pointer">Teamcoolguyz@gmail.com</p>
                      <p className="text-white text-opacity-80 hover:text-orange-600 transition-colors cursor-pointer">Basant.choudharynz@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="group hover:bg-white hover:bg-opacity-20 p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-sm">Office</h3>
                      <p className="text-white text-opacity-80">123 Main Street</p>
                      <p className="text-white text-opacity-80">Anytown, USA 12345</p>
                    </div>
                  </div>
                </div>

                <div className="group hover:bg-white hover:bg-opacity-20 p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-sm">Hours</h3>
                      <p className="text-white text-opacity-80">Monday - Friday</p>
                      <p className="text-white text-opacity-80">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;