import React from 'react';
import basant from '../assets/basantJi.jpg';

const SubscribePage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailInput = e.target.email;
    if (emailInput.validity.valid) {
      alert('Thank you for subscribing with ' + emailInput.value.trim() + '!');
      emailInput.value = '';
    } else {
      alert('Please enter a valid email address.');
      emailInput.focus();
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#000000cc] grid place-items-center p-12 px-4">
      <main 
        className="container max-w-[380px] w-full text-center" 
        role="main" 
        aria-label="Subscribe to How to AI newsletter"
      >
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
        
        <h1 className="font-bold text-[1.6rem] mt-4 mb-1 text-[#000000dd]">How to AI</h1>
        <p className="font-normal text-base text-[#444444cc] my-0 mb-1">Master 'How to AI' with English, not code.</p>
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
            className="flex-grow w-full py-2.5 px-4 text-base border-none outline-offset-2 text-[#222] focus:outline focus:outline-3 focus:outline-[#ff6600] min-w-0"
            aria-label="Email address"
            placeholder="Type your email..."
            required
            autoComplete="email"
          />
          <button 
            type="submit"
            className="bg-[#ff6600] text-white border-none font-bold px-4 cursor-pointer text-base transition-all duration-300 hover:bg-[#e65c00] focus:bg-[#e65c00] whitespace-nowrap shrink-0"
          >
            Subscribe
          </button>
        </form>
      </main>
    </div>
  );
};

export default SubscribePage;