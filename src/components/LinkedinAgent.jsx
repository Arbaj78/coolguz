import { useState } from 'react';

const LinkedinAgent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://n8n.srv871973.hstgr.cloud/webhook/redirect_url', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          name: formData.name.trim(), 
          email: formData.email.trim() 
        }),
      });

      // First check if we got any response at all
      if (!response) {
        throw new Error('No response from server');
      }

      // Clone the response to read it multiple times if needed
      const responseClone = response.clone();
      
      // First try to parse as JSON
      try {
        const data = await response.json();
        console.log("Response data:", data);
        
        if (data.link) {
          // Try popup first
          const popup = window.open(
            '',
            'authPopup',
            'width=500,height=600,menubar=no,toolbar=no,location=no,status=no,resizable=no,scrollbars=no'
          );
          
          if (popup) {
            popup.location.href = data.link;
          } else {
            // Fallback to regular redirect
            window.location.href = data.link;
          }
          return;
        } else {
          throw new Error('No redirect link in response');
        }
      } catch (jsonError) {
        console.log("JSON parse failed, trying as text");
        // If JSON parse fails, try reading as text
        const textResponse = await responseClone.text();
        console.log("Text response:", textResponse);
        
        // Try to see if it's JSON but with wrong headers
        try {
          const possibleJson = JSON.parse(textResponse);
          if (possibleJson.link) {
            window.open(possibleJson.link, 'authPopup');
            return;
          }
        } catch (e) {
          // Not JSON
        }
        
        // Check if text is a URL
        if (textResponse.startsWith('http')) {
          window.open(textResponse, 'authPopup');
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

  return (
    <div className="min-h-screen bg-[#ffb477] flex flex-col items-center justify-center p-4">
      <div className="mb-8">
        <img
          src="https://coolguyz.ai/assets/logocool-utCwHBj5.png"
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
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffb477] text-center"
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffb477] text-center"
            />
          </div>
          
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