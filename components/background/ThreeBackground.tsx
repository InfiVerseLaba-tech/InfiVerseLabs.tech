import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    // Points geometry
    const particles = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particles * 3);
    const colors = new Float32Array(particles * 3);

    // theme colors: sky -> violet gradient
    const colorA = new THREE.Color('#06b6d4'); // sky-400-ish
    const colorB = new THREE.Color('#8b5cf6'); // violet-500-ish

    for (let i = 0; i < particles; i++) {
      const i3 = i * 3;
      // spread points in a wide 3d area
      positions[i3 + 0] = (Math.random() * 2 - 1) * 800; // x
      positions[i3 + 1] = (Math.random() * 2 - 1) * 400; // y
      positions[i3 + 2] = (Math.random() * 2 - 1) * 600; // z

      const t = Math.random();
      const mixed = colorA.clone().lerp(colorB, t);
      colors[i3 + 0] = mixed.r;
      colors[i3 + 1] = mixed.g;
      colors[i3 + 2] = mixed.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 3.0,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // subtle fog/glow
    scene.fog = new THREE.FogExp2('#0f172a', 0.0006);

    let frameId: number;
    const clock = new THREE.Clock();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    const animate = () => {
      const t = clock.getElapsedTime();

      // rotate whole point cloud slowly
      points.rotation.y = t * 0.06;
      points.rotation.x = Math.sin(t / 5) * 0.05;

      // gentle per-vertex movement
      const pos = geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < pos.count; i++) {
        const i3 = i * 3;
        pos.array[i3 + 2] += Math.sin(t + i) * 0.0005; // tiny z wobble
      }
      pos.needsUpdate = true;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>
    </div>
  );
};

export default ThreeBackground;
