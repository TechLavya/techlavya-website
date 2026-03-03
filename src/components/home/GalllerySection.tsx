import React from "react";
import Container from "../Container";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";

const GallerySection: React.FC = () => {
     return (
          <Container id="gallery" title="Gallery" titleClassName="from-[#662D8C] to-[#ED1E79]">
               {/* Using a dynamic grid: 
          - span-2 rows and columns create a "Bento Box" feel 
          - aspect-square keeps things consistent but varied
      */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] mb-16">
                    {galleryImages.map((img, index) => {
                         // Creative Logic: Make every 3rd or 6th item larger for visual rhythm
                         const isLarge = index === 0 || index === 6;
                         const isTall = index === 2 || index === 5;

                         return (
                              <div
                                   key={index}
                                   className={`group relative overflow-hidden rounded-2xl bg-gray-900 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${isLarge ? "md:col-span-2 md:row-span-2" : isTall ? "md:row-span-2" : ""
                                        }`}
                              >
                                   {/* Image Component */}
                                   <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill // Use fill for better responsive control in varied boxes
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                        priority={index < 4}
                                   />

                                   {/* Glassmorphic Overlay */}
                                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <p className="text-white text-sm font-medium tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                             {img.alt || "View Project"}
                                        </p>
                                        <div className="h-1 w-8 bg-gradient-to-r from-[#662D8C] to-[#ED1E79] mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                   </div>

                                   {/* Subtle Border Glow on Hover */}
                                   <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-2xl pointer-events-none transition-colors duration-300" />
                              </div>
                         );
                    })}
               </div>
          </Container>
     );
};

export default GallerySection;