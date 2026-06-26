import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import SofaModel from "./SofaModel";
import TableModel from "./TableModel";

// Simple Bed Model for 3D configuration
function BedModel({ color, fabric, wood }: { color: string; fabric: string; wood: string }) {
  const activeColor = color === "Alabaster Cream" ? "#FAF9F6" : color === "Warm Sand" ? "#E8DCCF" : color === "Royal Navy Velvet" ? "#1E293B" : "#A65B46";
  const activeWood = wood === "Walnut" ? "#4B3621" : "#D8B899";

  return (
    <group position={[0, -0.2, 0]} scale={[1.1, 1.1, 1.1]}>
      {/* Wood Bed Frame */}
      <mesh castShadow receiveShadow position={[0, -0.15, 0]}>
        <boxGeometry args={[2.0, 0.15, 2.2]} />
        <meshStandardMaterial color={activeWood} roughness={0.5} />
      </mesh>

      {/* Headboard */}
      <mesh castShadow receiveShadow position={[0, 0.45, -1.0]}>
        <boxGeometry args={[2.1, 1.1, 0.18]} />
        <meshPhysicalMaterial color={activeColor} roughness={0.4} sheen={1.0} />
      </mesh>

      {/* Mattress */}
      <mesh castShadow receiveShadow position={[0, 0.1, 0.05]}>
        <boxGeometry args={[1.9, 0.35, 2.0]} />
        <meshStandardMaterial color="#FAF9F6" roughness={0.9} />
      </mesh>

      {/* Pillow Left */}
      <mesh castShadow position={[-0.45, 0.32, -0.7]}>
        <boxGeometry args={[0.65, 0.12, 0.45]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.9} />
      </mesh>

      {/* Pillow Right */}
      <mesh castShadow position={[0.45, 0.32, -0.7]}>
        <boxGeometry args={[0.65, 0.12, 0.45]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.9} />
      </mesh>
    </group>
  );
}

// Simple Desk Model for 3D configuration
function DeskModel({ wood }: { wood: string }) {
  const activeWood = wood === "Walnut" ? "#4B3621" : wood === "Blackened Oak" ? "#2B2625" : "#D8B899";
  return (
    <group position={[0, -0.1, 0]} scale={[1.1, 1.1, 1.1]}>
      {/* Desk Top */}
      <mesh castShadow receiveShadow position={[0, 0.35, 0]}>
        <boxGeometry args={[2.4, 0.08, 1.2]} />
        <meshStandardMaterial color={activeWood} roughness={0.4} />
      </mesh>

      {/* Leather Blotter (Center Pad) */}
      <mesh receiveShadow position={[0, 0.395, 0]}>
        <boxGeometry args={[1.2, 0.005, 0.8]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.7} />
      </mesh>

      {/* Left Drawer Cabinet */}
      <mesh castShadow position={[-0.8, 0.0, 0]}>
        <boxGeometry args={[0.45, 0.6, 1.0]} />
        <meshStandardMaterial color={activeWood} roughness={0.5} />
      </mesh>

      {/* Right Drawer Cabinet */}
      <mesh castShadow position={[0.8, 0.0, 0]}>
        <boxGeometry args={[0.45, 0.6, 1.0]} />
        <meshStandardMaterial color={activeWood} roughness={0.5} />
      </mesh>

      {/* Modern Metal Supports (Legs) */}
      <mesh castShadow position={[0, -0.32, 0]}>
        <boxGeometry args={[2.0, 0.04, 0.8]} />
        <meshStandardMaterial color="#222" roughness={0.3} metalness={0.8} />
      </mesh>
    </group>
  );
}

interface ConfiguratorCanvasProps {
  productId: string;
  color: string;
  fabric: string;
  wood: string;
}

export default function ConfiguratorCanvas({ productId, color, fabric, wood }: ConfiguratorCanvasProps) {
  // Render corresponding model based on product ID
  const renderModel = () => {
    switch (productId) {
      case "emerson-boucle-sofa":
        return <SofaModel color={color} fabric={fabric} wood={wood} />;
      case "serene-linen-armchair":
        // Render sofa scaled down to resemble an armchair
        return (
          <group scale={[0.7, 0.95, 0.85]}>
            <SofaModel color={color} fabric={fabric} wood={wood} />
          </group>
        );
      case "bespoke-walnut-dining":
        return <TableModel wood={wood} />;
      case "travertine-plinth-table":
        // For the travertine stone, we mock it by loading TableModel with a light wood/stone appearance
        return (
          <group scale={[0.9, 0.8, 0.9]}>
            <TableModel wood={wood || "Natural Oak"} />
          </group>
        );
      case "aurelia-velvet-bed":
      case "astrid-sleep-oasis":
        return <BedModel color={color} fabric={fabric} wood={wood} />;
      case "aileron-walnut-desk":
      case "nordic-office-chair":
        return <DeskModel wood={wood} />;
      default:
        return <SofaModel color={color} fabric={fabric} wood={wood} />;
    }
  };

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing bg-[#fbfbfa]">
      <Canvas
        shadows
        camera={{ position: [2.5, 1.8, 3.5], fov: 45 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <Stage
            preset="rembrandt"
            intensity={1.0}
            environment="apartment"
            adjustCamera={false}
            shadows={{ type: "contact", opacity: 0.25, blur: 2.5 }}
          >
            {renderModel()}
          </Stage>
        </Suspense>

        {/* Orbit Controls to rotate, pan and zoom */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={1.8}
          maxDistance={6.0}
          maxPolarAngle={Math.PI / 2 - 0.05} // prevent going below ground
          makeDefault
        />
      </Canvas>
    </div>
  );
}
