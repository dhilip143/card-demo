// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { SplitText } from "gsap/dist/SplitText";
// import processor from "/src/assets/Futuristic_AI_Microchip_Animation.mp4";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(SplitText);
// }

// export default function SectionThree() {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const subtextRef = useRef(null);
//   const statsRef = useRef(null);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 70%",
//         toggleActions: "play none none none",
//       },
//     });

//     const headingSplit = new SplitText(headingRef.current, {
//       type: "lines,words",
//       linesClass: "lineChild",
//     });
//     gsap.set(headingSplit.words, { opacity: 0, y: 40 });
//     tl.to(headingSplit.words, {
//       opacity: 1,
//       y: 0,
//       duration: 0.6,
//       stagger: 0.04,
//       ease: "power3.out",
//     });

//     const subtextSplit = new SplitText(subtextRef.current, {
//       type: "lines",
//       linesClass: "lineChild",
//     });
//     gsap.set(subtextSplit.lines, { opacity: 0, y: 25 });
//     tl.to(
//       subtextSplit.lines,
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         stagger: 0.1,
//         ease: "power2.out",
//       },
//       "-=0.3"
//     );

//     const stats = statsRef.current.querySelectorAll(".stat-item");
//     stats.forEach((stat) => {
//       const number = stat.querySelector("span");
//       const target = parseFloat(number.textContent.replace(/[^0-9.]/g, ""));
//       const suffix = number.textContent.replace(/[0-9.]/g, "");

//       gsap.fromTo(
//         number,
//         { textContent: 0, opacity: 0, y: 15 },
//         {
//           textContent: target,
//           opacity: 1,
//           y: 0,
//           duration: 1.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: stat,
//             start: "top 85%",
//             toggleActions: "play none none none",
//           },
//           onUpdate: function () {
//             number.textContent =
//               Math.floor(this.targets()[0].textContent) + suffix;
//           },
//         }
//       );

//       const desc = stat.querySelector("div");
//       gsap.fromTo(
//         desc,
//         { opacity: 0, y: 10 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.7,
//           delay: 0.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: stat,
//             start: "top 85%",
//             toggleActions: "play none none none",
//           },
//         }
//       );
//     });

//     const badge = sectionRef.current.querySelector(".badge");
//     gsap.from(badge, {
//       scale: 0.7,
//       opacity: 0,
//       rotation: 5,
//       duration: 0.6,
//       ease: "back.out(1.7)",
//       scrollTrigger: {
//         trigger: badge,
//         start: "top 85%",
//         toggleActions: "play none none none",
//       },
//     });

//     return () => {
//       headingSplit.revert();
//       subtextSplit.revert();
//       tl.kill();
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="section-three w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-center px-4 md:px-16 py-20"
//     >
//       <div className="flex gap-24 w-full max-w-7xl mx-auto">
//         <div className="w-1/2">
//           <video
//             src={processor}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full h-auto"
//           />
//         </div>
//         {/* Right side */}
//         <div className="flex flex-col w-1/2 mx-auto lg:mx-0 space-y-8">
//           <span className="badge inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-xs font-semibold tracking-wider px-4 py-1 rounded-full shadow-lg">
//             AI-Powered Processing
//           </span>

//           <h1
//             ref={headingRef}
//             className="w-full text-3xl md:text-5xl font-bold leading-tight"
//           >
//             Lightweight AI Processor for Next-Gen Computing
//           </h1>

//           <p
//             ref={subtextRef}
//             className="text-lg text-slate-300 leading-relaxed"
//           >
//             Harness cutting-edge algorithms and energy-efficient design. Elevate
//             your system's capabilities while maintaining top performance.
//           </p>

//           <div ref={statsRef} className="w-full ml-80 space-y-6 mt-6">
//             <div className="stat-item flex items-start space-x-6">
//               <span className="text-4xl font-bold text-blue-400">4.2GHz</span>
//               <div>
//                 <p className="text-slate-100 font-medium">Clock Speed</p>
//                 <p className="text-slate-400 text-sm">
//                   Ultra-fast multi-threaded operations.
//                 </p>
//               </div>
//             </div>

//             <div className="stat-item flex items-start space-x-6">
//               <span className="text-4xl font-bold text-green-400">7W</span>
//               <div>
//                 <p className="text-slate-100 font-medium">Power Draw</p>
//                 <p className="text-slate-400 text-sm">
//                   Energy optimized for low heat output.
//                 </p>
//               </div>
//             </div>

//             <div className="stat-item flex items-start space-x-6">
//               <span className="text-4xl font-bold text-purple-400">99.9%</span>
//               <div>
//                 <p className="text-slate-100 font-medium">Reliability</p>
//                 <p className="text-slate-400 text-sm">
//                   Mission-critical stability and uptime.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import processor from "/src/assets/Futuristic_AI_Microchip_Animation.mp4";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

export default function VistaConnectSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    const headingSplit = new SplitText(headingRef.current, {
      type: "lines,words",
      linesClass: "lineChild",
    });
    gsap.set(headingSplit.words, { opacity: 0, y: 40 });
    tl.to(headingSplit.words, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.04,
      ease: "power3.out",
    });

    const subtextSplit = new SplitText(subtextRef.current, {
      type: "lines",
      linesClass: "lineChild",
    });
    gsap.set(subtextSplit.lines, { opacity: 0, y: 25 });
    tl.to(
      subtextSplit.lines,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.3"
    );

    const stats = statsRef.current.querySelectorAll(".stat-item");
    stats.forEach((stat) => {
      const number = stat.querySelector("span");
      const target = parseFloat(number.textContent.replace(/[^0-9.]/g, ""));
      const suffix = number.textContent.replace(/[0-9.]/g, "");

      gsap.fromTo(
        number,
        { textContent: 0, opacity: 0, y: 15 },
        {
          textContent: target,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            number.textContent =
              Math.floor(this.targets()[0].textContent) + suffix;
          },
        }
      );

      const desc = stat.querySelector("div");
      gsap.fromTo(
        desc,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    const badge = sectionRef.current.querySelector(".badge");
    gsap.from(badge, {
      scale: 0.7,
      opacity: 0,
      rotation: 5,
      duration: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: badge,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      headingSplit.revert();
      subtextSplit.revert();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="vista-connect-section w-full min-h-screen bg-primary text-secondary flex items-center px-4 md:px-12 py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl mx-auto items-center">
        {/* Left side video */}
        <div className="flex justify-center">
          <video
            src={processor}
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>

        {/* Right side content */}
        <div className="flex flex-col space-y-8">
          <span className="badge inline-block bg-secondary text-secondary text-xs font-semibold tracking-wider px-4 py-1 rounded-full shadow-md border border-[#e1f9df]/20">
            VistaConnect Technology
          </span>

          <h1
            ref={headingRef}
            className="text-3xl md:text-5xl font-bold leading-tight text-secondary"
          >
            Smart NFC Business Cards for Modern Networking
          </h1>

          <p
            ref={subtextRef}
            className="text-lg text-secondary/80 leading-relaxed"
          >
            Share your contact information instantly with NFC technology. No apps needed - just tap and connect with potential clients and partners.
          </p>

          <div ref={statsRef} className="space-y-8 pt-4">
            <div className="stat-item flex items-start space-x-6">
              <span className="text-4xl font-bold text-secondary">0.5s</span>
              <div>
                <p className="text-secondary font-medium">Instant Connection</p>
                <p className="text-secondary/60 text-sm">
                  Tap and share contacts in less than a second.
                </p>
              </div>
            </div>

            <div className="stat-item flex items-start space-x-6">
              <span className="text-4xl font-bold text-secondary">100%</span>
              <div>
                <p className="text-secondary font-medium">Compatibility</p>
                <p className="text-secondary/60 text-sm">
                  Works with all NFC-enabled smartphones.
                </p>
              </div>
            </div>

            <div className="stat-item flex items-start space-x-6">
              <span className="text-4xl font-bold text-secondary">∞</span>
              <div>
                <p className="text-secondary font-medium">Unlimited Shares</p>
                <p className="text-secondary/60 text-sm">
                  No limits on how many times you can share.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-primary {
          background-color: #172d16;
        }
        .bg-secondary {
          background-color: #1a3319;
        }
        .text-primary {
          color: #172d16;
        }
        .text-secondary {
          color: #e1f9df;
        }
      `}</style>
    </section>
  );
}