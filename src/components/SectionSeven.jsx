"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TestimonialSection() {
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
          ".section-quote",
          { opacity: 0, y: 40, duration: 1, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          ".section-author",
          { opacity: 0, y: 20, duration: 0.7, ease: "power2.out" },
          "-=0.5"
        )
        .from(
          ".section-btn",
          { opacity: 0, scale: 0.9, duration: 0.7, ease: "back.out(1.7)" },
          "-=0.4"
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

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center font-sans overflow-hidden px-4 sm:px-6 lg:px-8 py-12"
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

      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative" style={{ zIndex: 10 }}>
        {/* Left Column */}
        <div className="w-full lg:w-1/3 space-y-6 text-center lg:text-left">
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold" style={{ color: '#E1F9DF' }}>
            What Our Customers Say
          </h2>
          <p className="section-subtext leading-relaxed text-base sm:text-lg" style={{ color: '#E1F9DF' }}>
            Discover how professionals are transforming their networking experience with our innovative NFC business cards.
          </p>
        </div>

        {/* Middle Column - NFC Card Visualization */}
        {/* <div className="w-full lg:w-1/3 flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
          <div className="relative w-64 h-40 sm:w-80 sm:h-48 lg:w-96 lg:h-56 rounded-2xl border-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500" style={{ 
            backgroundColor: '#1a3319',
            borderColor: '#E1F9DF'
          }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center border-2" style={{ borderColor: '#E1F9DF' }}>
                  <svg className="w-8 h-8" style={{ color: '#E1F9DF' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#E1F9DF' }}>UnoGreen NFC</h3>
                <p className="text-sm mt-2" style={{ color: '#E1F9DF' }}>Tap to Connect</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Right Column */}
        <div className="w-full lg:w-1/3 space-y-6 text-center lg:text-right">
          <blockquote className="section-quote text-base sm:text-lg italic" style={{ color: '#E1F9DF' }}>
            "UnoGreen NFC cards have completely transformed how I network. No more fumbling with paper cards - just a simple tap and my contact is shared instantly. The app-free experience is a game-changer!"
          </blockquote>
          <div className="section-author font-semibold" style={{ color: '#E1F9DF' }}>
            Sarah Johnson
            <p className="font-normal text-xs sm:text-sm" style={{ color: '#E1F9DF' }}>
              Marketing Director at TechSolutions
            </p>
          </div>
          <button className="section-btn mt-4 px-6 py-3 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ backgroundColor: '#E1F9DF', color: '#172d16' }}>
            Read More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
}