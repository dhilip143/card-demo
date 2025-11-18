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
    camera.position.set(0, 0, 40);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Lights
    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(10, 20, 20);
    scene.add(dirLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Load Butterfly
    const loader = new GLTFLoader();

    loader.load("/models/nfc.glb", (gltf) => {
      const butterfly = gltf.scene;
      butterfly.scale.set(5, 5, 5);
      butterfly.position.set(30, 35, 0);
      butterfly.rotation.y = 25;
      butterfly.rotation.x = 7.5;
      butterfly.castShadow = true;
      scene.add(butterfly);
      butterflyRef.current = butterfly;

      // Animation mixer setup
      const mixer = new THREE.AnimationMixer(butterfly);
      mixerRef.current = mixer;
      gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play();
      });

      // --- SECTION ONE ---
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-one",
            start: "-70px top",
            end: "bottom center",
            scrub: true,
            // markers: true,
          },
        })
        .to(butterfly.position, { x: 2, y: -8, duration: 1 })
        .to(butterfly.scale, { x: 2, y: 2, z: 2, duration: 2 })
        .to(butterfly.position, { x: -5, y: -10, z: 0, duration: 1 })
        .to(butterfly.rotation, { y: 3.5, duration: 3 });

      // --- SECTION TWO ---
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-two",
            start: "top center",
            end: "bottom center",
            scrub: true,
            // markers: true,
          },
        })
        .to(butterfly.rotation, { y: 12.9, duration: 0.1 })
        .to(butterfly.position, { y: 2, duration: 3 })
        .to(butterfly.position, { y: 14, duration: 3 });

      // --- SECTION THREE ---
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-three",
            start: "top center",
            end: "bottom center",
            scrub: true,
            // markers: true,
          },
        })
        .to(butterfly.position, { x: 40, duration: 0.1 })
        .to(butterfly.position, { y: 5, duration: 0.1 })
        .to(butterfly.scale, { x: 5, y: 5, z: 5, duration: 1 })
        .to(butterfly.position, { x: 5, y: 2, duration: 1 });

      // --- SECTION FOUR ---
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-four",
            start: "top center",
            end: "bottom center",
            scrub: true,
            // markers: true,
          },
        })
        .to(butterfly.position, { x: -2, y: -4, duration: 0.1 })
        .to(butterfly.position, { x: 0, y: 0, duration: 0.1 });

      // --- SECTION FIVE ---
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-five",
            start: "top center",
            end: "bottom center",
            scrub: true,
            // markers: true,
          },
        })
        .to(butterfly.position, { x: -14, duration: 2 })
        .to(butterfly.position, { x: -14, duration: 2 })
        .to(butterfly.position, { x: -8, duration: 2 });

      // --- SECTION SIX ---
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-six",
            start: "top center",
            end: "bottom center",
            scrub: true,
            // markers: true,
          },
        })
        .to(butterfly.position, { x: 14, duration: 2 })
        .to(butterfly.position, { x: 12, duration: 2 });

      // --- SECTION SEVEN ---
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-seven",
            start: "top center",
            end: "bottom center",
            scrub: true,
            // markers: true,
          },
        })
        .to(butterfly.position, { x: 0, duration: 2 })
        .to(butterfly.position, { x: 0, y: 8, duration: 2 });
    });

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clockRef.current.getDelta();
      if (mixerRef.current) mixerRef.current.update(delta);
      // updateParticles();
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-10 pointer-events-auto"
    ></div>
  );
}
