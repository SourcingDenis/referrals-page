import { motion } from 'framer-motion';
import { Gift, Clock, Euro } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

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

const bonusStructure = [
  {
    level: 'Entry/Administrative or Junior Specialist',
    amount: 200,
    colorClass: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
  },
  {
    level: 'Middle Specialist',
    amount: 800,
    colorClass: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300'
  },
  {
    level: 'Senior Specialist',
    amount: 1500,
    colorClass: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
  },
  {
    level: 'Tech Lead, Manager, Director',
    amount: 1700,
    colorClass: 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300'
  },
  {
    level: 'C-level',
    amount: 2300,
    colorClass: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300'
  }
];

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
            <h2 className="text-2xl md:text-3xl font-semibold">Referral Bonus Structure</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Level/Role</th>
                  <th className="text-right py-3 px-4 text-muted-foreground font-medium">Bonus Amount</th>
                </tr>
              </thead>
              <tbody>
                {bonusStructure.map((item, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-border/50 last:border-0 transition-colors hover:bg-muted/50"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={`${item.colorClass} border-0`}>
                          {item.level}
                        </Badge>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1 font-medium">
                        <Euro className="w-4 h-4 text-muted-foreground" />
                        {item.amount.toLocaleString()}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
