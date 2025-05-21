"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { UserPlus, FileCheck, UserCheck, Handshake, DollarSign, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimelineStep {
  icon: JSX.Element
  title: string
  description: string | JSX.Element
  color?: string
}

const steps: TimelineStep[] = [
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: "Identify Candidate",
    description: "Find a qualified candidate who matches our open positions",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Submit Referral",
    description: (
      <>
        Submit your referral through our{" "}
        <a
          href="https://jobs.ashbyhq.com/playson/form/referral"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          referral form
        </a>
      </>
    ),
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Interview Process",
    description: "We'll review and interview the candidate",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Successful Hire",
    description: "Candidate accepts our offer and joins Playson",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Receive Reward",
    description: "Get your referral bonus after probation period",
    color: "from-amber-500 to-orange-600",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 15,
    transition: { duration: 0.3 },
  },
}

const lineVariants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
}

export const ReferralTimeline = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <motion.div
        ref={containerRef}
        className="space-y-12 md:space-y-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row md:items-start gap-6 relative"
            variants={itemVariants}
          >
            {/* Timeline icon and line */}
            <div className="relative flex flex-col items-center z-10">
              <motion.div
                className={cn(
                  "w-16 h-16 rounded-full bg-gradient-to-br flex items-center justify-center",
                  "shadow-lg hover:shadow-xl transition-shadow",
                  "border-4 border-background",
                  step.color || "from-primary/80 to-primary",
                )}
                variants={iconVariants}
                whileHover="hover"
                aria-hidden="true"
              >
                <div className="text-white">{step.icon}</div>
              </motion.div>

              {/* Timeline connector line */}
              {index !== steps.length - 1 && (
                <motion.div
                  className="w-1 bg-gradient-to-b from-primary/30 to-primary/5 mt-3 h-20 md:h-28"
                  variants={lineVariants}
                  aria-hidden="true"
                />
              )}
            </div>

            {/* Content */}
            <motion.div
              className="flex-1 pt-0 md:pt-2 pb-6 pl-0 md:pl-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <h3
                  className={cn(
                    "text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r",
                    step.color || "from-primary to-primary/70",
                  )}
                >
                  {step.title}
                </h3>
                <ChevronRight className="h-5 w-5 text-muted-foreground/50" aria-hidden="true" />
              </div>

              <div className="text-muted-foreground text-base md:text-lg leading-relaxed">{step.description}</div>

              {/* Step indicator for mobile */}
              <div className="mt-3 text-sm font-medium text-muted-foreground md:hidden">
                Step {index + 1} of {steps.length}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
