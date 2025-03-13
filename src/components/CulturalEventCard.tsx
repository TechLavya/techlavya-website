'use client'

import { EventDataType } from '@/data/event-data';
import Image from 'next/image';
import React from 'react'
import { motion } from 'motion/react'

type Props = {
     delay: number;
     eventData: EventDataType;
}

const CulturalEventCard: React.FC<Props> = ({ delay, eventData }) => {
     const { image } = eventData;
     return (
          <motion.div
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{
                    duration: 1,
                    delay: delay / 10 + 0.2,
                    type: 'spring'
               }}
               viewport={{ once: true }}
               className='relative min-h-[40rem] max-w-lg rounded-2xl overflow-hidden
                          transition-transform duration-300 ease-in-out
                          hover:scale-110 hover:shadow-2xl hover:brightness-110 hover:rotate-1'
          >
               <Image
                    src={image}
                    alt="Event Image"
                    width={800}
                    height={600}
                    className='w-full h-full object-cover'
               />
          </motion.div>
     )
}

export default CulturalEventCard;
