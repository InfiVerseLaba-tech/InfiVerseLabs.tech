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

    // Points geometry (stars)
    const particles = 900;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particles * 3);

    for (let i = 0; i < particles; i++) {
      const i3 = i * 3;
      // spread points in a wide 3d area
      positions[i3 + 0] = (Math.random() * 2 - 1) * 900; // x
      positions[i3 + 1] = (Math.random() * 2 - 1) * 500; // y
      positions[i3 + 2] = (Math.random() * 2 - 1) * 800; // z
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Create a star sprite: white center with a light-pink border and subtle glow
    const createStarTexture = (size = 64) => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d')!;

      const cx = size / 2;
      const cy = size / 2;
      const radius = size * 0.28;

      // outer glow radial gradient (soft pink)
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, size / 2);
      grad.addColorStop(0, 'rgba(255,255,255,0.85)');
      grad.addColorStop(0.6, 'rgba(255,240,245,0.35)');
      grad.addColorStop(1, 'rgba(236,72,153,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);

      // center bright dot
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,1)';
      ctx.fill();

      // pink border
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.lineWidth = Math.max(1, size * 0.06);
      ctx.strokeStyle = 'rgba(236,72,153,0.95)'; // pink-500
      ctx.stroke();

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const starTexture = createStarTexture(128);

    const material = new THREE.PointsMaterial({
      size: 8.0,
      map: starTexture,
      transparent: true,
      alphaTest: 0.01,
      depthWrite: false,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      color: new THREE.Color(0xffffff),
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
      // dispose texture if created
      if ((material as any).map) {
        (material as any).map.dispose();
      }
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
