import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { ArrowRight, Gift, Info, Mail } from 'lucide-react';
import { Button } from './ui/button';

export const AdditionalInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
      {/* Additional Rules */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 md:p-8 h-full">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Additional Rules</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span>Employees can refer as many times as they wish</span>
            </li>
            <li className="flex gap-3">
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span>If the same candidate is referred by multiple employees, the first employee gets a reward</span>
            </li>
            <li className="flex gap-3">
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span>Conditions for internal and external recommendations are the same</span>
            </li>
            <li className="flex gap-3">
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span>The scheme of referral bonuses works for all employees except representatives of the recruiting team</span>
            </li>
          </ul>
        </Card>
      </motion.div>

      {/* How to Refer & Process */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-8"
      >
        <Card className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <Gift className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-semibold">How to Refer?</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Navigate to our Careers page. Find the job opening that you want to refer your friends for 
            and click on "Refer a Friend". Fill out the necessary details and submit them, and voila, 
            you have successfully referred someone.
          </p>
          <Button className="w-full" asChild>
            <a href="https://jobs.ashbyhq.com/playson" target="_blank" rel="noopener noreferrer">
              Visit Careers Page
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </Card>

        <Card className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <Info className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-semibold">The Process</h2>
          </div>
          <p className="text-muted-foreground">
            When our Talent Acquisition receives a referred candidate, this candidate will be processed 
            within a standardized recruitment process. You will receive notifications about the candidate's 
            progress through the pipeline as we want to be sure you know how your referral performs.
          </p>
        </Card>
      </motion.div>

      {/* Questions Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-2"
      >
        <Card className="p-6 md:p-8 text-center">
          <div className="flex flex-col items-center">
            <Mail className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Questions?</h2>
            <p className="text-muted-foreground mb-6">
              In case of any questions please contact our dedicated HR Team at
            </p>
            <a 
              href="mailto:recruiting@playson.com" 
              className="text-primary hover:underline text-lg font-medium flex items-center"
            >
              recruiting@playson.com
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};
