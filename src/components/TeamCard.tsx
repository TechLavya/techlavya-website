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
          <div className="group relative backdrop-blur-xl bg-secondary-bg/20 border border-accent/10 hover:border-accent/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_35px_rgba(213,206,163,0.15)] rounded-2xl p-6 text-center transition-all duration-500 overflow-hidden">
               
               {/* Background Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

               {/* Top decorative lines */}
               <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

               {/* Profile Image */}
               <div className="relative w-32 h-32 mx-auto mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-full border border-primary/40 group-hover:border-primary group-hover:rotate-180 transition-all duration-1000 border-dashed" />
                    <div className="absolute inset-[4px] overflow-hidden rounded-full border border-accent/20 bg-background/50 z-10">
                         <Image
                              src={image}
                              alt={name}
                              width={150}
                              height={150}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              priority={true}
                         />
                    </div>
               </div>

               <div className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-500">
                    <h2 className="text-xl md:text-2xl font-bold font-orbitron text-highlight tracking-widest mb-1">{name}</h2>
                    <p className="text-primary text-xs font-kodeMono tracking-[0.2em] uppercase mb-6">{role}</p>
               </div>

               {/* Social Links */}
               <div className="flex justify-center gap-4 relative z-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {instagram && <SocialIcon href={instagram} Icon={Instagram} color="var(--accent)" />}
                    {twitter && <SocialIcon href={twitter} Icon={Twitter} color="var(--accent)" />}
                    {facebook && <SocialIcon href={facebook} Icon={Facebook} color="var(--accent)" />}
                    {linkedin && <SocialIcon href={linkedin} Icon={Linkedin} color="var(--accent)" />}
               </div>
          </div>
     );
};

export default TeamCard;

const SocialIcon: React.FC<{ href: string; Icon: React.ElementType; color: string }> = ({ href, Icon, color }) => (
     <Link href={href} target="_blank" rel="noopener noreferrer" className="group/icon p-2 rounded-full border border-accent/10 bg-background/50 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300">
          <Icon className="w-4 h-4 text-muted-foreground group-hover/icon:text-primary transition-colors duration-300" style={{ color: 'currentColor' }} />
     </Link>
);