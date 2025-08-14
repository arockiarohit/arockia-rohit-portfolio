import { Canvas } from '@react-three/fiber';
import { Float, Text3D, OrbitControls, Stars, Environment } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Tech Icon Component
function TechIcon({ position, color, children, delay = 0 }: { 
  position: [number, number, number]; 
  color: string; 
  children: React.ReactNode;
  delay?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + delay) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + delay) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.5;
    }
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      position={position}
    >
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <boxGeometry args={[1.5, 1.5, 0.3]} />
        <meshStandardMaterial 
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </mesh>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.3}
        height={0.1}
        position={[-0.4, -0.2, 0.2]}
      >
        {children}
        <meshStandardMaterial 
          color="#ffffff"
          metalness={0.5}
          roughness={0.3}
        />
      </Text3D>
    </Float>
  );
}

// Particle System
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#00bfff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00bfff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9d4edd" />
      
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
      
      <ParticleField />
      
      {/* Tech Icons positioned around the scene */}
      <TechIcon position={[-8, 4, -5]} color="#3776ab" delay={0}>
        PY
      </TechIcon>
      
      <TechIcon position={[8, -2, -3]} color="#e34c26" delay={1}>
        HTML
      </TechIcon>
      
      <TechIcon position={[-6, -4, 2]} color="#1572b6" delay={2}>
        CSS
      </TechIcon>
      
      <TechIcon position={[6, 6, -2]} color="#092e20" delay={3}>
        DJ
      </TechIcon>
      
      <TechIcon position={[-4, 2, 4]} color="#000000" delay={4}>
        FL
      </TechIcon>
      
      <TechIcon position={[4, -6, 3]} color="#0db7ed" delay={5}>
        DOC
      </TechIcon>
      
      <TechIcon position={[0, 8, -4]} color="#ff6c37" delay={6}>
        API
      </TechIcon>
      
      <Environment preset="night" />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export default function Portfolio3DBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}