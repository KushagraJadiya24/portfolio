"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type LabMode = "grid" | "paper" | "code";

function makeTexture(mode: LabMode) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = mode === "paper" ? "#d9ddd6" : mode === "code" ? "#17201b" : "#e8ebe5";
  ctx.fillRect(0, 0, 512, 512);

  if (mode === "grid") {
    ctx.strokeStyle = "rgba(79,96,85,.24)";
    ctx.lineWidth = 2;
    for (let i = 0; i <= 512; i += 64) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 512); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(512, i); ctx.stroke();
    }
    ctx.fillStyle = "#557060";
    ctx.fillRect(238, 238, 36, 36);
  } else if (mode === "paper") {
    ctx.fillStyle = "#557060";
    ctx.font = "600 30px Arial";
    ctx.fillText("BUILD", 54, 92);
    ctx.fillStyle = "#69736d";
    ctx.font = "18px monospace";
    ctx.fillText("systems / APIs / data", 54, 130);
    ctx.strokeStyle = "rgba(32,38,34,.18)";
    ctx.beginPath(); ctx.moveTo(54, 166); ctx.lineTo(458, 166); ctx.stroke();
    ctx.fillStyle = "#202622";
    ctx.font = "16px monospace";
    ["Spring Boot", "FastAPI", "PostgreSQL", "Redis"].forEach((t, i) => ctx.fillText(t, 54, 216 + i * 48));
  } else {
    ctx.fillStyle = "#9db9a6";
    ctx.font = "600 22px monospace";
    ctx.fillText("const build =", 42, 88);
    ctx.fillStyle = "#e8ece8";
    ctx.font = "18px monospace";
    ["backend", "ai", "systems"].forEach((t, i) => ctx.fillText(`  '${t}'`, 42, 136 + i * 38));
    ctx.fillStyle = "#c3a17f";
    ctx.fillText("};", 42, 270);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function LabCube({ mode }: { mode: LabMode }) {
  const mesh = useRef<THREE.Mesh>(null);
  const { gl } = useThree();
  const [dragging, setDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: -0.35, y: 0.65 });
  const previous = useRef({ x: 0, y: 0 });
  const texture = useMemo(() => makeTexture(mode), [mode]);

  useEffect(() => () => texture.dispose(), [texture]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    if (!dragging) {
      mesh.current.rotation.y += 0.0035;
      mesh.current.rotation.x += Math.sin(clock.elapsedTime * 0.55) * 0.0005;
    }
    mesh.current.rotation.x += (rotation.x - mesh.current.rotation.x) * 0.12;
    mesh.current.rotation.y += (rotation.y - mesh.current.rotation.y) * 0.12;
  });

  useEffect(() => {
    gl.domElement.style.cursor = dragging ? "grabbing" : "grab";
    return () => { gl.domElement.style.cursor = "default"; };
  }, [dragging, gl]);

  return (
    <mesh ref={mesh}
      onPointerDown={(e) => { e.stopPropagation(); setDragging(true); previous.current = { x: e.clientX, y: e.clientY }; }}
      onPointerUp={() => setDragging(false)}
      onPointerOut={() => setDragging(false)}
      onPointerMove={(e) => {
        if (!dragging) return;
        const dx = e.clientX - previous.current.x;
        const dy = e.clientY - previous.current.y;
        previous.current = { x: e.clientX, y: e.clientY };
        setRotation((r) => ({ x: Math.max(-1.05, Math.min(1.05, r.x + dy * 0.012)), y: r.y + dx * 0.012 }));
      }}
    >
      <boxGeometry args={[1.9, 1.9, 1.9]} />
      <meshStandardMaterial map={texture} roughness={0.62} metalness={0.08} />
    </mesh>
  );
}

export default function ObjectLab() {
  const [mode, setMode] = useState<LabMode>("grid");
  return (
    <div className="relative h-full w-full">
      <Canvas camera={{ position: [0, 0, 5.1], fov: 38 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 4, 5]} intensity={2.1} />
        <directionalLight position={[-3, -1, 2]} intensity={0.55} />
        <LabCube mode={mode} />
      </Canvas>
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2 border-t border-[var(--line)] pt-3">
        <span className="mr-1 font-mono text-[9px] uppercase tracking-[.1em] text-[var(--faint)]">surface</span>
        {([['grid', 'Grid'], ['paper', 'Notes'], ['code', 'Code']] as const).map(([id, label]) => (
          <button key={id} onClick={() => setMode(id)} className={`focus-ring border px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.08em] transition-colors ${mode === id ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--text)]' : 'border-[var(--line)] text-[var(--faint)] hover:border-[var(--accent)] hover:text-[var(--accent)]'}`}>
            {label}
          </button>
        ))}
        <span className="ml-auto hidden font-mono text-[9px] uppercase tracking-[.08em] text-[var(--faint)] sm:block">drag to rotate</span>
      </div>
    </div>
  );
}
