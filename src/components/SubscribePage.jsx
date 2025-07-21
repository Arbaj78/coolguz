import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- ✅ Step 1
import basant from '../assets/basantJi.jpg';

const SubscribePage = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // <-- ✅ Step 2

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailInput = e.target.email;
    const email = emailInput.value.trim();

    if (!emailInput.validity.valid) {
      setStatus('❌ Please enter a valid email address.');
      emailInput.focus();
      return;
    }

    setLoading(true);
    setStatus('');

    try {
      const response = await fetch("https://n8n.srv871973.hstgr.cloud/webhook/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setStatus(`✅ Thank you for subscribing with ${email}!`);
        emailInput.value = '';

        // ✅ Redirect to blog page after short delay (1.5 seconds)
        setTimeout(() => {
          navigate('/blog'); // change '/blog' if your route is different
        }, 1500);
      } else {
        setStatus('❌ Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting subscription:', error);
      setStatus('❌ Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#000000cc] grid place-items-center p-12 px-4">
      <main className="container max-w-[450px] w-full text-center" role="main">
        <div
          className="outline outline-3 outline-[#000000dd] inline-block rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#ff660055] hover:scale-105"
          aria-hidden="true"
        >
          <img
            className="w-40 h-40 object-cover bg-[#ff6600] block"
            src={basant}
            alt="basant"
          />
        </div>

        <h1 className="font-bold text-[1.6rem] mt-4 mb-1 text-[#000000dd]">The AI Playbook</h1>
        <p className="font-normal text-base text-[#444444cc] my-0 mb-1">Master AI. Stay ahead. Build what’s next</p>
        <p className="text-sm text-[#444444bb] my-0 mb-6 w-full">
          By <strong className="font-bold text-black">Basant Choudhary</strong> · Over 10,000 subscribers
        </p>

        <form
          id="subscribe-form"
          className="flex w-full max-w-full mx-auto mb-3 border-2 border-[#ff6600] rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-md hover:shadow-[#ff660055]"
          aria-label="Subscribe with your email"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            id="email"
            name="email"
            className="flex-grow w-full py-2.5 px-4 text-sm border-none outline-offset-2 text-[#e3d7d7] focus:outline focus:outline-3 focus:outline-[#ff6600] min-w-[200px]"
            aria-label="Email address"
            placeholder="Type your email..."
            required
            autoComplete="email"
          />
          <button
            type="submit"
            className="bg-[#ff6600] text-white border-none font-bold px-4 cursor-pointer text-base transition-all duration-300 hover:bg-[#e65c00] focus:bg-[#e65c00] whitespace-nowrap shrink-0"
            disabled={loading}
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {status && (
          <p className={`text-sm mt-2 ${status.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        )}
      </main>
    </div>
  );
};

export default SubscribePage;
