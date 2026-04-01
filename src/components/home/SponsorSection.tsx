import React from "react";
import Image from "next/image";
import { Marquee } from "../magicui/marquee";
import Title from "../Title";
import { sponsorData, sponsorDataType } from "@/data/sponsor";

const middleIndex = Math.ceil(sponsorData.length / 2);
const firstRow = sponsorData.slice(0, middleIndex);
const secondRow = sponsorData.slice(middleIndex);

type SponsorCardProps = {
    img: string;
};

const SponsorCard: React.FC<SponsorCardProps> = ({ img }) => {
    return (
        <div className="p-0.5 flex  w-44 items-center justify-center rounded-xl border border-accent/20 bg-background/50  backdrop-blur-sm">
            <Image
                src={img}
                alt="Sponsor logo"
                width={160}
                height={96}
                className="h-full w-full object-contain"
            />
        </div>
    );
};

const SponsorSection: React.FC = () => {
  return (
    <div id="sponsors" className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20">
        <Title title="Our Sponsors" className="from-highlight to-primary" />

        {/* First Marquee Row */}
        <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((sponsor: sponsorDataType, index: number) => (
                <SponsorCard key={index} img={sponsor.img} />
            ))}
        </Marquee>

        {/* Second Marquee Row (Reversed) */}
        <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((sponsor: sponsorDataType, index: number) => (
                <SponsorCard key={index} img={sponsor.img} />
            ))}
        </Marquee>

    </div>
   
  );
};

export default SponsorSection;
