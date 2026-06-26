import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SofaModelProps {
  color: string;
  fabric: string;
  wood: string;
  isFloating?: boolean;
}

// Map color names to hex codes
const FABRIC_COLORS: Record<string, string> = {
  "Alabaster Cream": "#FAF9F6",
  "Warm Sand": "#E8DCCF",
  "Charcoal Gray": "#3D3D3D",
  "Rust Velvet": "#A65B46",
  "Soft Cream Velvet": "#F5EFE6",
  "Royal Navy Velvet": "#1E293B",
  "Sage Green": "#8F9779",
  default: "#FAF9F6"
};

// Map wood names to hex codes
const WOOD_COLORS: Record<string, string> = {
  "Natural Oak": "#D8B899",
  "Walnut": "#4B3621",
  "Matte Black Maple": "#1E1E1E",
  "Dark Stained Oak": "#2B2625",
  "Natural Maple": "#E6C2A0",
  default: "#D8B899"
};

export default function SofaModel({ color, fabric, wood, isFloating = false }: SofaModelProps) {
  const sofaGroupRef = useRef<THREE.Group>(null);

  // Floating animation for the Hero scene
  useFrame((state) => {
    if (isFloating && sofaGroupRef.current) {
      const elapsed = state.clock.getElapsedTime();
      sofaGroupRef.current.position.y = Math.sin(elapsed * 1.2) * 0.12 - 0.2;
      sofaGroupRef.current.rotation.y = elapsed * 0.08;
    }
  });

  const activeColor = FABRIC_COLORS[color] || FABRIC_COLORS.default;
  const activeWood = WOOD_COLORS[wood] || WOOD_COLORS.default;

  // Configure material parameters based on fabric type
  const materialProps = React.useMemo(() => {
    switch (fabric) {
      case "Royal Velvet":
        return {
          color: activeColor,
          roughness: 0.35,
          metalness: 0.1,
          sheen: 1.0,
          sheenColor: new THREE.Color("#ffffff"),
          sheenRoughness: 0.4,
          clearcoat: 0.1
        };
      case "Bouclé":
        return {
          color: activeColor,
          roughness: 0.95,
          metalness: 0.0,
          clearcoat: 0.0
        };
      case "Italian Linen":
      case "Belgian Linen":
      case "Cotton-Linen":
        return {
          color: activeColor,
          roughness: 0.85,
          metalness: 0.0,
          clearcoat: 0.0
        };
      default: // default matte fabric
        return {
          color: activeColor,
          roughness: 0.75,
          metalness: 0.0
        };
    }
  }, [fabric, activeColor]);

  return (
    <group ref={sofaGroupRef} position={[0, -0.2, 0]} scale={[1.1, 1.1, 1.1]}>
      {/* Wood Base Trim */}
      <mesh castShadow receiveShadow position={[0, -0.22, 0]}>
        <boxGeometry args={[3.2, 0.08, 1.3]} />
        <meshStandardMaterial color={activeWood} roughness={0.5} metalness={0.1} />
      </mesh>

      {/* Main Seat Deck (Upholstered Base) */}
      <mesh castShadow receiveShadow position={[0, -0.1, 0]}>
        <boxGeometry args={[3.2, 0.18, 1.3]} />
        <meshPhysicalMaterial {...materialProps} />
      </mesh>

      {/* Seat Cushion Left */}
      <mesh castShadow receiveShadow position={[-0.78, 0.06, 0.05]}>
        <boxGeometry args={[1.5, 0.22, 1.15]} />
        <meshPhysicalMaterial {...materialProps} roughness={materialProps.roughness + 0.05} />
      </mesh>

      {/* Seat Cushion Right */}
      <mesh castShadow receiveShadow position={[0.78, 0.06, 0.05]}>
        <boxGeometry args={[1.5, 0.22, 1.15]} />
        <meshPhysicalMaterial {...materialProps} roughness={materialProps.roughness + 0.05} />
      </mesh>

      {/* Left Armrest */}
      <mesh castShadow receiveShadow position={[-1.6, 0.2, 0]}>
        <boxGeometry args={[0.22, 0.55, 1.3]} />
        <meshPhysicalMaterial {...materialProps} />
      </mesh>

      {/* Right Armrest */}
      <mesh castShadow receiveShadow position={[1.6, 0.2, 0]}>
        <boxGeometry args={[0.22, 0.55, 1.3]} />
        <meshPhysicalMaterial {...materialProps} />
      </mesh>

      {/* Backrest Cushion Left */}
      <mesh castShadow receiveShadow position={[-0.78, 0.38, -0.48]}>
        <boxGeometry args={[1.45, 0.45, 0.26]} />
        <meshPhysicalMaterial {...materialProps} />
      </mesh>

      {/* Backrest Cushion Right */}
      <mesh castShadow receiveShadow position={[0.78, 0.38, -0.48]}>
        <boxGeometry args={[1.45, 0.45, 0.26]} />
        <meshPhysicalMaterial {...materialProps} />
      </mesh>

      {/* Wood Legs */}
      {/* Front Left Leg */}
      <mesh castShadow position={[-1.4, -0.42, 0.5]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.04, 0.34]} />
        <meshStandardMaterial color={activeWood} roughness={0.4} metalness={0.1} />
      </mesh>
      {/* Front Right Leg */}
      <mesh castShadow position={[1.4, -0.42, 0.5]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.04, 0.34]} />
        <meshStandardMaterial color={activeWood} roughness={0.4} metalness={0.1} />
      </mesh>
      {/* Back Left Leg */}
      <mesh castShadow position={[-1.4, -0.42, -0.5]}>
        <cylinderGeometry args={[0.06, 0.04, 0.34]} />
        <meshStandardMaterial color={activeWood} roughness={0.4} metalness={0.1} />
      </mesh>
      {/* Back Right Leg */}
      <mesh castShadow position={[1.4, -0.42, -0.5]}>
        <cylinderGeometry args={[0.06, 0.04, 0.34]} />
        <meshStandardMaterial color={activeWood} roughness={0.4} metalness={0.1} />
      </mesh>
    </group>
  );
}
