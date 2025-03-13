import React from "react";
import Container from "../Container";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";

const GallerySection: React.FC = () => {
     return (
          <Container id="gallery" title="Gallery" titleClassName="from-[#662D8C] to-[#ED1E79]">
               <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-16">
                    {galleryImages.map((img, index) => (
                         <div
                              key={index}
                              className="relative overflow-hidden rounded-lg shadow-lg"
                         >
                              <Image
                                   src={img.src}
                                   alt={img.alt}
                                   width={500}
                                   height={500}
                                   // sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                   className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                   priority={index < 4} // Load first 4 images faster
                              />
                         </div>
                    ))}
               </div>
          </Container>
     );
};

export default GallerySection;