import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import SectionSeven from "./components/SectionSeven";
import SectionEight from "./components/SectionEight";
import ButterflyModel from "./components/ButterflyModel";
// import Header from "./components/Header";

// import video from "/src/assets/Pastel_Gradient_Abstract_Background_Animation.mp4"

export default function App() {
  return (
    <div className="relative w-full min-h-[500vh] overflow-x-hidden">
      {/* Aurora Dream Diagonal Flow background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 5% 40%, rgba(175, 109, 255, 0.48), transparent 67%),
            radial-gradient(ellipse 70% 60% at 45% 45%, rgba(255, 100, 180, 0.41), transparent 67%),
            radial-gradient(ellipse 62% 52% at 83% 76%, rgba(255, 235, 170, 0.44), transparent 63%),
            radial-gradient(ellipse 60% 48% at 75% 20%, rgba(120, 190, 255, 0.36), transparent 66%),
            linear-gradient(45deg, #f7eaff 0%, #fde2ea 100%)
          `,
        }}
      />

      {/* --- Background Video --- */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-screen object-cover z-0"
      >
        <source src={video} type="video/mp4" />
      </video> */}

      {/* Butterfly always on top */}
      <ButterflyModel />

      {/* Page sections */}
      {/* <Header /> */}
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
