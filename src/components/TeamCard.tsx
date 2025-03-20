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
          <div className="relative backdrop-blur-md bg-white/10 border border-slate-600 shadow-xl rounded-lg p-4 text-center space-y-3">

               {/* Profile Image */}
               <div className="relative w-32 h-32 mx-auto overflow-hidden rounded-full border-2 border-cyan-400 shadow-md">
                    <Image
                         src={image}
                         alt={name}
                         width={150}
                         height={150}
                         className="w-full h-full object-cover"
                         priority={true}
                    />
               </div>

               <div>
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">{name}</h2>
                    <p className="text-gray-300 text-base font-kodeMono font-medium">{role}</p>
               </div>

               {/* Social Links */}
               <div className="flex justify-center gap-4">
                    {instagram && <SocialIcon href={instagram} Icon={Instagram} color="#E1306C" />}
                    {twitter && <SocialIcon href={twitter} Icon={Twitter} color="#1DA1F2" />}
                    {facebook && <SocialIcon href={facebook} Icon={Facebook} color="#1877F2" />}
                    {linkedin && <SocialIcon href={linkedin} Icon={Linkedin} color="#0A66C2" />}
               </div>
          </div>
     );
};

export default TeamCard;

const SocialIcon: React.FC<{ href: string; Icon: React.ElementType; color: string }> = ({ href, Icon, color }) => (
     <Link href={href} target="_blank" rel="noopener noreferrer" className="group">
          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" style={{ color }} />
     </Link>
);