import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import SofaModel from "./SofaModel";
import BackgroundShapes from "./BackgroundShapes";

function CameraRig() {
  useFrame((state) => {
    const { x, y } = state.pointer; // Normalized mouse values between -1 and 1
    // Interpolate camera coordinates smoothly for a parallax effect
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, x * 0.9, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, y * 0.7 + 0.3, 0.05);
    // Maintain focus on the center of the sofa
    state.camera.lookAt(0, -0.1, 0);
  });
  return null;
}

export default function HeroCanvas() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        shadows
        camera={{ position: [0, 0.3, 3.2], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Soft Ambient Light */}
        <ambientLight intensity={0.5} />

        {/* Realistic Spotlight casting soft shadows */}
        <spotLight
          position={[5, 8, 5]}
          angle={0.3}
          penumbra={1}
          intensity={2.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />

        {/* Front Warm Accent Fill Light */}
        <directionalLight 
          position={[-3, 2, 2]} 
          intensity={1.0} 
          color="#F5EFE6" // Cream-toned light
        />

        {/* Back Rim Light */}
        <directionalLight 
          position={[0, 4, -4]} 
          intensity={0.6} 
          color="#E8DCCF" 
        />

        {/* Ambient floating elements & particles */}
        <BackgroundShapes />

        {/* Floating Interactive Sofa Model */}
        <SofaModel 
          color="Alabaster Cream" 
          fabric="Bouclé" 
          wood="Natural Oak" 
          isFloating={true} 
        />

        {/* Soft Shadow Receiver Ground Plane */}
        <mesh 
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[0, -0.85, 0]} 
          receiveShadow
        >
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.15} />
        </mesh>

        {/* Parallax interaction script */}
        <CameraRig />
      </Canvas>
    </div>
  );
}
