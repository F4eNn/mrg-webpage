import React from 'react';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import { FaChevronLeft } from 'react-icons/fa';

import { Button } from '@/components/controls/Button';
import { Portal } from '@/utils/portal';

import { SliderDataTypes } from './Gallery';

export type ImageSliderProps = {
   sliderData: SliderDataTypes;
   currentIdx: number;
   changeImage: (_step: 'next' | 'previouse') => void;
   closeSlider: () => void;
   galleryLength: number;
};

export const Slider = ({ sliderData, currentIdx, changeImage, closeSlider, galleryLength }: ImageSliderProps) => {
   return (
      <div id='slider'>
         {sliderData.isOpen && (
            <Portal selector='gallery-slider-modal'>
               <div className='grid-cols-slider-lg fixed  inset-0 z-[9999] grid place-content-center gap-5 bg-black/60 px-4 pt-[100px] backdrop-blur-sm md:pt-0'>
                  <div className='row-start-2 row-end-3  flex items-center  justify-center md:row-auto'>
                     <Button
                        aria-label='Pokaż poprzednie zdjęcie'
                        onClick={() => {
                           changeImage('previouse');
                        }}
                        disabled={currentIdx < 1}
                        className='rounded-full border-white  bg-lightGrey p-5 text-3xl text-white disabled:border-lightblack/50 disabled:bg-lightGrey/50'
                     >
                        <FaChevronLeft />
                     </Button>
                  </div>
                  <div className='col-span-3 md:col-auto'>
                     <Image
                        src={sliderData.url}
                        width={sliderData.width}
                        height={sliderData.height}
                        alt={sliderData.alt ?? 'Zdjęcie przedstawiające wydarzenie opisane w artykule'}
                        className='h-[300px] w-full rounded-md object-contain phones:h-[400px] md:h-[700px]  '
                        blurDataURL={sliderData.blurDataUrl}
                        placeholder='blur'
                     />
                  </div>
                  <div className='col-start-3 col-end-4 flex items-center justify-center md:col-auto'>
                     <Button
                        aria-label='Pokaż następne zdjęcie'
                        onClick={() => {
                           changeImage('next');
                        }}
                        disabled={currentIdx >= galleryLength - 1}
                        className='rotate-180  rounded-full border-white bg-lightGrey p-5 text-3xl text-white disabled:border-lightblack/50 disabled:bg-lightGrey/50'
                     >
                        <FaChevronLeft />
                     </Button>
                  </div>
                  <button
                     aria-label='zamknij galerie'
                     onClick={closeSlider}
                     className='colors-300  absolute right-7 top-7 rounded-lg border-[1px] p-4 text-3xl text-white hover:text-yellow'
                  >
                     <AiOutlineClose />
                  </button>
               </div>
            </Portal>
         )}
      </div>
   );
};
