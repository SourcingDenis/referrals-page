import { Button } from '@/components/ui/button';
import { SendHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useConfetti } from '@/hooks/use-confetti';
import { useEffect, useState } from 'react';

export function Header() {
  const { fireConfetti } = useConfetti();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    fireConfetti(false);
  };

  const handleHover = () => {
    fireConfetti(true);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header className="w-full border-b bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <div className="w-full max-w-[1800px] mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <div className="w-8" /> {/* Spacer for balanced layout */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className={cn(
                "hidden md:inline-flex items-center",
                "bg-primary text-primary-foreground hover:bg-primary/90",
                "shadow-lg hover:shadow-xl transition-all duration-300",
                "relative overflow-hidden"
              )}
              size="lg"
              onClick={handleClick}
              onMouseEnter={handleHover}
            >
              <a href="https://jobs.ashbyhq.com/playson" target="_blank" rel="noopener noreferrer">
                Submit a Referral
                <SendHorizontal className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button
              asChild
              className={cn(
                "md:hidden",
                "bg-primary text-primary-foreground hover:bg-primary/90",
                "shadow-lg hover:shadow-xl transition-all duration-300",
                "p-2"
              )}
              size="icon"
              onClick={handleClick}
              onMouseEnter={handleHover}
            >
              <a href="https://jobs.ashbyhq.com/playson" target="_blank" rel="noopener noreferrer">
                <SendHorizontal className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="h-1 bg-muted">
          <div 
            className="h-full bg-gradient-to-r from-primary to-blue-600 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>
    </div>
  );
}