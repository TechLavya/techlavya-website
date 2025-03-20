import { EventDataType } from "@/data/event-data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

type Props = {
     eventId: string;
     duration: number;
     eventData: EventDataType;
     flippedCardId: string | null;
     setFlippedCardId: (id: string | null) => void;
};

const EventCard: React.FC<Props> = ({ eventId, duration, eventData, flippedCardId, setFlippedCardId }) => {
     const { image, registrationLink } = eventData;

     const isFlipped = flippedCardId === eventId; // Check if this card is flipped

     const handleFlip = () => {
          setFlippedCardId(isFlipped ? null : eventId);
     };

     return (
          <motion.div
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{
                    duration: 1,
                    delay: duration / 10 + 0.2,
                    type: "spring",
               }}
               viewport={{ once: true }}
               className="flip-card w-full max-w-md mx-auto h-[18rem] xs:h-[19rem]"
          >
               <motion.div
                    className="flip-card-inner w-full h-full rounded-lg flex justify-center items-center hover:scale-110"
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    onClick={handleFlip}
               >
                    {/* Front Side */}
                    <div className="flip-card-front relative h-full w-full bg-[#2b054e] rounded-lg overflow-hidden">
                         <div className="h-full overflow-hidden rounded-lg">
                              <Image
                                   src={image}
                                   alt="Event Image"
                                   width={500}
                                   height={300}
                                   priority
                                   className="w-full h-full object-cover"
                              />
                         </div>
                         <button className="w-full absolute text-xs sm:text-sm bottom-2 text-center font-kodeMono tracking-wide text-white/40">
                              Tap to Register
                         </button>
                    </div>

                    {/* Back Side */}
                    <div
                         className="flip-card-back w-full h-full bg-[#2b054e] p-2 sm:p-4 flex flex-col justify-center items-center cursor-pointer text-white/40 text-lg rounded-lg overflow-hidden"
                         onClick={handleFlip}
                    >
                         {registrationLink ? (
                              <Button className="px-5 py-2 bg-[#4834DF] hover:bg-[#4834DF]/80 font-kodeMono tracking-wider">
                                   <Link href={registrationLink} target="_blank">
                                        Register Now
                                   </Link>
                              </Button>
                         ) : (
                              <Button disabled className="px-5 py-2 bg-gray-500 cursor-not-allowed">
                                   Coming Soon...
                              </Button>
                         )}
                    </div>
               </motion.div>
          </motion.div>
     );
};

export default EventCard;
