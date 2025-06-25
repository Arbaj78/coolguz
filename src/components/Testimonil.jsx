import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';
import Section from './Section';

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO, TechFlow Inc.",
      image: "/api/placeholder/300/300",
      rating: 5,
      text: "This AI platform has revolutionized how we handle data analysis. The accuracy and speed are phenomenal.",
      company: "TechFlow Inc.",
      videoThumbnail: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Data Scientist, InnovateLabs",
      image: "/api/placeholder/300/300",
      rating: 5,
      text: "The machine learning capabilities exceeded our expectations. Implementation was seamless and results immediate.",
      company: "InnovateLabs",
      videoThumbnail: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager, FutureGen",
      image: "/api/placeholder/300/300",
      rating: 5,
      text: "Outstanding AI solution that scaled perfectly with our growing business needs. Highly recommended!",
      company: "FutureGen",
      videoThumbnail: true
    },
    {
      id: 4,
      name: "David Kim",
      role: "AI Engineer, NextTech",
      image: "/api/placeholder/300/300",
      rating: 5,
      text: "The natural language processing features are incredibly sophisticated. A game-changer for our industry.",
      company: "NextTech",
      videoThumbnail: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, testimonials.length - 2)) % Math.max(1, testimonials.length - 2));
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section crosses className={"py-0"}>
        <div className="bg-black text-white py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">
            Curious how people are using our AI platform
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hear what our customers are saying
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-30 transition-all cursor-pointer">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={prevSlide}
              className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-400 mb-2">98%</div>
            <div className="text-gray-400 text-sm">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
            <div className="text-gray-400 text-sm">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-gray-400 text-sm">Companies Trust Us</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-400 text-sm">AI Support</div>
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default TestimonialSection;