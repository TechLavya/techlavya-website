export const galleryImages = Array.from({ length: 8 }, (_, index) => ({
  src: `/gallery-images/${index + 1}.webp`,
  alt: `Gallery-Image-${index + 1}`
}));