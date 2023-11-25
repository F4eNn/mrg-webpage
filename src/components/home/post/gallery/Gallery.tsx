'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaAnglesDown } from 'react-icons/fa6';

import { Section } from '@/components/ui/Section';
import { RootDataType } from '@/app/(default-site)/page';
import { ImageType } from '@/app/(default-site)/[...post]/page';
import { Button } from '@/components/controls/Button';
import { Backdrop } from '@/components/ui/Backdrop';

import { Slider } from './Slider';
import { GalleryImageMap } from './GalleryImageMap';

export interface IPostGallery {
   gallery: RootDataType<ImageType>[];
}

export type SliderDataTypes = ImageType & {
   isOpen: boolean;
};

export const PostGallery = ({ gallery }: IPostGallery) => {
   const [sliderData, setSliderData] = useState<SliderDataTypes>({
      isOpen: false,
      alt: '',
      blurDataUrl: '',
      url: '',
      height: 0,
      width: 0,
   });
   const [currentIdx, setCurrentIdx] = useState(0);
   const [showMore, setShowMore] = useState(false);

   const handleOpenSlider = (idx: number) => {
      const { attributes } = gallery[idx];
      setSliderData({ isOpen: true, ...attributes });
      setCurrentIdx(idx);
   };

   const handleCloseSlider = () => {
      setSliderData(prev => ({ ...prev, isOpen: false }));
   };

   const handleChangeImage = (step: 'next' | 'previouse') => {
      setCurrentIdx(prev => (step === 'next' ? prev + 1 : prev - 1));
   };

   const handleShowMore = () => setShowMore(true)

   useEffect(() => {
      const showNewImage = () => {
         const { attributes } = gallery[currentIdx];
         setSliderData(prev => ({ ...prev, ...attributes }));
      };
      showNewImage();
      return () => {};
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [currentIdx]);

   return (
      <Section id='gallery' className='pt-12'>
         <div id='gallery-map' className='grid-post-gallery grid-cols-gallery-sm sm:grid-cols-gallery-lg'>
            <GalleryImageMap gallery={gallery} handleOpen={handleOpenSlider} showMore={showMore} />
            {gallery.length > 7 && !showMore && (
               <Button onClick={handleShowMore} variant={'borderOnHover'} className='group relative    '>
                  <Image
                     src={gallery[7].attributes.url}
                     alt=''
                     width={gallery[7].attributes.width}
                     height={gallery[7].attributes.height}
                     className='h-full w-full object-cover blur-md'
                  />
                  <Backdrop className='z-20 bg-black/60' />
                  <div className='colors-300 absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-4xl text-white group-hover:text-yellow'>
                     <FaAnglesDown />
                  </div>
               </Button>
            )}
         </div>
         <Slider
            changeImage={handleChangeImage}
            closeSlider={handleCloseSlider}
            currentIdx={currentIdx}
            galleryLength={gallery.length}
            sliderData={sliderData}
         />
      </Section>
   );
};
