import { useEffect, useRef } from "react";
import testimonialVideo from "../assets/testimonial-video1.mp4";


const Testimonial = () => {
  const videoRefs = useRef([]);
  const playButtonRefs = useRef([]);
  const containerRef = useRef(null);
  const dotRefs = useRef([]);

  useEffect(() => {
    // Initialize video play functionality
    const playButtons = playButtonRefs.current;
    const videos = videoRefs.current;

    const handlePlayButtonClick = (index) => {
      const video = videos[index];
      
      if (video.paused) {
        video.play();
        playButtons[index].style.opacity = '0';
      } else {
        video.pause();
        playButtons[index].style.opacity = '0.9';
      }
    };

    playButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => handlePlayButtonClick(index));
    });

    // Auto-play videos when in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const videoContainer = entry.target;
        const video = videoContainer.querySelector('video');
        const btn = videoContainer.querySelector('.play-btn');
        
        if (entry.isIntersecting) {
          video.play();
          btn.style.opacity = '0';
        } else {
          video.pause();
          btn.style.opacity = '0.9';
        }
      });
    }, { threshold: 0.8 });

    const videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(container => {
      observer.observe(container);
    });

    // Dot navigation functionality
    const container = containerRef.current;
    const dots = dotRefs.current;

    const updateActiveDot = () => {
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.firstChild?.offsetWidth || 0;
      const activeIndex = Math.round(scrollPosition / cardWidth);
      
      dots.forEach((dot, index) => {
        if (index === activeIndex) {
          dot.classList.add('bg-orange-600', 'scale-125');
          dot.classList.remove('bg-gray-700');
        } else {
          dot.classList.remove('bg-orange-600', 'scale-125');
          dot.classList.add('bg-gray-700');
        }
      });
    };

    container.addEventListener('scroll', updateActiveDot);

    // Click on dot to scroll to corresponding card
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        const cardWidth = container.firstChild?.offsetWidth || 0;
        container.scrollTo({
          left: cardWidth * index,
          behavior: 'smooth'
        });
      });
    });

    return () => {
      playButtons.forEach((btn, index) => {
        if (btn) {
          btn.removeEventListener('click', () => handlePlayButtonClick(index));
        }
      });
      videoContainers.forEach(container => {
        observer.unobserve(container);
      });
      container.removeEventListener('scroll', updateActiveDot);
    };
  }, []);

  const testimonials = [
    {
      name: "Oliver Trace ",
      role: "CEO,2050 cards",
      quote: "Working with this team transformed our business. Their expertise and dedication are unmatched.",
      videoSrc: testimonialVideo
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, Global Brands",
      quote: "The results we achieved exceeded all our expectations. Highly recommended!",
      videoSrc: "https://placehold.co/800x450/111/FF8C00?text=Image+Placeholder+2"
    },
    {
      name: "Emma Rodriguez",
      role: "Founder, Creative Studio",
      quote: "Professional, creative, and delivered ahead of schedule. Will work with them again.",
      videoSrc: "https://placehold.co/800x450/111/FF8C00?text=Image+Placeholder+3"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            Client Testimonials
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-600"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Hear what our clients say about our services and solutions</p>
        </div>
        
        {/* Testimonials Container */}
        <div 
          ref={containerRef}
          className="flex gap-6 pb-6 overflow-x-auto snap-x snap-mandatory scroll-smooth whitespace-nowrap"
          style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none' // IE/Edge
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] snap-center"
            >
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div 
                  className="video-container w-full h-64 relative overflow-hidden"
                  ref={el => videoRefs.current[index] = el?.querySelector('video')}
                >
                  <video 
                    poster={`https://placehold.co/800x450/111/FF8C00?text=${encodeURIComponent(testimonial.name)}`}
                    muted 
                    loop
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  >
                    <source src={testimonial.videoSrc} type="video/mp4" />
                  </video>
                  <div 
                    className="play-btn absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-orange-600/90 rounded-full flex items-center justify-center cursor-pointer opacity-90 hover:bg-orange-600 hover:scale-110 transition-all duration-300"
                    ref={el => playButtonRefs.current[index] = el}
                  >
                    <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[20px] border-l-white border-b-[15px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                
                <div className="p-6 text-center flex-grow">
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400 italic mb-4 whitespace-normal">{testimonial.role}</p>
                  <p className="text-gray-300 mb-4 whitespace-normal">"{testimonial.quote}"</p>
                  <div className="text-orange-500 text-lg">★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              ref={el => dotRefs.current[index] = el}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === 0 ? 'bg-orange-600 scale-125' : 'bg-gray-700'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll hint for mobile */}
        <div className="mt-4 text-center text-gray-400 text-sm md:hidden">
          ← Scroll to view more →
        </div>
      </div>

      {/* Custom styles for scrollbar hiding */}
      <style>{`
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-center {
          scroll-snap-align: center;
        }
        .scroll-smooth {
          scroll-behavior: smooth;
        }
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;