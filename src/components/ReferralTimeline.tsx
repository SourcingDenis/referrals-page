import { motion } from 'framer-motion';
import { 
  UserPlus, 
  FileCheck, 
  UserCheck, 
  Handshake,
  DollarSign
} from 'lucide-react';

interface TimelineStep {
  icon: JSX.Element;
  title: string;
  description: string;
}

const steps: TimelineStep[] = [
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: "Identify Candidate",
    description: "Find a qualified candidate who matches our open positions"
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Submit Referral",
    description: <>Submit your referral through our <a href="https://jobs.ashbyhq.com/playson/form/referral" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">referral form</a></>
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Interview Process",
    description: "We'll review and interview the candidate"
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Successful Hire",
    description: "Candidate accepts our offer and joins Playson"
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Receive Reward",
    description: "Get your referral bonus after probation period"
  }
];

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: { 
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: { 
    scale: 1.2,
    rotate: 15,
    transition: { duration: 0.3 }
  }
};

const contentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const lineVariants = {
  hidden: { height: 0 },
  visible: { 
    height: "4rem",
    transition: { 
      duration: 0.5,
      delay: 0.2
    }
  }
};

export const ReferralTimeline = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline line */}
            <div className="relative flex flex-col items-center">
              <motion.div
                className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                variants={iconVariants}
                whileHover="hover"
              >
                <div className="text-primary">
                  {step.icon}
                </div>
              </motion.div>
              {index !== steps.length - 1 && (
                <motion.div 
                  className="w-0.5 bg-gradient-to-b from-primary/30 to-primary/5 mt-3"
                  variants={lineVariants}
                />
              )}
            </div>

            {/* Content */}
            <motion.div
              className="flex-1 pt-2 pb-6"
              variants={contentVariants}
            >
              <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
