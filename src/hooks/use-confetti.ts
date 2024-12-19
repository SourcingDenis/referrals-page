import confetti from 'canvas-confetti';

export function useConfetti() {
  const fireConfetti = (fromHover = false) => {
    const count = 200;
    const defaults = {
      origin: { y: fromHover ? 0.3 : 0.7 },
      zIndex: 1000,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#FF1493', '#00FF00', '#FFD700', '#FF4500', '#8A2BE2'],
    });

    fire(0.2, {
      spread: 60,
      colors: ['#FF69B4', '#32CD32', '#FFA500', '#4169E1', '#9370DB'],
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#FF6347', '#7CFC00', '#FFD700', '#1E90FF', '#BA55D3'],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#FF4500', '#00FA9A', '#DAA520', '#00BFFF', '#9932CC'],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#FF0000', '#00FF7F', '#FFA500', '#1E90FF', '#8B008B'],
    });
  };

  return { fireConfetti };
}