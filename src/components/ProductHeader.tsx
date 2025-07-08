"use client"

import React from "react"
import { motion } from "framer-motion"
import { FileText, Languages, Scissors, RefreshCcw } from "lucide-react"

// A small, reusable component for the orbiting icons
const OrbitingIcon = React.memo(
  ({
    icon: Icon,
    className,
    duration = 30,
    delay = 0,
  }: {
    icon: React.ElementType
    className: string
    duration?: number
    delay?: number
  }) => {
    return (
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, -15, 0], opacity: [0, 1, 1, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay,
        }}
        className={`absolute p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-white ${className}`}
      >
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.div>
    )
  }
)
OrbitingIcon.displayName = "OrbitingIcon"

export default function ProductHeader() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] as const },
    },
  }

  return (
    <div className="relative w-full bg-gray-950 pt-4 pb-8 sm:pt-6 sm:pb-6 overflow-hidden">
      {/* Background Aurora & Grid Pattern */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Orbiting Icons Container */}
        <div className="relative w-full h-40 sm:h-48 mb-[-3.5rem] sm:mb-[-4.5rem] mt-[-50px] flex items-center justify-center">
          <OrbitingIcon
            icon={FileText}
            className="top-[25%] left-[20%]"
            duration={25}
            delay={0}
          />
          <OrbitingIcon
            icon={Languages}
            className="top-[20%] right-[10%]"
            duration={28}
            delay={3}
          />
          <OrbitingIcon
            icon={Scissors}
            className="bottom-[10%] left-[10%]"
            duration={32}
            delay={5}
          />
          <OrbitingIcon
            icon={RefreshCcw}
            className="bottom-0 right-[25%]"
            duration={26}
            delay={8}
          />
        </div>

        {/* Animated Text Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter bg-gradient-to-b from-gray-50 to-gray-400 bg-clip-text text-transparent"
          >
            Explore All Tools by MathToWord
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-400"
          >
            A suite of powerful, intuitive, and beautifully designed tools to
            streamline your workflow and boost productivity.
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
