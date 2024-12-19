import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { Container } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    try {
      await loadFull(engine as any);
    } catch (error) {
      console.error('Error initializing particles:', error);
    }
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      console.log('Particles container loaded:', container);
    }
  }, []);

  return (
    <Particles
      className="absolute inset-0 -z-10"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
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
              area: 800,
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
