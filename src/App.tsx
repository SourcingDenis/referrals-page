import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Gift,
  ArrowRight,
  Mail,
  Briefcase,
  AlertCircle,
  CheckCircle2,
  EuroIcon,
} from 'lucide-react';
import { Header } from './components/Header';
import { ThemeProvider } from './components/ThemeProvider';
import { TypeAnimation } from 'react-type-animation';
import { ParticlesBackground } from './components/ParticlesBackground';
import { ReferralTimeline } from './components/ReferralTimeline';
import { RewardStructure } from './components/RewardStructure';
import { AdditionalInfo } from './components/AdditionalInfo';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
    <div className="min-h-screen bg-gradient-to-b from-background to-muted relative overflow-hidden">
      <ParticlesBackground />
      <Header />
      <main className="w-full px-4 md:px-8 py-6 md:py-12">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center mx-auto mb-12 md:mb-16">
          <div className="w-full max-w-[200px] md:max-w-[280px] mb-8 md:mb-12">
            <img src="/playson-logo.png" alt="Playson" className="w-full h-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 text-center mb-6">
            <TypeAnimation
              sequence={[
                'Playson Referral Program',
                1000,
                'Join Our Team',
                1000,
                'Refer & Earn',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl">
            This program is designed to encourage everyone to refer qualified candidates for Playson's job openings. 
            The list of vacancies can always be found in our <a href="https://jobs.ashbyhq.com/playson" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Playson Jobs</a>.
          </p>
        </div>

        {/* Process Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">How It Works</h2>
          <ReferralTimeline />
        </div>

        {/* Reward Structure */}
        <RewardStructure />

        {/* Additional Information */}
        <AdditionalInfo />
      </main>
    </div>
    </ThemeProvider>
  );
}

export default App;