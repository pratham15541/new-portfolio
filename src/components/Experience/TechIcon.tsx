'use client';

import { TechStackIcon } from '@/interfaces/constant';
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

// ✅ Preload models
import { techStackIcons } from '@/constants/constant';
techStackIcons.forEach((icon) => useGLTF.preload(icon.modelPath));

// 3D Scene content
function TechModel({ model }: { model: TechStackIcon }) {
  const gltf = useGLTF(model.modelPath);
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={gltf.scene} />
        </group>
      </Float>
    </>
  );
}

// Wrapper Component
function TechIcon({ model }: { model: TechStackIcon }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="w-full h-32">
      {inView ? (
        <Canvas
          gl={{
            preserveDrawingBuffer: true,
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
        >
          <Suspense fallback={null}>
            <TechModel model={model} />
          </Suspense>
        </Canvas>
      ) : (
        <></>
      )}
    </div>
  );
}

export default TechIcon;
