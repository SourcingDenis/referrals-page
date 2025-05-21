"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Gift,
  Info,
  Mail,
  CheckCircle,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface RuleProps {
  icon?: React.ReactNode
  title: string
  description: string
  important?: boolean
}

const Rule = ({
  icon = <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />,
  title,
  description,
  important,
}: RuleProps) => {
  return (
    <motion.li
      className={cn(
        "flex gap-3 p-3 rounded-lg transition-colors",
        important ? "bg-primary/5 border border-primary/10" : "hover:bg-muted/50",
      )}
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="mt-0.5">{icon}</div>
      <div>
        <div className="flex items-center gap-2">
          <span className="font-medium">{title}</span>
          {important && (
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Important
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>
    </motion.li>
  )
}

export const AdditionalInfo = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const handleCardHover = (cardId: string) => {
    setActiveCard(cardId)
  }

  const handleCardLeave = () => {
    setActiveCard(null)
  }

  const cardVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
      {/* Additional Rules */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-full"
          whileHover="hover"
          onHoverStart={() => handleCardHover("rules")}
          onHoverEnd={handleCardLeave}
        >
          <motion.div
            className={cn(
              "rounded-xl border bg-card text-card-foreground shadow p-6 md:p-8 h-full transition-all duration-300",
              activeCard === "rules" ? "border-primary/50" : "border-border",
            )}
            variants={cardVariants}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <AlertCircle className="w-6 h-6 text-primary" />
              </motion.div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">Program Rules</h2>
                <p className="text-muted-foreground text-sm">Important guidelines for our referral program</p>
              </div>
            </div>

            <ul className="space-y-3">
              <Rule
                title="Multiple Referrals"
                description="You can refer as many qualified candidates as you wish. There's no limit!"
                icon={<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />}
              />
              <Rule
                title="First Come, First Served"
                description="If the same candidate is referred by multiple people, the first referrer gets the reward."
                important={true}
                icon={<AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />}
              />
              <Rule
                title="Equal Conditions"
                description="Conditions for internal and external recommendations are the same."
                icon={<CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />}
              />
              <Rule
                title="Recruiting Team Exclusion"
                description="The referral bonus scheme is not available for representatives of the recruiting team."
                important={true}
                icon={<AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />}
              />
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* How to Refer & Process */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-8"
      >
        <motion.div whileHover="hover" onHoverStart={() => handleCardHover("refer")} onHoverEnd={handleCardLeave}>
          <motion.div
            className={cn(
              "rounded-xl border bg-card text-card-foreground shadow p-6 md:p-8 transition-all duration-300",
              activeCard === "refer" ? "border-primary/50" : "border-border",
            )}
            variants={cardVariants}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Gift className="w-6 h-6 text-primary" />
              </motion.div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">How to Refer?</h2>
                <p className="text-muted-foreground text-sm">Simple steps to submit your referral</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  1
                </div>
                <p className="text-muted-foreground">
                  Identify a qualified candidate who would be a good fit for our open positions
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  2
                </div>
                <p className="text-muted-foreground">
                  Fill out our referral form with the candidate's details and your relationship to them
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  3
                </div>
                <p className="text-muted-foreground">
                  Our recruiting team will review the application and keep you updated on the progress
                </p>
              </div>
            </div>

            <Button className="w-full group" asChild>
              <a
                href="https://jobs.ashbyhq.com/playson/form/referral"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Submit a Referral
                <ExternalLink className="ml-2 h-4 w-4 group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div whileHover="hover" onHoverStart={() => handleCardHover("process")} onHoverEnd={handleCardLeave}>
          <motion.div
            className={cn(
              "rounded-xl border bg-card text-card-foreground shadow p-6 md:p-8 transition-all duration-300",
              activeCard === "process" ? "border-primary/50" : "border-border",
            )}
            variants={cardVariants}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Info className="w-6 h-6 text-primary" />
              </motion.div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">The Process</h2>
                <p className="text-muted-foreground text-sm">What happens after you refer someone</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Initial Review:</span> Our Talent Acquisition team
                  reviews the candidate's profile
                </p>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Interview Process:</span> Qualified candidates proceed
                  through our standard interview stages
                </p>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Status Updates:</span> You'll receive notifications
                  about your referral's progress
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Questions Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-2"
      >
        <motion.div whileHover="hover" onHoverStart={() => handleCardHover("questions")} onHoverEnd={handleCardLeave}>
          <motion.div
            className={cn(
              "rounded-xl border bg-card text-card-foreground shadow p-6 md:p-8 text-center transition-all duration-300",
              activeCard === "questions" ? "border-primary/50" : "border-border",
            )}
            variants={cardVariants}
          >
            <div className="flex flex-col items-center">
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4"
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <HelpCircle className="w-8 h-8 text-primary" />
              </motion.div>

              <h2 className="text-2xl md:text-3xl font-semibold mb-2">Have Questions?</h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Our HR team is here to help with any questions about the referral program, process, or rewards.
              </p>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a
                      href="mailto:recruiting@playson.com"
                      className="text-primary hover:text-primary/80 text-lg font-medium flex items-center justify-center gap-2 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Mail className="h-5 w-5" />
                      recruiting@playson.com
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to send an email</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <p className="text-xs text-muted-foreground mt-4">
                We typically respond to all inquiries within 24-48 business hours
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
