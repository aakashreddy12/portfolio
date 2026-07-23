'use client';

import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float,
  Environment,
  MeshDistortMaterial,
  Icosahedron,
  Torus,
  Octahedron,
} from '@react-three/drei';
import * as THREE from 'three';

function MainSphere() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.15;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <Icosahedron ref={mesh} args={[1.6, 4]}>
        <MeshDistortMaterial
          color="#dc2626"
          emissive="#7f1d1d"
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.9}
          distort={0.35}
          speed={1.5}
          envMapIntensity={1.2}
        />
      </Icosahedron>
    </Float>
  );
}

function GoldSphere({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.3;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={mesh} position={position} scale={scale}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#b45309"
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={1}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus({
  position,
  rotation,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.4 + rotation[0];
    mesh.current.rotation.y = state.clock.elapsedTime * 0.3 + rotation[1];
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.2}>
      <Torus ref={mesh} args={[0.4, 0.12, 16, 48]} position={position}>
        <meshStandardMaterial
          color="#dc2626"
          emissive="#450a0a"
          emissiveIntensity={0.2}
          roughness={0.2}
          metalness={0.85}
          envMapIntensity={1}
        />
      </Torus>
    </Float>
  );
}

function FloatingOcta({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.5;
  });

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <Octahedron ref={mesh} args={[0.35, 0]} position={position} scale={scale}>
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#92400e"
          emissiveIntensity={0.25}
          roughness={0.05}
          metalness={1}
          envMapIntensity={1.5}
        />
      </Octahedron>
    </Float>
  );
}

function Particles() {
  const points = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return positions;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
          count={200}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#f59e0b"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight
        position={[5, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        color="#dc2626"
      />
      <spotLight
        position={[-5, -3, 4]}
        angle={0.4}
        penumbra={1}
        intensity={1.5}
        color="#f59e0b"
      />
      <MainSphere />
      <GoldSphere position={[2.4, 1.2, -1]} scale={0.8} />
      <GoldSphere position={[-2.6, -0.8, -0.5]} scale={0.5} />
      <FloatingTorus position={[2, -1.6, 0.5]} rotation={[0, 0, 0]} />
      <FloatingTorus position={[-2.2, 1.5, -1]} rotation={[Math.PI / 4, 0, 0]} />
      <FloatingOcta position={[1.8, -1.8, 1]} scale={1} />
      <FloatingOcta position={[-2.8, 0.4, 1]} scale={0.7} />
      <Particles />
      <Environment preset="night" />
    </>
  );
}

export function Hero3D() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
