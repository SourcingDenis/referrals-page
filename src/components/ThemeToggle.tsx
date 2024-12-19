import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="relative w-9 h-9 rounded-full hover:bg-transparent"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Sun 
          className="absolute h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          strokeWidth={1.5}
        />
        <Moon 
          className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          strokeWidth={1.5}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}