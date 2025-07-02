'use client';

import { TechStackIcon } from '@/interfaces/constant';
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';

function TechIcon({ model }: { model: TechStackIcon }) {
  const scene = useGLTF(model.modelPath);
  
  return (
    <Canvas
      gl={{
        // Prevent context loss - these are the only changes
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true,
        failIfMajorPerformanceCaveat: false,
        powerPreference: "default"
      }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} autoRotate={true}  autoRotateSpeed={0.5} />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
}

export default TechIcon;