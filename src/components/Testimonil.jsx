import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { testimonials, getCloudinaryVideoUrl } from "../config/testimonialData";

// --- SVG Icons ---
const PlayIcon = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5V19L19 12L8 5Z" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
const MuteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 4L8 8H4v8h4l4 4V4zm4.5 8c0-1.7-1.27-3.1-2.9-3.53m5.8 7.06c.6-.75.93-1.6.93-2.53 0-2.76-1.76-5.1-4.2-6M19.8 4.2L4.2 19.8"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const UnmuteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 8c1.84.78 3 2.36 3 4.18s-1.16 3.4-3 4.18M12 4L8 8H4v8h4l4 4V4z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Testimonial = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const scrollTimeoutRef = useRef(null);

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // --- Scroll Animation Control ---
  const startScroll = async () => {
    await controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, duration: 40, ease: "linear" },
    });
  };

  const stopScroll = () => {
    controls.stop();
  };

  useEffect(() => {
    startScroll();
  }, []);

  // --- Pause scroll when user manually scrolls ---
  const handleManualScroll = () => {
    stopScroll();
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => startScroll(), 3000); // resume after 3s
  };

  // --- Video controls ---
  const handleVideoClick = (index) => {
    if (currentlyPlaying !== null && currentlyPlaying !== index) {
      videoRefs.current[currentlyPlaying]?.pause();
    }

    const currentVideo = videoRefs.current[index];
    if (currentVideo) {
      if (currentVideo.paused) {
        currentVideo.play();
        currentVideo.muted = false;
        setIsMuted(false);
        setCurrentlyPlaying(index);
        stopScroll(); // stop auto scroll when playing
      } else {
        currentVideo.pause();
        setCurrentlyPlaying(null);
        startScroll(); // resume scroll
      }
    }
  };

  const handleMuteToggle = (e) => {
    e.stopPropagation();
    const video = videoRefs.current[currentlyPlaying];
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            Client Testimonials
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-600"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear what our clients say about our services and solutions
          </p>
        </motion.div>

        {/* Scrollable + Animated container */}
        <div
          ref={containerRef}
          onScroll={handleManualScroll}
          className="relative w-full overflow-x-auto scroll-smooth flex gap-6"
          style={{ scrollbarWidth: "none" }}
        >
          <motion.div className="flex gap-6" animate={controls}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw]"
              >
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                  <div
                    className="w-full h-64 relative overflow-hidden group cursor-pointer"
                    onClick={() => handleVideoClick(index)}
                  >
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      poster={`https://res.cloudinary.com/daank7fpj/video/upload/so_0/q_auto,f_auto/${testimonial.videoPublicId}.jpg`}
                      loop
                      playsInline
                      muted
                      controlsList="nodownload nofullscreen noremoteplayback"
                      className="w-full h-full object-cover"
                    >
                      <source src={getCloudinaryVideoUrl(testimonial.videoPublicId)} type="video/mp4" />
                    </video>

                    {currentlyPlaying !== index && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PlayIcon />
                      </div>
                    )}

                    {currentlyPlaying === index && (
                      <div className="absolute bottom-3 right-3 z-10">
                        <button
                          className="bg-black/50 p-2 rounded-full hover:bg-black/75"
                          onClick={handleMuteToggle}
                        >
                          {isMuted ? <MuteIcon /> : <UnmuteIcon />}
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="p-6 text-center flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-orange-500 mb-2">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400 italic mb-4 whitespace-normal">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-300 mb-4 whitespace-normal">"{testimonial.quote}"</p>
                    </div>
                    <div className="text-orange-500 text-lg mt-4">★★★★★</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .overflow-x-auto::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default Testimonial;
