import { ImagemGaleria } from "@/components/galleryWithLightbox";

export const quemSomosGallery: ImagemGaleria[] = Array.from(
  { length: 57 },
  (_, i) => ({
    src: `/images/quem-somos/${i + 1}.webp`,
    alt: `Imagem ${i + 1} da galeria`,
  })
);
