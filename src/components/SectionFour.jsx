import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function NFCFeaturesSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const butterflyRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          {
            y: 50,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.2
          }
        );
      });

      // Animate title
      gsap.fromTo(".section-title",
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".section-title",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
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

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen font-sans flex flex-col items-center justify-center relative px-4 overflow-hidden"
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

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-6 rounded-2xl py-16 relative" style={{ zIndex: 10 }}>
        {/* Section Title */}
        <h1 className="section-title text-center font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-16" style={{ color: '#E1F9DF' }}>
          Unleash the Power of NFC Business Cards
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Easy Access Card */}
          <div 
            ref={addToCardsRef}
            className="p-8 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-500/70"
            style={{ backgroundColor: '#1a3319', borderColor: 'rgba(34, 197, 94, 0.5)' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#E1F9DF' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold" style={{ color: '#E1F9DF' }}>Easy Access</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#E1F9DF' }}>
              Instantly access and share your information with a simple tap or scan.
            </p>
          </div>

          {/* Eco-Friendly Card */}
          <div 
            ref={addToCardsRef}
            className="p-8 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-500/70"
            style={{ backgroundColor: '#1a3319', borderColor: 'rgba(34, 197, 94, 0.5)' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#E1F9DF' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold" style={{ color: '#E1F9DF' }}>Eco-Friendly</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#E1F9DF' }}>
              Go green and reduce paper waste with our environmentally friendly cards.
            </p>
          </div>

          {/* Time is Money Card */}
          <div 
            ref={addToCardsRef}
            className="p-8 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-500/70"
            style={{ backgroundColor: '#1a3319', borderColor: 'rgba(34, 197, 94, 0.5)' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#E1F9DF' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold" style={{ color: '#E1F9DF' }}>Time is Money</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#E1F9DF' }}>
              Exchange networking details without manually typing your contact information.
            </p>
          </div>

          {/* No Toggling Between Apps Card */}
          <div 
            ref={addToCardsRef}
            className="p-8 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-500/70"
            style={{ backgroundColor: '#1a3319', borderColor: 'rgba(34, 197, 94, 0.5)' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#E1F9DF' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold" style={{ color: '#E1F9DF' }}>No App Toggling</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#E1F9DF' }}>
              No app required to edit or share your details. As seamless as it can get!
            </p>
          </div>

          {/* Grab Attention Card */}
          <div 
            ref={addToCardsRef}
            className="p-8 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-500/70"
            style={{ backgroundColor: '#1a3319', borderColor: 'rgba(34, 197, 94, 0.5)' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#E1F9DF' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold" style={{ color: '#E1F9DF' }}>Grab Attention</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#E1F9DF' }}>
              Spark curiosity with our innovative NFC business cards that stand out.
            </p>
          </div>

          {/* One Card to Rule Them All */}
          <div 
            ref={addToCardsRef}
            className="p-8 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-500/70"
            style={{ backgroundColor: '#1a3319', borderColor: 'rgba(34, 197, 94, 0.5)' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#E1F9DF' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold" style={{ color: '#E1F9DF' }}>All-in-One Solution</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#E1F9DF' }}>
              Consolidate all your contact information in one convenient digital platform.
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button 
            className="px-8 py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#E1F9DF', color: '#172d16' }}
          >
            Get Your NFC Card Today
          </button>
        </div>
      </div>
    </section>
  );
}