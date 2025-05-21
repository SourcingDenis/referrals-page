"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gift, Clock, Euro, Info, ChevronRight, Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface CircularProgressProps {
  percentage: number
  color?: string
  startAngle?: number
  size?: "sm" | "md" | "lg"
  showPercentage?: boolean
  animate?: boolean
  duration?: number
  icon?: React.ReactNode
}

const CircularProgress = ({
  percentage,
  color = "primary",
  startAngle = 0,
  size = "md",
  showPercentage = true,
  animate = true,
  duration = 1.5,
  icon,
}: CircularProgressProps) => {
  const [isAnimated, setIsAnimated] = useState(false)

  const radius = 42
  
  // Convert startAngle to radians and calculate the starting point
  const startAngleRad = (startAngle - 90) * (Math.PI / 180)
  const x = 50 + radius * Math.cos(startAngleRad)
  const y = 50 + radius * Math.sin(startAngleRad)
  
  const pathD = `
    M ${x} ${y}
    A ${radius} ${radius} 0 ${percentage > 50 ? 1 : 0} 1 
    ${50 + radius * Math.cos((startAngleRad + 2 * Math.PI * (percentage / 100)))} 
    ${50 + radius * Math.sin((startAngleRad + 2 * Math.PI * (percentage / 100)))}`

  const sizeClasses = {
    sm: "w-20 h-20",
    md: "w-32 h-32",
    lg: "w-40 h-40",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  }

  // Handle color mapping
  const getColorClasses = (colorValue: string) => {
    // If it's a Tailwind color with scale like "blue-500"
    if (colorValue.includes("-")) {
      return `text-${colorValue}`
    }
    // If it's a primary/secondary/accent color
    return `text-${colorValue}`
  }

  // Start animation when in view
  const handleViewportEnter = () => {
    if (animate && !isAnimated) {
      setIsAnimated(true)
    }
  }

  return (
    <motion.div
      className={cn("relative", sizeClasses[size])}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px 0px" }}
      transition={{ duration: 0.5 }}
      onViewportEnter={handleViewportEnter}
    >
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          className="text-muted-foreground/20"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        {/* Progress circle */}
        <motion.path
          className={getColorClasses(color)}
          strokeWidth="8"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          d={pathD}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: percentage / 100 }}
          transition={{ duration: duration, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
        {showPercentage && (
          <motion.span
            className={cn("font-bold", getColorClasses(color), textSizeClasses[size])}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: duration * 0.5 }}
          >
            {percentage}%
          </motion.span>
        )}
        {icon && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: duration * 0.7, type: "spring" }}
          >
            {icon}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

interface BonusStructureItem {
  level: string
  amount: number
  colorClass: string
  description?: string
}

const bonusStructure: BonusStructureItem[] = [
  {
    level: "Senior/Principal Backend Engineer",
    amount: 5000,
    colorClass: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    description: "Experienced in designing and implementing scalable backend systems",
  },
  {
    level: "Senior SRE",
    amount: 5000,
    colorClass: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    description: "Skilled in maintaining reliability, performance, and scalability of systems",
  },
  {
    level: "Senior DevOps Engineer",
    amount: 5000,
    colorClass: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
    description: "Expert in CI/CD pipelines and infrastructure automation",
  },
]

export const RewardStructure = () => {
  const [selectedBonus, setSelectedBonus] = useState<BonusStructureItem | null>(null)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col"
      >
        <Card className="p-6 md:p-8 h-full flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Gift className="w-6 h-6 text-primary" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-semibold">Referral Bonus Structure</h2>
          </div>

          <div className="flex-grow">
            <table className="w-full table-fixed">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium w-[70%]">Level/Role</th>
                  <th className="text-right py-3 px-4 text-muted-foreground font-medium w-[30%]">Bonus Amount</th>
                </tr>
              </thead>
              <tbody>
                {bonusStructure.map((item, index) => (
                  <motion.tr
                    key={index}
                    className={cn(
                      "border-b border-border/50 last:border-0 transition-colors cursor-pointer",
                      selectedBonus?.level === item.level ? "bg-muted" : "hover:bg-muted/50",
                    )}
                    onClick={() => setSelectedBonus(selectedBonus?.level === item.level ? null : item)}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={`${item.colorClass} border-0 whitespace-normal break-words`}>
                          {item.level}
                        </Badge>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1 font-medium">
                        <Euro className="w-4 h-4 text-muted-foreground" />
                        {item.amount.toLocaleString()}
                        <ChevronRight
                          className={cn(
                            "w-4 h-4 ml-1 transition-transform",
                            selectedBonus?.level === item.level ? "rotate-90" : "",
                          )}
                        />
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <AnimatePresence>
            {selectedBonus && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border/50">
                  <div className="flex gap-2 items-start">
                    <Info className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">{selectedBonus.level}</h4>
                      <p className="text-muted-foreground text-sm">{selectedBonus.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Clock className="w-6 h-6 text-primary" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-semibold">Payment Structure</h2>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="text-center cursor-pointer">
                      <CircularProgress
                        percentage={50}
                        color="blue-500"
                        startAngle={-90}
                        animate={true}
                        icon={<Check className="w-5 h-5 text-blue-500 mt-1" />}
                      />
                      <motion.p
                        className="mt-2 text-muted-foreground font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        After Hire
                      </motion.p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>First payment made when candidate accepts the offer</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <motion.div
                className="text-4xl font-light text-muted-foreground"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                +
              </motion.div>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="text-center cursor-pointer">
                      <CircularProgress
                        percentage={50}
                        color="green-500"
                        startAngle={90}
                        animate={true}
                        duration={2}
                        icon={<Check className="w-5 h-5 text-green-500 mt-1" />}
                      />
                      <motion.p
                        className="mt-2 text-muted-foreground font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        After Probation
                      </motion.p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>Second payment made after successful probation period (3 months)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <motion.div
              className="bg-muted/50 p-4 rounded-lg border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <p className="text-muted-foreground text-center">
                The referral bonus is paid in 2 parts: 50% after the referred candidate is hired and the other 50% when
                the referred candidate successfully passes the probation period.
              </p>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
