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
               initial={{ y: 100, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
               viewport={{ once: true }}
               className={cn('text-[25px] xs:text-3xl sm:text-4xl lg:text-5xl font-bold font-Orbitron uppercase text-center mb-10 mb:mb-16 text-transparent bg-clip-text bg-gradient-to-r', className)}
          >
               {title}
          </motion.h1>
     )
}

export default Title