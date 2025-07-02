'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerformanceMonitor } from '@react-three/drei';
import { Room } from './room';
import * as Three from 'three';
import Particles from './particles';
function HeroExperience() {
  const isTablet = typeof window !== 'undefined' && window.innerWidth <= 1024;
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  return (
    <>
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <PerformanceMonitor>
          <HeroLight />
          <Particles count={100} />
          <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            autoRotate={true}
            autoRotateSpeed={isMobile ? 0.5 : isTablet ? 0.8 : 1.2}
          />
          {/* 
         minPolarAngle={Math.PI / 3.5}  // restrict up/down
  maxPolarAngle={Math.PI / 2.2}
  minAzimuthAngle={-Math.PI / 8} // restrict left/right
  maxAzimuthAngle={Math.PI / 8}
   */}
          <group
            scale={isMobile ? 1.5 : isTablet ? 1.1 : 1.2}
            position={[0, -3.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <Room />
          </group>
        </PerformanceMonitor>
      </Canvas>
    </>
  );
}

export default HeroExperience;

function HeroLight() {
  return (
    <>
      <spotLight position={[2, 5, 6]} intensity={100} angle={0.15} penumbra={0.2} color={'white'} />
      <spotLight position={[4, 5, 4]} intensity={90} angle={0.3} penumbra={0.5} color="#4cc9f0" />
      <spotLight position={[-3, 5, 5]} intensity={130} angle={0.4} penumbra={1} color="#9d4edd" />

      <primitive
        object={new Three.RectAreaLight('#A259FF', 8, 3, 2)}
        position={[1, 3, 4]}
        intensity={15}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />

      <pointLight position={[0, 1, 0]} intensity={10} color={'#7209b7'} />
      <pointLight position={[1, 2, -2]} intensity={10} color={'#0d00a4'} />
    </>
  );
}
