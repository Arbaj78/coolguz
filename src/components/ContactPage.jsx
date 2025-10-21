// src/components/ContactPage.jsx
import React, { useState, useEffect } from 'react';
import { Mail, Clock } from 'lucide-react';


const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', address: '', message: '' });
  const [status, setStatus] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const url = "https://n8n.srv871973.hstgr.cloud/webhook/contact-page"; // your webhook

  useEffect(() => { setIsLoaded(true); window.dispatchEvent(new Event('prerender-ready')); }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    const { name, email, mobile, address, message } = formData;
    if (!name || !email || !mobile || !address || !message) {
      setStatus('Please fill in all fields.');
      return false;
    }
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) { setStatus('Please enter a valid email address.'); return false; }
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) { setStatus('Please enter a valid 10-digit mobile number.'); return false; }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus('Sending...');
    try {
      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (!res.ok) throw new Error('Network response not ok');
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', mobile: '', address: '', message: '' });
    } catch (err) {
      console.error('Contact POST error', err);
      setStatus('Error sending message. Please try again later.');
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
    

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center shadow-lg">
              <Mail className="w-5 h-5 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <p className="text-gray-700 max-w-md mx-auto text-base md:text-lg">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 hover:border-orange-300 transition-all">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Name</label>
                    <input name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-black" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Email</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-black" placeholder="you@email.com" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Phone</label>
                    <input name="mobile" type="tel" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-black" placeholder="1234567890" required />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Address</label>
                    <input name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-black" placeholder="Your address" required />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-black" placeholder="Your message..." required />
                </div>

                <button type="submit" disabled={status === 'Sending...'} className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-600 transition-all shadow-md disabled:opacity-70 flex items-center justify-center">
                  {status === 'Sending...' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>

                {status && status !== 'Sending...' && (
                  <div className={`p-3 rounded-lg text-center ${status.toLowerCase().includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="mt-1 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Email</h4>
                    <p className="text-gray-600">fatcamelteam@gmail.com</p>
                    <p className="text-gray-600">Basant.choudharynz@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="mt-1 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Hours</h4>
                    <p className="text-gray-600">Monday - Friday</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM</p>
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
