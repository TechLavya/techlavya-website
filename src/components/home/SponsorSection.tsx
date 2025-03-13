import { Marquee } from "../magicui/marquee";
import { sponsorData } from "@/data/sponsor";
import Image from "next/image";
import Title from "../Title";

const SponsorCard: React.FC<{ img: string }> = ({ img }) => {
    return (
        <figure className="relative h-28 w-64 cursor-pointer overflow-hidden rounded-xl border border-stone-50/[.1]">
            <Image
                src={img}
                alt="Sponsor Logo"
                width={200}
                height={200}
                loading="lazy"
                className="object-fill w-full h-full max-w-full max-h-full"
            />
        </figure>
    );
};

const SponsorSection: React.FC = () => {
    const firstRow = sponsorData.slice(0, Math.ceil(sponsorData.length / 2));
    const secondRow = sponsorData.slice(Math.ceil(sponsorData.length / 2));

    return (
        <div id="sponsors" className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20">
            <Title title="Our Sponsors" className="from-[#009245] to-[#FCEE21]" />

            {/* First Marquee Row */}
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((sponsor, index) => (
                    <SponsorCard key={index} img={sponsor.img} />
                ))}
            </Marquee>

            {/* Second Marquee Row (Reversed) */}
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((sponsor, index) => (
                    <SponsorCard key={index} img={sponsor.img} />
                ))}
            </Marquee>

            {/* Fading Gradient Effects */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black via-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-transparent"></div>
        </div>
    );
};

export default SponsorSection;