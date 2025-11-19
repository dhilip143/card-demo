import React, { useEffect, useRef } from "react";
import processorAnimation from "/src/assets/Processor.json";
import Lottie from "lottie-react";
const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;

export default function SectionTwo() {
  const sectionRef = useRef(null);

  // GSAP animation logic
  useEffect(() => {
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        });

        tl.fromTo(
          ".anim-text",
          { y: 60, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.15 }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex items-center px-6 sm:px-12 lg:px-16 bg-primary "
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-end gap-12">
        {/* --- Text Content --- */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <h2 className="anim-text font-semibold uppercase tracking-wider mb-3 text-base text-[#a8e6a3]">
            NFC Technology
          </h2>
          <h1 className="anim-text font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            NFC Chip
          </h1>
          <p className="anim-text text-gray-300 max-w-xl text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
            Customers use their phone to scan a chip embedded in your smart contactless business card. Their phone gets a notification with the link to your VistaConnect experience.
          </p>
          
          {/* NFC Features */}
          <div className="anim-text mb-8">
            <h3 className="text-white font-semibold text-lg sm:text-xl mb-4">
              NFC visiting card features
            </h3>
            <ul className="text-gray-300 space-y-2 text-left">
              <li className="flex items-start">
                <span className="text-[#a8e6a3] mr-2">•</span>
                Durable plastic material
              </li>
              <li className="flex items-start">
                <span className="text-[#a8e6a3] mr-2">•</span>
                Subtle & elegant design
              </li>
              <li className="flex items-start">
                <span className="text-[#a8e6a3] mr-2">•</span>
                Increasingly popular
              </li>
            </ul>
          </div>

          {/* Price Section */}
          <div className="anim-text mb-8">
            <p className="text-white font-semibold text-lg mb-2">
              Starting at <span className="text-[#a8e6a3]">₹750.00</span>
            </p>
          </div>

          <button className="anim-text px-6 sm:px-8 py-3 bg-[#a8e6a3] text-gray-900 font-semibold rounded-full hover:bg-[#98d893] transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#a8e6a3] shadow-lg">
            Browse NFC visiting card designs
          </button>
        </div>

        {/* --- Lottie Animation --- */}
        {/* <div className="flex items-center justify-center w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
          <Lottie
            animationData={processorAnimation}
            loop={true}
            autoplay={true}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:scale-125"
          />
        </div> */}
      </div>

      <style jsx>{`
      .bg-primary {
  background-color: #172d16;  /* Dark green background */
}

     .bg-secondary {
  background-color: #1a3319;  /* Slightly lighter green */
}

      `}</style>
    </section>
  );
}