"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const butterflyRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      timeline
        .from(".section-heading", {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power4.out",
        })
        .from(
          ".section-subtext",
          { opacity: 0, y: 40, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          ".section-feature",
          { opacity: 0, y: 40, duration: 1, ease: "power3.out", stagger: 0.2 },
          "-=0.5"
        )
        .from(
          ".section-btn",
          { opacity: 0, scale: 0.9, duration: 0.7, ease: "back.out(1.7)" },
          "-=0.4"
        )
        .from(
          ".section-stats",
          { opacity: 0, y: 30, duration: 1, ease: "power3.out", stagger: 0.2 },
          "-=0.3"
        );

      // Butterfly animation
      if (butterflyRef.current) {
        gsap.to(butterflyRef.current, {
          x: "random(-100, 100, 10)",
          y: "random(-50, 50, 10)",
          rotation: "random(-15, 15, 5)",
          duration: "random(3, 6, 0.5)",
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "1000+", label: "Happy Customers" },
    { number: "99%", label: "Satisfaction Rate" },
    { number: "0 App", label: "Required" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center font-sans overflow-hidden px-6 lg:px-12 py-16"
      style={{ backgroundColor: '#172d16' }}
    >
      {/* 3D Butterfly Background */}
      <div 
        ref={butterflyRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                d="M100,50 C120,30 150,40 150,70 C150,100 120,110 100,90 C80,110 50,100 50,70 C50,40 80,30 100,50 Z"
                fill="#E1F9DF"
              />
              <path
                d="M100,50 C120,30 150,40 150,70"
                stroke="#E1F9DF"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M100,90 C120,110 150,100 150,70"
                stroke="#E1F9DF"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M100,50 C80,30 50,40 50,70"
                stroke="#E1F9DF"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M100,90 C80,110 50,100 50,70"
                stroke="#E1F9DF"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2">
          <div className="w-48 h-48 opacity-15">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                d="M100,60 C115,45 135,50 135,70 C135,90 115,95 100,80 C85,95 65,90 65,70 C65,50 85,45 100,60 Z"
                fill="#E1F9DF"
              />
            </svg>
          </div>
        </div>
        <div className="absolute top-1/2 right-1/3 transform -translate-y-1/2">
          <div className="w-32 h-32 opacity-20">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                d="M100,70 C110,60 120,65 120,75 C120,85 110,90 100,80 C90,90 80,85 80,75 C80,65 90,60 100,70 Z"
                fill="#E1F9DF"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative" style={{ zIndex: 10 }}>
        {/* Left Column: Content + Stats */}
        <div className="w-full lg:w-1/2 space-y-10 text-left">
          <div className="space-y-6">
            <h2 className="section-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold" style={{ color: '#E1F9DF' }}>
              India's NFC Business Cards Experts
            </h2>
            <p className="section-subtext leading-relaxed text-base sm:text-lg max-w-xl" style={{ color: '#E1F9DF' }}>
              We are revolutionizing the way professionals connect and network. Our mission is to empower individuals with NFC Business cards that go beyond the traditional methods, providing a seamless, Paperless and impactful experience.
            </p>
            
            <p className="section-feature leading-relaxed text-base sm:text-lg max-w-xl" style={{ color: '#E1F9DF' }}>
              With Near-Field Communication NFC technology, we offer interactive features, brand promotion, and eco-friendly solutions. By combining innovation, convenience, and sustainability, UnoGreen is the ultimate choice for modern professionals looking to leave a lasting impression in a digital world.
            </p>

            <p className="section-feature leading-relaxed text-base sm:text-lg max-w-xl" style={{ color: '#E1F9DF' }}>
              UnoGreen is one of the rare NFC Business Cards without an app. You don't need to download any special app to manage or use the card.
            </p>
          </div>

          <button className="section-btn mt-6 px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ backgroundColor: '#E1F9DF', color: '#172d16' }}>
            Check NFC Business Cards
          </button>

          {/* Stats Section */}
          <div className="section-stats grid grid-cols-3 gap-6 mt-10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-4 rounded-xl shadow-md border"
                style={{ 
                  backgroundColor: '#1a3319',
                  borderColor: 'rgba(34, 197, 94, 0.5)'
                }}
              >
                <p className="text-3xl font-bold" style={{ color: '#E1F9DF' }}>
                  {stat.number}
                </p>
                <p className="text-sm mt-1" style={{ color: '#E1F9DF' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: NFC Card Visualization Placeholder */}
        <div className="w-full lg:w-1/2 flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
          <div className="relative w-64 h-40 sm:w-80 sm:h-48 lg:w-96 lg:h-56 rounded-2xl border-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500" style={{ 
            backgroundColor: '#1a3319',
            borderColor: '#E1F9DF'
          }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center border-2" style={{ borderColor: '#E1F9DF' }}>
                  <svg className="w-8 h-8" style={{ color: '#E1F9DF' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#E1F9DF' }}>NFC Card</h3>
                <p className="text-sm mt-2" style={{ color: '#E1F9DF' }}>Tap to Connect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}