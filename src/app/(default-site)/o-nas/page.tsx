import React from 'react';
import Image from 'next/image';

import { Heading } from '@/components/ui/Heading';
import { Backdrop } from '@/components/ui/Backdrop';
import { Wrapper } from '@/components/ui/Wrapper';
import { TextDesc } from '@/components/ui/TextDesc';
import { authors } from '@/components/about-us/about-us-data';
import { AboutAuthorCard } from '@/components/about-us/AboutAuthorCard';

import heroImg from '../../../../public/assets/o-platformie/hero-o-platformie.webp';

const AboutUs = () => {
   return (
      <main>
         <div className='relative'>
            <picture>
               <Image
                  src={heroImg}
                  alt=''
                  width={6000}
                  height={4000}
                  placeholder='blur'
                  className='h-[500px] w-full object-cover xl:h-[600px]'
               />
               <Backdrop className='z-20' />
            </picture>
         </div>
         <Wrapper className='my-32 space-y-20 text-lightGrey'>
            <Heading as='h1' title='O nas' />
            <TextDesc className='whitespace-break-spaces'>
               <em>
                  {
                     'Nasz zespół tworzą młode osoby, które posiadają różne zainteresowania, umiejętności oraz przeżycia. \n Łączy nas młodzieńczy duch, chęć do rozwijania się w różnych kierunkach, otwartość na świat, a przede wszystkim misja, którą wspólnie realizujemy. \n Mamy milion pomysłów na sekundę i nie zawahamy się ich użyć by osiągnąć zamierzony cel.'
                  }
               </em>
            </TextDesc>
         </Wrapper>
         {authors.map((info, idx) => (
            <AboutAuthorCard key={info.name + idx} {...info} idx={idx} />
         ))}
      </main>
   );
};

export default AboutUs;
