// "use client";
// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const members = [
//   {
//     id: 1,
//     name: "Alex Johnson",
//     role: "Frontend Developer",
//     img: "https://randomuser.me/api/portraits/men/1.jpg",
//     link: "https://github.com/meschacirung",
//   },
//   {
//     id: 2,
//     name: "Sarah Williams",
//     role: "UI Designer",
//     img: "https://randomuser.me/api/portraits/women/2.jpg",
//     link: "https://github.com/meschacirung",
//   },
//   {
//     id: 3,
//     name: "Michael Chen",
//     role: "Backend Engineer",
//     img: "https://randomuser.me/api/portraits/men/3.jpg",
//     link: "https://github.com/meschacirung",
//   },
//   {
//     id: 4,
//     name: "Emma Rodriguez",
//     role: "Product Manager",
//     img: "https://randomuser.me/api/portraits/women/4.jpg",
//     link: "https://github.com/meschacirung",
//   },
//   {
//     id: 5,
//     name: "David Kim",
//     role: "DevOps Specialist",
//     img: "https://randomuser.me/api/portraits/men/5.jpg",
//     link: "https://github.com/meschacirung",
//   },
//   {
//     id: 6,
//     name: "Priya Patel",
//     role: "Data Scientist",
//     img: "https://randomuser.me/api/portraits/women/6.jpg",
//     link: "https://github.com/meschacirung",
//   },
// ];

// export default function CommunitySection() {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const subheadingRef = useRef(null);
//   const statsRef = useRef(null);
//   const membersRef = useRef(null);
//   const ctaRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       gsap.fromTo(
//         headingRef.current,
//         { opacity: 0, y: 60 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: { trigger: headingRef.current, start: "top 80%" },
//         }
//       );
//       gsap.fromTo(
//         subheadingRef.current,
//         { opacity: 0, y: 40 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           delay: 0.3,
//           ease: "power2.out",
//           scrollTrigger: { trigger: subheadingRef.current, start: "top 85%" },
//         }
//       );
//       gsap.fromTo(
//         membersRef.current.querySelectorAll(".member-card"),
//         { opacity: 0, y: 40, scale: 0.9 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.6,
//           stagger: 0.1,
//           ease: "back.out(1.4)",
//           scrollTrigger: { trigger: membersRef.current, start: "top 80%" },
//         }
//       );
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="min-h-screen flex flex-col justify-center font-mono py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black"
//     >
//       <div className="w-full px-6 md:px-12 text-right max-w-6xl ml-auto">
//         {/* Heading */}
//         <div ref={headingRef} className="mb-10">
//           <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
//             Built by the Community <br /> for the Community
//           </h2>
//           <p
//             ref={subheadingRef}
//             className="mt-4 text-base text-gray-600 dark:text-gray-300 leading-relaxed inline-block max-w-xl"
//           >
//             Our vibrant community of developers, designers, and innovators
//             collaborate to create amazing open-source projects that benefit
//             everyone.
//           </p>

//           {/* Stats */}
//           <div ref={statsRef} className="flex flex-wrap gap-6 mt-8 justify-end">
//             <div className="flex flex-col text-right">
//               <span className="stat-number text-2xl font-bold text-purple-600">
//                 250
//               </span>
//               <span className="stat-label text-gray-500 dark:text-gray-400">
//                 Contributors
//               </span>
//             </div>
//             <div className="flex flex-col text-right">
//               <span className="stat-number text-2xl font-bold text-pink-500">
//                 1200
//               </span>
//               <span className="stat-label text-gray-500 dark:text-gray-400">
//                 Commits
//               </span>
//             </div>
//             <div className="flex flex-col text-right">
//               <span className="stat-number text-2xl font-bold text-red-500">
//                 84
//               </span>
//               <span className="stat-label text-gray-500 dark:text-gray-400">
//                 Projects
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Members Grid */}
//         <div
//           ref={membersRef}
//           className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-6 justify-items-end"
//         >
//           {members.map((member) => (
//             <div
//               key={member.id}
//               className="member-card relative group text-right transition-transform duration-300 hover:-translate-y-1"
//             >
//               <a
//                 href={member.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block"
//               >
//                 <div className="flex flex-col items-end text-right">
//                   <div className="relative mb-2">
//                     <img
//                       alt={member.name}
//                       src={member.img}
//                       loading="lazy"
//                       className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-md group-hover:scale-105 group-hover:ring-2 group-hover:ring-pink-400 transition-all duration-300"
//                     />
//                   </div>
//                   <h3 className="font-semibold text-gray-800 dark:text-white text-sm md:text-base">
//                     {member.name}
//                   </h3>
//                   <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
//                     {member.role}
//                   </p>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div ref={ctaRef} className="mt-12 text-right">
//           <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300">
//             Join Our Community
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    id: 1,
    icon: "",
    title: "Pay & Confirm your Order",
    description: "Complete your payment and confirm your NFC card order"
  },
  {
    id: 2,
    icon: "",
    title: "Our Team Shares Previews",
    description: "We design and share previews of your custom NFC cards"
  },
  {
    id: 3,
    icon: "",
    title: "Share Feedback & Finalize",
    description: "Review the designs and provide your feedback for finalization"
  },
  {
    id: 4,
    icon: "",
    title: "Print & Ship Your Cards",
    description: "After approval, we print and ship your NFC cards worldwide"
  },
];

export default function OrderProcessSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const stepsRef = useRef(null);
  const ctaRef = useRef(null);
  const butterflyRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Text animations
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 80%" },
        }
      );
      gsap.fromTo(
        subheadingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: { trigger: subheadingRef.current, start: "top 85%" },
        }
      );
      gsap.fromTo(
        stepsRef.current.querySelectorAll(".step-card"),
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: stepsRef.current, start: "top 80%" },
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

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center font-sans py-16 md:py-20 relative px-4 overflow-hidden"
      style={{ backgroundColor: '#172d16' }}
    >
      {/* 3D Butterfly Background */}
      <div 
        ref={butterflyRef}
        className="absolute inset-0 pointer-events-none z-0"
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
      <div className="w-full max-w-6xl mx-auto px-6 relative" style={{ zIndex: 10 }}>
        {/* Heading */}
        <div ref={headingRef} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#E1F9DF' }}>
            Simple 4-Step Process
          </h2>
          <p
            ref={subheadingRef}
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: '#E1F9DF' }}
          >
            Get your custom NFC business cards in just four easy steps
          </p>
        </div>

        {/* Steps Grid */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative"
          style={{ zIndex: 10 }}
        >
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="step-card group relative"
              style={{ zIndex: 10 }}
            >
              <div 
                className="p-6 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-500/70 h-full flex flex-col items-center text-center"
                style={{ 
                  backgroundColor: '#1a3319',
                  borderColor: 'rgba(34, 197, 94, 0.5)'
                }}
              >
                {/* Step Number */}
                <div 
                  className="flex items-center justify-center w-12 h-12 rounded-full border mb-4 group-hover:bg-green-600/30 transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgba(34, 197, 94, 0.2)',
                    borderColor: 'rgba(34, 197, 94, 0.3)'
                  }}
                >
                  <span className="text-2xl" style={{ color: '#E1F9DF' }}>{step.icon}</span>
                </div>
                
                {/* Step Title */}
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#E1F9DF' }}>
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="text-sm leading-relaxed flex-grow" style={{ color: '#E1F9DF' }}>
                  {step.description}
                </p>
                
                {/* Step Indicator */}
                <div className="mt-4 flex items-center justify-center">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#E1F9DF' }}
                  >
                    <span className="font-bold text-sm" style={{ color: '#172d16' }}>{index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mb-12 relative" style={{ zIndex: 10 }}>
          <div 
            className="inline-flex items-center gap-4 p-4 rounded-xl border"
            style={{ 
              backgroundColor: '#1a3319',
              borderColor: 'rgba(34, 197, 94, 0.3)'
            }}
          >
            <div 
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: '#E1F9DF' }}
            ></div>
            <p className="text-sm" style={{ color: '#E1F9DF' }}>
              Average delivery time: <span className="font-semibold" style={{ color: '#E1F9DF' }}>5-7 business days</span>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div ref={ctaRef} className="flex justify-center relative" style={{ zIndex: 10 }}>
          <button 
            className="px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#E1F9DF', color: '#172d16' }}
          >
            Start Your Order Now
          </button>
        </div>
      </div>
    </section>
  );
}