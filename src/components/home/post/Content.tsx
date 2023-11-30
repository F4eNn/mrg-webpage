import React from 'react';
import Image from 'next/image';
import parse, { domToReact, HTMLReactParserOptions, Element } from 'html-react-parser';
import Link from 'next/link';

import { Section } from '@/components/ui/Section';
import { TextDesc } from '@/components/ui/TextDesc';
import { Heading } from '@/components/ui/Heading';
import { IPostData } from '@/app/(default-site)/[...post]/page';

interface IPostContentProps {
   content: IPostData['zawartosc_posta'];
}

export const PostContent = ({ content }: IPostContentProps) => {
   const options: HTMLReactParserOptions = {
      replace(domNode) {
         if (domNode instanceof Element) {
            switch (domNode.name) {
               case 'p':
                  return <TextDesc className='sm:text-left'>{domToReact(domNode.children, options)}</TextDesc>;
               case 'h2':
               case 'h3':
                  return (
                     <Heading className='sm:text-left' as={domNode.name}>
                        {domToReact(domNode.children, options)}
                     </Heading>
                  );
               case 'ol':
                  return (
                     <ul className='ml-7 list-decimal space-y-5 text-sm font-[500] text-lightGrey phones:text-lg sm:ml-12'>
                        {domToReact(domNode.children, options)}
                     </ul>
                  );
               case 'ul':
                  return (
                     <ul className='ml-7 list-disc space-y-5 text-sm font-[500] text-lightGrey phones:text-lg sm:ml-12'>
                        {domToReact(domNode.children, options)}
                     </ul>
                  );
               case 'img':
                  const { src, alt, width, srcset } = domNode.attribs;
                  const imageArrayUrl = srcset.split(',').filter(Boolean);
                  const imageUrl = imageArrayUrl.at(-1)?.split(' ')[0];
                  const widthImg = Number(width.replace('px', '').trim());
                  return (
                     <Image
                        src={imageUrl ?? src}
                        alt={alt}
                        width={widthImg}
                        height={600}
                        className='mx-auto max-h-[500px] w-full rounded-sm object-cover'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw'
                     />
                  );
               case 'a':
                  const { href } = domNode.attribs;

                  return (
                     <Link href={href} className='colors-300 text-custom-blue-500 hover:text-custom-blue-500/75'>
                        {domToReact(domNode.children, options)}
                     </Link>
                  );
            }
         }
      },
   };

   return (
      <Section size={'none'} className='space-y-12 text-lightGrey'>
         {parse(content, options)}
      </Section>
   );
};
