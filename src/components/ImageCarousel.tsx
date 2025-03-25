'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageCarouselProps {
  images: Array<{
    id: number;
    src: string;
    alt: string;
  }>;
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <div className="relative h-[400px] md:h-[500px] mb-4 rounded-lg overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-full"
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="relative h-full">
              <Image 
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 