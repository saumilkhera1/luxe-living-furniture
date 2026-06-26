import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function BackgroundShapes() {
  const pointsRef = useRef<THREE.Points>(null);
  const shapesRef = useRef<THREE.Group>(null);

  // Generate random points for soft particle background
  const [positions, speeds] = useMemo(() => {
    const count = 120;
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 3; // Z
      speeds[i] = 0.05 + Math.random() * 0.1;
    }
    return [positions, speeds];
  }, []);

  // Update particles and floating shapes frame by frame
  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();

    // Rotate points group gently
    if (pointsRef.current) {
      pointsRef.current.rotation.y = elapsed * 0.02;
      pointsRef.current.rotation.x = elapsed * 0.01;
      
      // Gentle drift upward
      const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < speeds.length; i++) {
        positionsArray[i * 3 + 1] += speeds[i] * 0.005; // Move up
        if (positionsArray[i * 3 + 1] > 4) {
          positionsArray[i * 3 + 1] = -4; // Loop back
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Floating shapes motion
    if (shapesRef.current) {
      shapesRef.current.children.forEach((child, index) => {
        const shape = child as THREE.Mesh;
        const offset = index * 2.5;
        shape.position.y = Math.sin(elapsed * 0.6 + offset) * 0.15;
        shape.rotation.x = elapsed * 0.1 + offset;
        shape.rotation.y = elapsed * 0.15 - offset;
      });
    }
  });

  return (
    <group>
      {/* Particle System */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#d8b899"
          size={0.06}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.35}
          depthWrite={false}
        />
      </points>

      {/* Floating Abstract Luxury Elements */}
      <group ref={shapesRef}>
        {/* Floating Ring 1 */}
        <mesh position={[-2.5, 1.5, -2.5]}>
          <torusGeometry args={[0.4, 0.04, 8, 32]} />
          <meshStandardMaterial 
            color="#FAF9F6" 
            wireframe={true} 
            transparent={true} 
            opacity={0.12} 
          />
        </mesh>

        {/* Floating Sphere (Frosted Glass style) */}
        <mesh position={[2.8, -1.2, -2.0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshPhysicalMaterial 
            color="#FAF9F6" 
            transmission={0.9} 
            roughness={0.2} 
            thickness={1} 
            transparent={true} 
            opacity={0.2} 
          />
        </mesh>

        {/* Floating Tetrahedron */}
        <mesh position={[-3.0, -1.5, -2.0]}>
          <tetrahedronGeometry args={[0.35]} />
          <meshStandardMaterial 
            color="#E8DCCF" 
            wireframe={true} 
            transparent={true} 
            opacity={0.15} 
          />
        </mesh>
      </group>
    </group>
  );
}
