'use client';

import { TechStackIcon } from '@/interfaces/constant';
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

function TechModel({ model, onLoad }: { model: TechStackIcon; onLoad: () => void }) {
  const gltf = useGLTF(model.modelPath!); // we check presence before this is used

  React.useEffect(() => {
    onLoad();
  }, [onLoad]);

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

function TechIcon({ model }: { model: TechStackIcon }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [loaded, setLoaded] = useState(false);

  //  If no 3D model, just render the image directly
  if (!model.modelPath) {
    return (
      <div className="w-full h-32 flex items-center justify-center">
        <Image
          src={model.src}
          alt={model.name}
          width={96}
          height={96}
          className="w-24 h-24 object-contain rounded-lg"
        />
      </div>
    );
  }

  // Otherwise, show image until 3D model loads
  return (
    <div ref={ref} className="relative w-full h-32 flex items-center justify-center">
      {!loaded && (
        <Image
          src={model.src}
          alt={model.name}
          width={96}
          height={96}
          className="w-24 h-24 object-contain rounded-lg absolute"
        />
      )}

      {inView && (
        <Canvas
          className="w-full h-full"
          gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <TechModel model={model} onLoad={() => setLoaded(true)} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}

export default TechIcon;
