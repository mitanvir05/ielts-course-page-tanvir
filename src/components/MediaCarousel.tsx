'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import YouTube from 'react-youtube';
import { FaPlay } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MediaItem } from '@/types/course';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface Props {
  media: MediaItem[];
}

const MediaCarousel = ({ media }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [inlinePlayerId, setInlinePlayerId] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePlayClick = (e: React.MouseEvent, videoId: string) => {
    e.stopPropagation();
    setInlinePlayerId(videoId);
  };

  const getThumbnailSrc = (item: MediaItem) => {
    if (item.thumbnail_url) {
      return item.thumbnail_url;
    }
    if (item.resource_type === 'video' && item.resource_value) {
      return `https://i.ytimg.com/vi/${item.resource_value}/hqdefault.jpg`;
    }
    return item.resource_value;
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, Thumbs]}
        spaceBetween={10}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className="relative group rounded-lg overflow-hidden"
        onSlideChange={(swiper) => {
          setInlinePlayerId(null);
          setActiveIndex(swiper.realIndex);
        }}
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-video">
              {inlinePlayerId === item.resource_value ? (
                <YouTube
                  videoId={inlinePlayerId || ''}
                  opts={{ width: '100%', height: '100%', playerVars: { autoplay: 1 } }}
                  className="w-full h-full"
                />
              ) : (
                <>
                  <Image
                    src={getThumbnailSrc(item)}
                    alt={`Slide ${index + 1}`}
                    fill
                    priority={index === 0}
                    style={{ objectFit: 'cover' }}
                    onError={(e) => e.currentTarget.style.display = 'none'}
                  />
                  {item.resource_type === 'video' && (
                    <div
                      className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/10"
                      onClick={(e) => handlePlayClick(e, item.resource_value)}
                    >
                      <div className="grid place-items-center bg-white/50 rounded-full w-20 h-20 hover:bg-white/70 transition-colors">
                        <FaPlay className="text-white text-4xl ml-1" />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev-custom absolute top-1/2 left-3 -translate-y-1/2 z-10 grid place-items-center bg-white rounded-full w-9 h-9 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity shadow-md"><IoIosArrowBack className="text-gray-700 text-xl"/></div>
        <div className="swiper-button-next-custom absolute top-1/2 right-3 -translate-y-1/2 z-10 grid place-items-center bg-white rounded-full w-9 h-9 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity shadow-md"><IoIosArrowForward className="text-gray-700 text-xl"/></div>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="mt-2"
      >
        {media.map((item, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
             <div className={`relative w-full aspect-video rounded-md overflow-hidden p-0.5 ${activeIndex === index ? 'border-2 border-green-500' : 'border-2 border-transparent'}`}>
                <Image
                    src={getThumbnailSrc(item)}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="rounded-sm"
                    style={{ objectFit: 'cover' }}
                    onError={(e) => e.currentTarget.style.display = 'none'}
                />
                 {item.resource_type === 'video' && (
                    <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                        <FaPlay className="text-white text-lg" />
                    </div>
                )}
             </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MediaCarousel;