import { motion } from 'framer-motion';
import { Gift, Clock } from 'lucide-react';
import { Card } from './ui/card';

const CircularProgress = ({ 
  percentage, 
  color = "primary",
  startAngle = 0 
}: { 
  percentage: number, 
  color?: string,
  startAngle?: number 
}) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = ((100 - percentage) / 100) * circumference;
  const rotation = `rotate(${startAngle}, 50, 50)`;

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-muted-foreground/20"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        <circle
          className={`text-${color} transition-all duration-1000 ease-out`}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          transform={rotation}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className={`text-2xl font-bold text-${color}`}>{percentage}%</span>
      </div>
    </div>
  );
};

export const RewardStructure = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 md:p-8 h-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Gift className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold">Employee Referral Reward</h2>
          </div>
          <div className="relative p-6 bg-primary/5 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
              </div>
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center">
                <Gift className="w-8 h-8 text-green-500" />
              </div>
            </div>
          </div>
          <p className="mt-6 text-muted-foreground">
            In order to encourage everyone to refer talented people, successful referrals will always be rewarded. 
            Bonuses will vary depending on position and how hard it is to fill them.
          </p>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="p-6 md:p-8 h-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold">Payment Structure</h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <CircularProgress percentage={50} color="blue-500" startAngle={-90} />
                <p className="mt-2 text-muted-foreground">After Hire</p>
              </div>
              <div className="text-4xl font-light text-muted-foreground">+</div>
              <div className="text-center">
                <CircularProgress percentage={50} color="green-500" startAngle={90} />
                <p className="mt-2 text-muted-foreground">After Probation</p>
              </div>
            </div>
            <p className="text-muted-foreground text-center">
              The referral bonus is paid in 2 parts: 50% after referred candidate is hired and 
              the other 50% when new employee successfully passes the probation period.
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};
