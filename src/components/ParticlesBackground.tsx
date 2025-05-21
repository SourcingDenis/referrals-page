import { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    if (container) {
      console.log('Particles container loaded:', container);
    }
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      className="absolute inset-0 -z-10"
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          opacity: 0,
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: '#3b82f6',
          },
          links: {
            color: '#3b82f6',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              height: 800,
              width: 800
            },
            value: 80,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
