import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import React from 'react';

type TeamCardProps = {
     name: string;
     role: string;
     image: string;
     instagram?: string;
     twitter?: string;
     facebook?: string;
     linkedin?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, instagram, twitter, facebook, linkedin }) => {
     return (
          <div className="relative backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-cyan-400">
               {/* Profile Image with Hover Effect */}
               <div className="relative w-32 h-32 mx-auto overflow-hidden rounded-full border-4 border-cyan-400 shadow-md transition-transform transform hover:scale-110">
                    <Image
                         src={image}
                         alt={name}
                         width={150}
                         height={150}
                         className="w-full h-full object-cover hover:brightness-110 hover:contrast-125"
                    />
               </div>

               <h2 className="text-2xl font-bold text-cyan-300 mt-4">
                    {name}
               </h2>
               <p className="text-gray-300">{role}</p>

               {/* Social Links */}
               <div className="flex justify-center gap-4 mt-4">
                    {instagram && (
                         <Link
                              href={instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group"
                         >
                              <Instagram
                                   className="w-6 h-6 transition-all group-hover:scale-125"
                                   style={{ color: "#E1306C" }}
                              />
                         </Link>
                    )}
                    {twitter && (
                         <Link
                              href={twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group"
                         >
                              <Twitter
                                   className="w-6 h-6 transition-all group-hover:scale-125"
                                   style={{ color: "#1DA1F2" }}
                              />
                         </Link>
                    )}
                    {facebook && (
                         <Link
                              href={facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group"
                         >
                              <Facebook
                                   className="w-6 h-6 transition-all group-hover:scale-125"
                                   style={{ color: "#1877F2" }}
                              />
                         </Link>
                    )}
                    {linkedin && (
                         <Link
                              href={linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group"
                         >
                              <Linkedin
                                   className="w-6 h-6 transition-all group-hover:scale-125"
                                   style={{ color: "#0A66C2" }}
                              />
                         </Link>
                    )}
               </div>
          </div>
     )
}

export default TeamCard