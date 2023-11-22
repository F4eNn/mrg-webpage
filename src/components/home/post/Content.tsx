import React from 'react';
import Image from 'next/image';

import { Section } from '@/components/ui/Section';
import { TextDesc } from '@/components/ui/TextDesc';
import { Heading } from '@/components/ui/Heading';
export const PostContent = () => {
   return (
      <Section size={'none'} className='space-y-12 text-lightGrey'>
         <TextDesc className='text-center sm:text-left'>
            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
         </TextDesc>
         <TextDesc className='sm:text-left'>
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
         </TextDesc>
         <Heading className='sm:text-left' as='h2' title='Orem Impsum is simply' />
         <TextDesc className='sm:text-left'>
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
         </TextDesc>
         <Heading as='h3' className='sm:text-left' title='cluding versions of Lorem Ipsum.' />
         <ul className='list-disc space-y-5 font-[500] text-lightblack'>
            <li className='ml-7 sm:ml-14'>Aldus PageMaker including versions of Lorem Ipsum.</li>
            <li className='ml-7 sm:ml-14'>Aldus PageMaker including versions of Lorem Ipsum.</li>
            <li className='ml-7 sm:ml-14'>Aldus PageMaker including versions of Lorem Ipsum.</li>
            <li className='ml-7 sm:ml-14'>Aldus PageMaker including versions of Lorem Ipsum.</li>
            <li className='ml-7 sm:ml-14'>Aldus PageMaker including versions of Lorem Ipsum.</li>
         </ul>
         <Heading className='sm:text-left' as='h2' title='remaining essentially unchanged.' />
         <TextDesc className='sm:text-left'>
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
         </TextDesc>
         <Heading className='sm:text-left' as='h3' title='remaining essentially unchanged.' />
         <Image src='/dummy.jpg' width={800} height={500} alt='' className='max-h-[450px] w-full object-cover' />
         <TextDesc className='sm:text-left'>
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
         </TextDesc>
         <ol className='list-decimal space-y-5 font-[500] text-lightblack'>
            <li className='ml-7 sm:ml-14'>Aldus PageMaker including versions of Lorem Ipsum.</li>
            <li className='ml-7 sm:ml-14'>Aldus PageMaker including versions of Lorem Ipsum.</li>
            <li className='ml-7 sm:ml-14'>Aldus PageMaker including versions of Lorem Ipsum.</li>
            <li className='ml-7 sm:ml-14'>Aldus PageMaker including versions of Lorem Ipsum.</li>
            <li className='ml-7 sm:ml-14'>Aldus PageMaker including versions of Lorem Ipsum.</li>
         </ol>
         <TextDesc className='sm:text-left'>
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
         </TextDesc>
      </Section>
   );
};
