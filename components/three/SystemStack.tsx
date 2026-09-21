"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type Focus = "backend" | "ai" | "data";

const palettes: Record<Focus, string> = {
  backend: "#5f7565",
  ai: "#66758e",
  data: "#92775e",
};

function Stack({ focus }: { focus: Focus }) {
  const group = useRef<THREE.Group>(null);
  const accent = palettes[focus];

  const nodes = useMemo(
    () =>
      [
        [-1.15, 0.78, 0.15],
        [0, 1.08, -0.08],
        [1.12, 0.72, 0.1],
        [-0.82, -0.18, 0],
        [0.78, -0.15, 0.08],
        [0, -0.95, -0.05],
      ] as [number, number, number][],
    [],
  );

  const lines = useMemo(() => {
    return nodes.slice(0, -1).map((start, i) => {
      const end = nodes[i + 1];

      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(...start),
        new THREE.Vector3(...end),
      ]);

      const material = new THREE.LineBasicMaterial({
        color: accent,
        transparent: true,
        opacity: 0.3,
      });

      return new THREE.Line(geometry, material);
    });
  }, [nodes, accent]);

  useFrame(({ mouse, clock }) => {
    if (!group.current) return;

    group.current.rotation.y +=
      (mouse.x * 0.16 - group.current.rotation.y) * 0.035;

    group.current.rotation.x +=
      (mouse.y * -0.08 - group.current.rotation.x) * 0.035;

    group.current.position.y = Math.sin(clock.elapsedTime * 0.65) * 0.035;
  });

  return (
    <group ref={group}>
      {/* Layered system blocks */}
      {[0, 1, 2, 3].map((layer) => {
        const scale = 1.65 - layer * 0.14;

        return (
          <mesh
            key={layer}
            position={[0, (layer - 1.5) * 0.42, 0]}
            rotation={[0.08, layer * 0.05, 0]}
          >
            <boxGeometry args={[scale, 0.16, scale]} />

            <meshStandardMaterial
              color={layer === 1 ? accent : "#7b827b"}
              roughness={0.82}
              metalness={0.08}
              transparent
              opacity={layer === 1 ? 0.94 : 0.48}
            />
          </mesh>
        );
      })}

      {/* System nodes */}
      {nodes.map((position, i) => (
        <mesh key={`node-${i}`} position={position}>
          <sphereGeometry args={[0.075 + (i % 2) * 0.018, 16, 16]} />

          <meshStandardMaterial
            color={accent}
            emissive={accent}
            emissiveIntensity={0.16}
            roughness={0.55}
          />
        </mesh>
      ))}

      {/* Connections between nodes */}
      {lines.map((line, i) => (
        <primitive key={`line-${i}`} object={line} />
      ))}

      {/* Central wireframe object */}
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[0.7, 0.7, 0.7]} />

        <meshStandardMaterial
          color={accent}
          wireframe
          transparent
          opacity={0.42}
        />
      </mesh>

      {/* Lighting */}
      <ambientLight intensity={1.35} />

      <directionalLight position={[2, 3, 4]} intensity={1.5} />

      <pointLight position={[-2, 1, 2]} intensity={0.5} color={accent} />
    </group>
  );
}

export default function SystemStack({ focus = "backend" }: { focus?: Focus }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 38 }}
      dpr={[1, 1.25]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <Stack focus={focus} />
    </Canvas>
  );
}
