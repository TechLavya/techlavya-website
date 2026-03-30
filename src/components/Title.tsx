'use client'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

type Props = {
     title: string;
     className?: string;
}

const Title: React.FC<Props> = ({ title, className }) => {
     return (
          <motion.h1
               initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
               whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
               transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98]
               }}
               viewport={{ once: true }}
               className={cn(
                    'relative z-10 text-center mb-10 md:mb-16 from-accent to-primary',
                    className
               )}
          >
               <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-2xl opacity-70" />

               <span className="block text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron tracking-wider text-transparent bg-clip-text bg-gradient-to-r drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]">
                    {title}
               </span>

               <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '72px' }}
                    transition={{ delay: 0.35, duration: 0.8 }}
                    className="h-1 rounded-full bg-gradient-to-r from-accent to-primary mx-auto mt-3"
               />
          </motion.h1>
     )
}

export default Title