// import SectionOne from "./components/SectionOne";
// import SectionTwo from "./components/SectionTwo";
// import SectionThree from "./components/SectionThree";
// import SectionFour from "./components/SectionFour";
// import SectionFive from "./components/SectionFive";
// import SectionSix from "./components/SectionSix";
// import SectionSeven from "./components/SectionSeven";
// import SectionEight from "./components/SectionEight";
// import ButterflyModel from "./components/ButterflyModel";

// export default function App() {
//   return (
//     <div className="relative w-full min-h-[500vh] overflow-x-hidden">
//       {/* Aurora Dream Diagonal Flow background */}
//       <div
//         className="fixed inset-0 -z-10 bg-[#172d16]"
//       />

//       {/* Butterfly always on top */}
//       <ButterflyModel />

//       {/* Page sections */}
//       {/* <Header /> */}
//       <div className="section-one">
//         <SectionOne />
//       </div>
//       <div className="section-two">
//         <SectionTwo />
//       </div>
//       <div className="section-three">
//         <SectionThree />
//       </div>
//       <div className="section-four">
//         <SectionFour />
//       </div>
//       <div className="section-five">
//         <SectionFive />
//       </div>
//       <div className="section-six">
//         <SectionSix />
//       </div>
//       <div className="section-seven">
//         <SectionSeven />
//       </div>
//       <div className="section-eight">
//         {/* <SectionEight /> */}
//       </div>
//     </div>
//   );
// }





import { useEffect } from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import SectionSeven from "./components/SectionSeven";
import SectionEight from "./components/SectionEight";
import ButterflyModel from "./components/ButterflyModel";

// 1. Import Lenis and GSAP
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function App() {

  // 2. Setup Smooth Scroll + GSAP Sync
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust speed: higher = smoother/slower
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing function
      direction: "vertical",
      smooth: true,
    });

    // Get Lenis to talk to ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Sync GSAP's ticker with Lenis's requestAnimationFrame
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Turn off GSAP lag smoothing to prevent stuttering
    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full min-h-[500vh] overflow-x-hidden">
      {/* Aurora Dream Diagonal Flow background */}
      <div className="fixed inset-0 -z-10 bg-[#172d16]" />

      {/* Butterfly always on top */}
      {/* Note: Since Lenis keeps native scroll, fixed elements work perfectly */}
      <ButterflyModel />

      {/* Page sections */}
      <div className="section-one">
        <SectionOne />
      </div>
      <div className="section-two">
        <SectionTwo />
      </div>
      <div className="section-three">
        <SectionThree />
      </div>
      <div className="section-four">
        <SectionFour />
      </div>
      <div className="section-five">
        <SectionFive />
      </div>
      <div className="section-six">
        <SectionSix />
      </div>
      <div className="section-seven">
        <SectionSeven />
      </div>
      <div className="section-eight">
        {/* <SectionEight /> */}
      </div>
    </div>
  );
}