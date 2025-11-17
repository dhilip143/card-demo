import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

const CraftBeautiful = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const paragraphRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const cardRef = useRef(null);
  const [isButton1Hovered, setIsButton1Hovered] = useState(false);
  const [isButton2Hovered, setIsButton2Hovered] = useState(false);

  // Ripple effect for buttons
  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      event.clientX - button.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      event.clientY - button.getBoundingClientRect().top - radius
    }px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  useEffect(() => {
    // Only animate if the elements exist
    if (headingRef.current && containerRef.current && cardRef.current) {
      // Create a timeline for sequenced animations
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Split the heading text for character animation
      const splitHeading = new SplitText(headingRef.current, {
        type: "chars,words",
        wordsClass: "word",
        charsClass: "char",
      });

      // Create background glow elements
      const glowElements = [];

      for (let i = 0; i < 6; i++) {
        const glow = document.createElement("div");
        glow.className = "absolute rounded-full blur-xl opacity-0";
        glow.style.width = glow.style.height = `${gsap.utils.random(
          80,
          160
        )}px`;
        glow.style.background = "rgba(225, 249, 223, 0.3)";
        glow.style.left = `${gsap.utils.random(10, 90)}%`;
        glow.style.top = `${gsap.utils.random(10, 90)}%`;
        containerRef.current.appendChild(glow);
        glowElements.push(glow);
      }

      // Set initial state
      gsap.set(splitHeading.chars, {
        opacity: 0,
        y: () => gsap.utils.random(60, 100),
        rotation: () => gsap.utils.random(-15, 15),
        scale: 0.7,
      });

      // Set initial card state
      gsap.set(cardRef.current, {
        opacity: 0,
        scale: 0.8,
        rotationY: -10,
      });

      // Animation sequence
      masterTl
        // Animate glow elements in
        .to(
          glowElements,
          {
            opacity: 0.4,
            duration: 1.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          0
        )
        // Animate NFC card
        .to(
          cardRef.current,
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
          },
          0.2
        )
        // Animate heading characters
        .to(
          splitHeading.chars,
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 1.2,
            stagger: 0.02,
            ease: "back.out(1.7)",
          },
          0.5
        )
        // Animate the colored words differently
        .to(
          headingRef.current
            .querySelector(".text-accent")
            .querySelectorAll(".char"),
          {
            color: "#e1f9df",
            duration: 0.8,
            stagger: {
              each: 0.02,
              from: "random",
            },
            ease: "power2.out",
          },
          1
        )
        // Add a shimmer effect to the colored text
        .to(
          headingRef.current
            .querySelector(".text-accent")
            .querySelectorAll(".char"),
          {
            keyframes: [
              { color: "#e1f9df", ease: "power2.in" },
              { color: "#a8f5a4", ease: "power2.out" },
              { color: "#e1f9df", ease: "power2.in" },
            ],
            duration: 1.5,
            repeat: 1,
          },
          1.5
        )
        // Add floating animation to all characters
        .to(
          splitHeading.chars,
          {
            y: () => gsap.utils.random(-3, 3),
            rotation: () => gsap.utils.random(-1, 1),
            duration: 4,
            stagger: 0.01,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          },
          2
        )
        // Animate buttons
        .fromTo(
          [button1Ref.current, button2Ref.current],
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
          },
          1.8
        );

      // Create a continuous animation for glow elements
      glowElements.forEach((glow) => {
        gsap.to(glow, {
          x: gsap.utils.random(-80, 80),
          y: gsap.utils.random(-40, 40),
          duration: gsap.utils.random(10, 15),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      // Card hover animation
      const card = cardRef.current;
      const handleCardHover = () => {
        gsap.to(card, {
          y: -10,
          rotationY: 5,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      const handleCardLeave = () => {
        gsap.to(card, {
          y: 0,
          rotationY: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", handleCardHover);
      card.addEventListener("mouseleave", handleCardLeave);

      // Cleanup function
      return () => {
        if (splitHeading.revert) splitHeading.revert();
        masterTl.kill();
        glowElements.forEach((glow) => glow.remove());
        card.removeEventListener("mouseenter", handleCardHover);
        card.removeEventListener("mouseleave", handleCardLeave);
      };
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <section
        ref={sectionRef}
        className="relative w-full py-16 px-6 overflow-hidden"
      >
        <div
          ref={containerRef}
          className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative"
        >
          {/* Text Content */}
          <div className="lg:w-1/2 text-left">
            <h1
              ref={headingRef}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-tight mb-6"
            >
              Tap Into The <br />
              <span className="text-accent">Future</span>
            </h1>

            <p
              ref={paragraphRef}
              className="text-lg md:text-xl lg:text-2xl text-secondary mb-8 max-w-2xl"
            >
              Seamless. Secure. Smart. Experience the next generation of contactless technology with NFC-powered solutions.
            </p>

            {/* Button Container */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
              {/* Primary Button */}
              <button
                ref={button1Ref}
                className="relative overflow-hidden px-8 py-4 bg-accent text-primary text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 group"
                onMouseEnter={() => setIsButton1Hovered(true)}
                onMouseLeave={() => setIsButton1Hovered(false)}
                onClick={createRipple}
              >
                <span className="relative z-10">Get Started</span>

                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-[#c8f7c4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                {/* Shine effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine transition-all duration-700"></div>

                {/* Pulse ring effect */}
                {isButton1Hovered && (
                  <div className="absolute inset-0 rounded-xl border-2 border-accent animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>

              {/* Secondary Button */}
              <button
                ref={button2Ref}
                className="relative overflow-hidden px-8 py-4 bg-transparent text-accent text-lg font-semibold rounded-xl border-2 border-accent shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group"
                onMouseEnter={() => setIsButton2Hovered(true)}
                onMouseLeave={() => setIsButton2Hovered(false)}
                onClick={createRipple}
              >
                <span className="relative z-10">Learn More</span>

                {/* Hover fill effect */}
                <div className="absolute inset-0 bg-accent w-0 group-hover:w-full transition-all duration-500 rounded-xl opacity-10 group-hover:opacity-20"></div>

                {/* Border animation */}
                <div className="absolute -inset-1 rounded-xl border-2 border-accent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
              </button>
            </div>
          </div>

          {/* NFC Card Visual */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div
              ref={cardRef}
              className="relative w-80 h-52 rounded-2xl bg-gradient-to-br from-[#1a3319] to-[#2a4f28] shadow-2xl border border-accent/20 overflow-hidden cursor-pointer transform transition-transform duration-500"
            >
              {/* Card Chip */}
              <div className="absolute top-6 left-6 w-12 h-10 bg-gradient-to-br from-[#e1f9df] to-[#a8f5a4] rounded-md"></div>
              
              {/* NFC Wave Lines */}
              <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
                <div className="w-full h-1 bg-accent/30 rounded-full mb-2"></div>
                <div className="w-4/5 h-1 bg-accent/40 rounded-full mb-2 ml-auto mr-auto"></div>
                <div className="w-3/5 h-1 bg-accent/50 rounded-full ml-auto mr-auto"></div>
              </div>
              
              Contactless Symbol
              <div className="absolute bottom-6 right-6 w-12 h-12 border-2 border-accent rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-accent rounded-full"></div>
                <div className="absolute w-4 h-1 bg-accent top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              
              {/* Card Text */}
              <div className="absolute bottom-6 left-6">
                <div className="text-accent/80 text-sm font-light">NFC TECHNOLOGY</div>
                <div className="text-white text-lg font-semibold">TAP TO CONNECT</div>
              </div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent transform -skew-x-12 animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full opacity-60 animate-float"></div>
        <div className="absolute bottom-40 right-20 w-6 h-6 bg-accent rounded-full opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full opacity-50 animate-float" style={{animationDelay: '4s'}}></div>
      </section>

      <style jsx>{`
        .bg-primary {
           background-color: #172d16;
        }
       .bg-secondary {
  background-color: #1a3319;  /* Slightly lighter green */
}
       .text-primary {
  color: #172d16;  /* Dark green text */
}
        .text-secondary {
          color: #e1f9df;
        }
        .text-accent {
          color: #e1f9df;
        }
        .bg-accent {
          background-color: #e1f9df;
        }
        .border-accent {
          border-color: #e1f9df;
        }
        
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        .ripple {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(225, 249, 223, 0.7);
          transform: scale(0);
          animation: ripple-animation 0.6s linear;
        }
        
        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        .animate-shine {
          animation: shine 1.5s ease-out;
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .hover\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(225, 249, 223, 0.25),
            0 0 15px rgba(225, 249, 223, 0.3);
        }
      `}</style>
    </div>
  );
};

export default CraftBeautiful;