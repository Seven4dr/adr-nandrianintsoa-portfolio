// src/components/ParticleBackground.jsx
import React from 'react';
import ParticleBackground from 'react-particle-backgrounds';

const Background = () => {
  const settings = {
    particle: {
      particleCount: 100,
      color: "#ffffff",
      minSize: 1,
      maxSize: 3
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 0.1,
      maxSpeed: 0.5
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.6,
      opacityTransitionTime: 10000
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <ParticleBackground settings={settings} />
    </div>
  );
};

export default Background;