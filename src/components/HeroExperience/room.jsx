'use client';
import React, { useMemo, useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';
import { glbLocation, matTextureLocation } from '@/constants/constant';

export function Room(props) {
  const { nodes, materials } = useGLTF(glbLocation, true, true);
  const matcapTexture = useTexture(matTextureLocation);
  const screensRef = useRef();

  // Memoized materials
  const curtainMaterial = useMemo(
    () => new THREE.MeshPhongMaterial({ color: '#d90429' }),
    []
  );

  const bodyMaterial = useMemo(
    () => new THREE.MeshPhongMaterial({ map: matcapTexture }),
    [matcapTexture]
  );

  const tableMaterial = useMemo(
    () => new THREE.MeshPhongMaterial({ color: '#582f0e' }),
    []
  );

  const radiatorMaterial = useMemo(
    () => new THREE.MeshPhongMaterial({ color: '#fff' }),
    []
  );

  const compMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#fff' }),
    []
  );

  const pillowMaterial = useMemo(
    () => new THREE.MeshPhongMaterial({ color: '#8338ec' }),
    []
  );

  const chairMaterial = useMemo(
    () => new THREE.MeshPhongMaterial({ color: '#000' }),
    []
  );

  // Meshes using blinn1 material
  const blinn1Meshes = [
    'handls_blinn1_0',
    'keyboard_blinn1_0',
    'kovrik_blinn1_0',
    'lamp_bl_blinn1_0',
    'lamp_white_blinn1_0',
    'miuse_blinn1_0',
    'monitor2_blinn1_0',
    'monitor3_blinn1_0',
    'pCylinder5_blinn1_0',
    'polySurface53_blinn1_0',
    'radiator_blinn1_0001',
    'railing_blinn1_0',
    'red_bttns_blinn1_0',
    'red_vac_blinn1_0',
    'stylus_blinn1_0',
    'tablet_blinn1_0',
    'triangle_blinn1_0',
    'vac_black_blinn1_0',
    'vacuum1_blinn1_0',
    'vacuumgrey_blinn1_0',
    'vires_blinn1_0',
    'window_blinn1_0',
  ];

  return (
    <group {...props} dispose={null}>
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef}
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>

      {/* Custom materials */}
      <mesh geometry={nodes._________6_blinn1_0.geometry} material={curtainMaterial} />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={bodyMaterial} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={tableMaterial} />
      <mesh geometry={nodes.chair_body_blinn1_0.geometry} material={chairMaterial} />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={compMaterial} />
      <mesh ref={screensRef} geometry={nodes.emis_lambert1_0.geometry} material={materials.lambert1} />
      <mesh geometry={nodes.pillows_blinn1_0.geometry} material={pillowMaterial} />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={tableMaterial} />
      <mesh geometry={nodes.radiator_blinn1_0.geometry} material={radiatorMaterial} />
      <mesh geometry={nodes.window4_phong1_0.geometry} material={materials.phong1} />

      {/* Shared material meshes */}
      {blinn1Meshes.map((key) => (
        <mesh
          key={key}
          geometry={nodes[key]?.geometry}
          material={materials.blinn1}
        />
      ))}
    </group>
  );
}

useGLTF.preload(glbLocation, true, true);
