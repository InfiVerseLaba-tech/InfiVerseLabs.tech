
import React from 'react';

export const AnimatedPipeline: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center opacity-20">
    <svg width="800" height="400" viewBox="0 0 800 400" className="w-full h-full">
      <defs>
        <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <style>
          {`
            .pipe-flow {
              stroke-dasharray: 20 10;
              animation: flow 2s linear infinite;
            }
            @keyframes flow {
              to {
                stroke-dashoffset: -30;
              }
            }
          `}
        </style>
      </defs>
      
      <g fill="none" stroke="url(#pipeGradient)" strokeWidth="4">
        <path d="M50 200 H 200" />
        <path d="M300 200 H 450" />
        <path d="M550 200 H 700" />
      </g>
      
      <g fill="#0f172a" stroke="#38bdf8" strokeWidth="2">
        <circle cx="250" cy="200" r="40" />
        <circle cx="500" cy="200" r="40" />
      </g>

      <g stroke="#7c3aed" strokeWidth="2" className="pipe-flow">
        <path d="M50 200 H 200" />
        <path d="M300 200 H 450" />
        <path d="M550 200 H 700" />
      </g>
      
      <text x="250" y="205" textAnchor="middle" fill="#f8fafc" className="font-heading text-xs">Build</text>
      <text x="500" y="205" textAnchor="middle" fill="#f8fafc" className="font-heading text-xs">Deploy</text>
    </svg>
  </div>
);

export const AnimatedNeuralNetwork: React.FC = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
      <svg width="800" height="400" viewBox="0 0 800 400" className="w-full h-full">
          <style>
          {`
            .node { animation: pulse 4s ease-in-out infinite; }
            .node:nth-child(2) { animation-delay: 0.5s; }
            .node:nth-child(3) { animation-delay: 1s; }
            .node:nth-child(4) { animation-delay: 1.5s; }
            .node:nth-child(5) { animation-delay: 2s; }
            .node:nth-child(6) { animation-delay: 2.5s; }
            .synapse {
              stroke-dasharray: 5 5;
              animation: synapse-flow 5s linear infinite;
            }
            @keyframes pulse { 0%, 100% { fill-opacity: 0.4; } 50% { fill-opacity: 1; } }
            @keyframes synapse-flow { to { stroke-dashoffset: -20; } }
          `}
        </style>
        <g stroke="#38bdf8" strokeOpacity="0.3" strokeWidth="1">
            <path d="M100 100 L 400 50" className="synapse" />
            <path d="M100 200 L 400 50" className="synapse" />
            <path d="M100 300 L 400 50" className="synapse" />
            <path d="M100 100 L 400 200" className="synapse" />
            <path d="M100 200 L 400 200" className="synapse" />
            <path d="M100 300 L 400 200" className="synapse" />
            <path d="M100 100 L 400 350" className="synapse" />
            <path d="M100 200 L 400 350" className="synapse" />
            <path d="M100 300 L 400 350" className="synapse" />
             <path d="M400 50 L 700 200" className="synapse" />
            <path d="M400 200 L 700 200" className="synapse" />
            <path d="M400 350 L 700 200" className="synapse" />
        </g>
        <g fill="#38bdf8">
            <circle cx="100" cy="100" r="15" className="node" />
            <circle cx="100" cy="200" r="15" className="node" />
            <circle cx="100" cy="300" r="15" className="node" />
            <circle cx="400" cy="50" r="15" className="node" />
            <circle cx="400" cy="200" r="15" className="node" />
            <circle cx="400" cy="350" r="15" className="node" />
            <circle cx="700" cy="200" r="15" className="node" />
        </g>
      </svg>
    </div>
);

export const AnimatedCodeUI: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center opacity-10">
    <div className="flex gap-4 w-[800px] h-[400px]">
        <div className="w-1/2 bg-slate-800 rounded-lg p-4 font-mono text-xs text-green-400 overflow-hidden">
            <p className="animate-typing whitespace-nowrap overflow-hidden">{'<GradientButton>Build Fast</GradientButton>'}</p>
        </div>
        <div className="w-1/2 bg-slate-700 rounded-lg flex items-center justify-center">
            <button className="px-6 py-2 bg-gradient-to-r from-sky-500 to-violet-500 text-white rounded-md">Build Fast</button>
        </div>
    </div>
  </div>
);

export const AnimatedCharts: React.FC = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <svg width="800" height="400" viewBox="0 0 800 400" className="w-full h-full">
            <style>{`.bar { animation: rise 2s ease-out; } @keyframes rise { from { height: 0; } }`}</style>
            <g stroke="#38bdf8" strokeWidth="2" fill="none">
                <path d="M50 350 H 750" />
                <path d="M50 50 V 350" />
            </g>
            <g fill="#38bdf8" fillOpacity="0.5">
                <rect x="100" y="200" width="80" height="150" className="bar" />
                <rect x="250" y="150" width="80" height="200" className="bar" style={{animationDelay: '0.2s'}} />
                <rect x="400" y="250" width="80" height="100" className="bar" style={{animationDelay: '0.4s'}}/>
                <rect x="550" y="100" width="80" height="250" className="bar" style={{animationDelay: '0.6s'}}/>
            </g>
        </svg>
    </div>
);

export const AnimatedSecurityShield: React.FC = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
      <svg width="400" height="400" viewBox="0 0 400 400" className="w-96 h-96">
        <defs>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <path d="M200 50 L 350 150 L 350 250 C 350 350 200 400 200 400 C 200 400 50 350 50 250 L 50 150 Z" fill="url(#shieldGradient)" fillOpacity="0.3" stroke="url(#shieldGradient)" strokeWidth="4">
            <animate attributeName="stroke-width" values="4;8;4" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M150 200 L 180 230 L 250 160" stroke="#f8fafc" strokeWidth="10" strokeLinecap="round" fill="none">
            <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>
);

