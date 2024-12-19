import { Button } from '@/components/ui/button';
import { SendHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useConfetti } from '@/hooks/use-confetti';

export function Header() {
  const { fireConfetti } = useConfetti();

  const handleClick = () => {
    fireConfetti(false);
  };

  const handleHover = () => {
    fireConfetti(true);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center justify-between px-4 md:px-8">
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
              <SendHorizontal className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}