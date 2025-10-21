import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo-dark.svg';

const LinkedinAgent = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const popupRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    const webhookId = Math.floor(10000000 + Math.random() * 90000000).toString();

    try {
      const response = await fetch('https://n8n.srv871973.hstgr.cloud/webhook/redirect_url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          webhookId,
        }),
      });

      if (!response) throw new Error('No response from server');
      const responseClone = response.clone();

      try {
        const data = await response.json();
        if (data.link && data.link.startsWith('http')) {
          openPopup(data.link, webhookId);
        } else {
          throw new Error('No redirect link in response');
        }
      } catch {
        const textResponse = await responseClone.text();
        try {
          const possibleJson = JSON.parse(textResponse);
          if (possibleJson.link) {
            openPopup(possibleJson.link, webhookId);
            return;
          }
        } catch {}

        if (textResponse.startsWith('http')) {
          openPopup(textResponse, webhookId);
          return;
        }

        throw new Error(`Unexpected response: ${textResponse}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const openPopup = (link, webhookId) => {
    const popup = window.open(
      '',
      'authPopup',
      'width=500,height=600,menubar=no,toolbar=no,location=no,status=no,resizable=no,scrollbars=no'
    );

    if (popup) {
      popup.location.href = link;
      popupRef.current = popup;
      startPolling(webhookId);
    } else {
      window.location.href = link;
    }
  };

  const startPolling = (id) => {
    let attempts = 0;
    const maxAttempts = 20;

    const pollInterval = setInterval(async () => {
      attempts++;
      if (attempts > maxAttempts) {
        clearInterval(pollInterval);
        setError('Login timed out. Please try again.');
        if (popupRef.current) popupRef.current.close();
        return;
      }

      try {
        const response = await fetch(`https://your-backend-url.onrender.com/webhook-status/${id}`);
        const data = await response.json();

        if (data.received) {
          clearInterval(pollInterval);
          if (popupRef.current) {
            popupRef.current.close();
            popupRef.current = null;
          }
          console.log('Webhook received, popup closed.');
        }
      } catch (error) {
        console.error('Polling error:', error);
        clearInterval(pollInterval);
      }
    }, 3000);
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (popupRef.current) popupRef.current.close();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <div className="min-h-screen bg-[#ffb477] flex flex-col items-center justify-center p-4">
  
      <div className="mb-8">
        <img
          src={logo}
          alt="CoolGuyz Logo"
          className="w-44 mx-auto"
        />
      </div>

      <div className="bg-[#f77f27] p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-white text-2xl font-bold text-center mb-6">LinkedIn Agent</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffb477] text-center"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffb477] text-center"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-white text-[#f77f27] font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <span className="mr-2">Processing</span>
                <span className="animate-spin">😎</span>
              </>
            ) : (
              'Get Started'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LinkedinAgent;
