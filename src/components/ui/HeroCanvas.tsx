"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { Mesh } from "three";

function MorphingConstruct() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      {/* Outer subtle wireframe */}
      <Sphere args={[1.6, 64, 64]}>
        <MeshDistortMaterial 
          color="#3b82f6" 
          distort={0.4} 
          speed={1.5} 
          roughness={0} 
          metalness={1}
          wireframe={true}
          transparent
          opacity={0.15}
        />
      </Sphere>
      {/* Inner solid core */}
      <Sphere ref={meshRef} args={[1.2, 64, 64]}>
        <MeshDistortMaterial 
          color="#05050a" 
          distort={0.3} 
          speed={2} 
          roughness={0.2} 
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 10]} intensity={4} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={2} color="#7c3aed" />
        <MorphingConstruct />
      </Canvas>
    </div>
  );
}
