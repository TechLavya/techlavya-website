'use client'
import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'

const LandingImage = () => {
     return (
          <motion.div
          initial={{scale:0, opacity:0}}
          whileInView={{scale:1, opacity:1}}
          transition={{delay:0.2, duration:0.3}}
          viewport={{once:true}}
          >
               <Image
                    src="/techlavya-logo.png"
                    alt="techlavya-logo"
                    width={240}
                    height={240}
                    priority
                    className="h-52 w-52 md:h-[14rem] md:w-[14rem] object-contain"
               />
          </motion.div>
     )
}

export default LandingImage