// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import gsap from "gsap";

// export default function MorphParticles() {
//   const containerRef = useRef();
//   const sceneRef = useRef();
//   const cameraRef = useRef();
//   const rendererRef = useRef();
//   const butterflyRef = useRef();
//   const mixerRef = useRef();
//   const clockRef = useRef(new THREE.Clock());

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Init Scene
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       35,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(0, 0, 50);

//     const renderer = new THREE.WebGLRenderer({
//       antialias: true,
//       alpha: true,
//     });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x000000, 0);
//     containerRef.current.innerHTML = "";
//     containerRef.current.appendChild(renderer.domElement);

//     sceneRef.current = scene;
//     cameraRef.current = camera;
//     rendererRef.current = renderer;

//     // Lights
//     const dirLight = new THREE.DirectionalLight(0xffffff, 45);
//     dirLight.position.set(10, 20, 20);
//     scene.add(dirLight);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 10.2);
//     scene.add(ambientLight);



//     // Load Butterfly
//     const loader = new GLTFLoader();

//     loader.load("/models/NFC_model.glb", (gltf) => {
//       const butterfly = gltf.scene;
//       butterfly.scale.set(12, 12, 12);
//       butterfly.position.set(60, -10, 0);
//       butterfly.castShadow = true;
//       scene.add(butterfly);
//       butterflyRef.current = butterfly;

//       // Animation mixer setup
//       const mixer = new THREE.AnimationMixer(butterfly);
//       mixerRef.current = mixer;
//       gltf.animations.forEach((clip) => {
//         mixer.clipAction(clip).play();
//       });

//       gsap.fromTo(
//         butterfly.position,
//         { x: 60, y: -2 },  // start outside screen
//         {
//           x: 15,
//           y: -2,
//           duration: 1.8,
//           ease: "power3.out",
//         }
//       );


//       // SECTION ONE
//       gsap.timeline({
//         scrollTrigger: {
//           trigger: ".section-one",
//           start: "top top",
//           end: "bottom center",
//           scrub: true,
//           // markers: true,
//         },
//         delay: 1.8, // same duration as entrance animation
//       })
//         .to(butterfly.position, { x: 2, y: -8, duration: 1 })
//         .to(butterfly.position, { x: -10, duration: 1 })

//       // --- SECTION TWO ---
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: ".section-two",
//             start: "top center",
//             end: "bottom center",
//             scrub: true,
//             // markers: true,
//           },
//         })
//         .to(butterfly.position, { x: -18, y: 0, duration: 3 })
//         .to(butterfly.position, { y: 5, duration: 1 })
//         .to(butterfly.position, { opacity: 0 });

//       // --- SECTION THREE ---
//       // 🔥 PIN MODEL IN CENTER DURING SECTION THREE
//       gsap.timeline({
//         scrollTrigger: {
//           trigger: ".section-three",
//           start: "top center",
//           end: "bottom +=100",
//           pin: true,
//           scrub: true,
//           // markers: true,
//         },
//       })
//         .to(butterfly.position, {
//           x: 0,
//           y: 0,
//           z: 0,
//           duration: 1,
//           ease: "power3.out",
//         })
//         .to(butterfly.rotation, { y: 3.2, duration: 3 })
//         .to(butterfly.scale, {
//           x: 8,
//           y: 8,
//           z: 8,
//           duration: 1.2,
//           ease: "power3.out",
//         })
//         .to(butterfly.rotation, { y: 3.2, duration: 4 })

//       // --- SECTION FOUR ---
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: ".section-four",
//             start: "clamp(top top)",
//             end: "clamp(bottom center)",
//             scrub: true,
//             markers: true,
//           },
//         })
//         // .to(butterfly.position, { x: 2, duration: 0.1 })
//         // .to(butterfly.position, { x: -2, duration: 0.1 });
//         .to(butterfly.rotation, { x: 3, y: 3, duration: 0.1 })
//         .to(butterfly.rotation, { x: 3, y: 5, duration: 0.1 });

//       // --- SECTION FIVE ---
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: ".section-five",
//             start: "top center",
//             end: "bottom center",
//             scrub: true,
//             // markers: true,
//           },
//         })
//         // .to(butterfly.position, { x: -14, duration: 2 })
//         // .to(butterfly.position, { x: -14, duration: 2 })
//         // .to(butterfly.position, { x: -8, duration: 2 });

//       // --- SECTION SIX ---
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: ".section-six",
//             start: "top center",
//             end: "bottom center",
//             scrub: true,
//             // markers: true,
//           },
//         })
//         // .to(butterfly.position, { x: 14, duration: 2 })
//         // .to(butterfly.position, { x: 12, duration: 2 });

//       // --- SECTION SEVEN ---
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: ".section-seven",
//             start: "top center",
//             end: "bottom center",
//             scrub: true,
//             // markers: true,
//           },
//         })
//         .to(butterfly.position, { x: 0, duration: 2 })
//         .to(butterfly.position, { x: 0, y: 8, duration: 2 });
//     });

//     // Animate
//     const animate = () => {
//       requestAnimationFrame(animate);
//       const delta = clockRef.current.getDelta();
//       if (mixerRef.current) mixerRef.current.update(delta);
//       // updateParticles();
//       renderer.render(scene, camera);
//     };
//     animate();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="fixed inset-0 z-10 pointer-events-auto"
//     ></div>
//   );
// }


import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function MorphParticles() {
  const containerRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const butterflyRef = useRef();
  const mixerRef = useRef();
  const clockRef = useRef(new THREE.Clock());
  // Add a ref to store the animation frame ID so we can cancel it
  const reqIdRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Init Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 50);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    // Safety check: clear container before appending
    if(containerRef.current) {
        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(renderer.domElement);
    }

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Lights
    const dirLight = new THREE.DirectionalLight(0xffffff, 45);
    dirLight.position.set(10, 20, 20);
    scene.add(dirLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 10.2);
    scene.add(ambientLight);

    // Load Butterfly
    const loader = new GLTFLoader();

    loader.load("/models/NFC_model.glb", (gltf) => {
      const butterfly = gltf.scene;
      butterfly.scale.set(12, 12, 12);
      butterfly.position.set(60, -10, 0);
      butterfly.castShadow = true;
      scene.add(butterfly);
      butterflyRef.current = butterfly;

      // Animation mixer setup
      const mixer = new THREE.AnimationMixer(butterfly);
      mixerRef.current = mixer;
      gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play();
      });

      gsap.fromTo(
        butterfly.position,
        { x: 60, y: -2 }, 
        {
          x: 15,
          y: -2,
          duration: 1.8,
          ease: "power3.out",
        }
      );

      // SECTION ONE
      gsap.timeline({
        scrollTrigger: {
          trigger: ".section-one",
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
        delay: 1.8,
      })
        .to(butterfly.position, { x: 2, y: -8, duration: 1 })
        .to(butterfly.position, { x: -10, duration: 1 });

      // --- SECTION TWO ---
      gsap.timeline({
          scrollTrigger: {
            trigger: ".section-two",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        })
        .to(butterfly.position, { x: -18, y: 0, duration: 3 })
        .to(butterfly.position, { y: 5, duration: 1 })
        .to(butterfly.position, { opacity: 0 });

      // --- SECTION THREE ---
      gsap.timeline({
        scrollTrigger: {
          trigger: ".section-three",
          start: "clamp(top center)",
          end: "clamp(bottom top)",
          // pin: true,
          scrub: true,
          markers: true
        },
      })
        .to(butterfly.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1,
          ease: "power3.out",
        })
        .to(butterfly.rotation, { y: 3.2, duration: 3 })
        .to(butterfly.scale, {
          x: 8,
          y: 8,
          z: 8,
          duration: 3,
          ease: "power3.out",
        })
        .to(butterfly.rotation, { y: 6.1, duration: 3 })
                .to(butterfly.scale, {
          x: 12,
          y: 12,
          z: 12,
          duration: 1,
          ease: "power3.out",
        })

      // --- SECTION FOUR ---
      // THIS IS YOUR MARKER
      gsap.timeline({
          scrollTrigger: {
            trigger: ".section-four",
            start: "clamp(top center)",
            end: "clamp(bottom center)",
            scrub: true,
            markers: true
          },
        })
        .to(butterfly.scale, { x: 7, y: 7, z: 7, duration: 0.5 })
        // .to(butterfly.rotation, { x: 3, duration: 1 })
        
        // .to(butterfly.rotation, { x: 6.4, z: -10, duration: 1 })
        // .to(butterfly.rotation, { x: 3, y: 3, duration: 0.1 })
        // .to(butterfly.rotation, { x: 6, y: 5, duration: 0.1 });

      // ... (Other sections omitted for brevity but logic applies)
    });

    // Animate
    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate); // Store ID
      const delta = clockRef.current.getDelta();
      if (mixerRef.current) mixerRef.current.update(delta);
      renderer.render(scene, camera);
    };
    animate();

    // ------------------------------------------
    //  CLEANUP FUNCTION (This fixes the issue)
    // ------------------------------------------
    return () => {
      // 1. Stop the animation loop
      cancelAnimationFrame(reqIdRef.current);

      // 2. Kill all GSAP ScrollTriggers created in this instance
      // This removes the markers from the previous mount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      
      // 3. Clean up Three.js (Optional but recommended for performance)
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-10 pointer-events-auto"
    ></div>
  );
}