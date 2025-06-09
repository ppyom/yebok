'use client';

import { useEffect, useState } from 'react';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Image } from './image';
import { PageIndicator } from './page-indicator';

interface Props {
  images: string[];
}

export const ImageSlider = ({ images }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className="flex max-w-[500px] flex-col" opts={{ align: 'center' }}>
      <CarouselContent className="-ml-0">
        {images.map((image, idx) => (
          <CarouselItem key={`${image}_${idx}`} className="relative aspect-square pl-0">
            <Image src={image} alt={image} isFirstImage={idx === 0} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <PageIndicator current={current} pages={images.length} />
    </Carousel>
  );
};
