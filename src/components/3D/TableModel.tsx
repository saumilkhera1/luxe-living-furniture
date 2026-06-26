import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface TableModelProps {
  wood: string;
  color?: string;
  isFloating?: boolean;
}

// Map wood names to hex codes
const WOOD_COLORS: Record<string, string> = {
  "Walnut": "#4B3621",
  "Natural Oak": "#D8B899",
  "Dark Stained Oak": "#2B2625",
  "Natural Maple": "#E6C2A0",
  default: "#4B3621"
};

export default function TableModel({ wood, color, isFloating = false }: TableModelProps) {
  const tableGroupRef = useRef<THREE.Group>(null);

  // Floating animation for configurator or scenes if enabled
  useFrame((state) => {
    if (isFloating && tableGroupRef.current) {
      const elapsed = state.clock.getElapsedTime();
      tableGroupRef.current.position.y = Math.sin(elapsed * 1.0) * 0.08 - 0.1;
      tableGroupRef.current.rotation.y = elapsed * 0.06;
    }
  });

  const activeWoodColor = WOOD_COLORS[wood] || WOOD_COLORS.default;

  return (
    <group ref={tableGroupRef} position={[0, -0.1, 0]} scale={[1.1, 1.1, 1.1]}>
      {/* Table Top Slab */}
      <mesh castShadow receiveShadow position={[0, 0.35, 0]}>
        <boxGeometry args={[3.0, 0.12, 1.4]} />
        <meshStandardMaterial 
          color={activeWoodColor} 
          roughness={0.4} 
          metalness={0.05} 
        />
      </mesh>

      {/* Underframe Support Structure */}
      <mesh castShadow receiveShadow position={[0, 0.25, 0]}>
        <boxGeometry args={[2.4, 0.08, 0.8]} />
        <meshStandardMaterial color={activeWoodColor} roughness={0.6} metalness={0.0} />
      </mesh>

      {/* Left Heavy Slab Leg */}
      <mesh castShadow position={[-1.0, -0.1, 0]}>
        <boxGeometry args={[0.18, 0.78, 1.0]} />
        <meshStandardMaterial color={activeWoodColor} roughness={0.5} metalness={0.0} />
      </mesh>

      {/* Right Heavy Slab Leg */}
      <mesh castShadow position={[1.0, -0.1, 0]}>
        <boxGeometry args={[0.18, 0.78, 1.0]} />
        <meshStandardMaterial color={activeWoodColor} roughness={0.5} metalness={0.0} />
      </mesh>

      {/* Center Metal Stretcher Rod (adds luxury structural contrast) */}
      <mesh castShadow position={[0, -0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.02, 1.9]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.9} />
      </mesh>
    </group>
  );
}
