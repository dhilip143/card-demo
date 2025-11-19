import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function MorphParticles() {
  const canvasRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const butterflyRef = useRef();
  const mixerRef = useRef();
  const clockRef = useRef(new THREE.Clock());
  const reqIdRef = useRef();

  useEffect(() => {
    // -----------------------------
    // SCENE + CAMERA + RENDERER
    // -----------------------------
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 50);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // -----------------------------
    // LIGHTS
    // -----------------------------
// -----------------------------
// 3-POINT DIRECTIONAL LIGHTS
// -----------------------------

// FRONT LIGHT (Main)
const frontLight = new THREE.DirectionalLight(0xffffff, 1.5);
frontLight.position.set(0, 1, 1);
camera.add(frontLight);

// LEFT FILL LIGHT
const leftLight = new THREE.DirectionalLight(0xffffff, 1.2);
leftLight.position.set(-90, 1, 2);
camera.add(leftLight);

// RIGHT FILL LIGHT
const rightLight = new THREE.DirectionalLight(0xffffff, 1.2);
rightLight.position.set(90, 1, 2);
camera.add(rightLight);

// Ambient Light (softens everything)
const ambient = new THREE.AmbientLight(0xffffff, 1.5);
camera.add(ambient);

leftLight.target.position.set(0, 0, 0);
scene.add(leftLight.target);

rightLight.target.position.set(0, 0, 0);
scene.add(rightLight.target);

frontLight.target.position.set(0, 0, 0);
scene.add(frontLight.target);

// Add the camera to the scene because it holds lights
scene.add(camera);


    // const ambientLight = new THREE.AmbientLight(0xffffff, 18.2);
    //    ambientLight.position.set(0, 1, 1);
    //    camera.add(ambientLight); 
    // scene.add(ambientLight);

    // scene.add(camera);

    // -----------------------------
    // ORBIT CONTROLS (rotate only)
    // -----------------------------
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.5;

    controls.enableZoom = false;
    controls.zoomSpeed = 0;
    controls.enablePan = false;

    // -----------------------------
    // PREVENT ZOOM ON MOBILE
    // -----------------------------
    const preventZoom = (e) => e.preventDefault();

    if (canvasRef.current) {
      canvasRef.current.addEventListener('wheel', preventZoom, {
        passive: false,
      });
      canvasRef.current.addEventListener('touchmove', preventZoom, {
        passive: false,
      });
      canvasRef.current.addEventListener('gesturestart', preventZoom);
      canvasRef.current.addEventListener('gesturechange', preventZoom);
      canvasRef.current.addEventListener('gestureend', preventZoom);
    }

    // -----------------------------
    // LOAD GLB MODEL
    // -----------------------------
    const loader = new GLTFLoader();

    loader.load('/models/NFC_model.glb', (gltf) => {
      const butterfly = gltf.scene;
      butterfly.scale.set(8, 8, 8);
      butterfly.position.set(0, 0, 0);
      scene.add(butterfly);

      butterflyRef.current = butterfly;

      const mixer = new THREE.AnimationMixer(butterfly);
      mixerRef.current = mixer;

      gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play();
      });
    });

    // -----------------------------
    // ANIMATION LOOP
    // -----------------------------
    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);
      const delta = clockRef.current.getDelta();

      if (mixerRef.current) mixerRef.current.update(delta);

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // -----------------------------
    // CLEANUP (SAFE)
    // -----------------------------
    return () => {
      cancelAnimationFrame(reqIdRef.current);

      if (renderer) renderer.dispose();

      if (canvasRef.current) {
        canvasRef.current.removeEventListener('wheel', preventZoom);
        canvasRef.current.removeEventListener('touchmove', preventZoom);
        canvasRef.current.removeEventListener('gesturestart', preventZoom);
        canvasRef.current.removeEventListener('gesturechange', preventZoom);
        canvasRef.current.removeEventListener('gestureend', preventZoom);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='md:relative absolute -top-[400px]  md:top-0 w-full  z-10 pointer-events-auto'
    ></canvas>
  );
}
