import React from 'react';

import { Wrapper } from '../ui/Wrapper';
import { Heading } from '../ui/Heading';
import { TextDesc } from '../ui/TextDesc';
import { Section } from '../ui/Section';

export const Greeting = () => {
   return (
      <Section>
         <Wrapper className='relative  space-y-11  md:space-y-16  '>
            <Heading as='h2' title='Witajcie czytelnicy i czytelniczki!' className='text-lightblack' />
            <TextDesc className='max-w-3xl italic'>
               Codziennie mijamy się na ulicach, w tramwaju, w szkole lub w pracy. Wymieniamy się szybkimi spojrzeniami
               i biegniemy dalej. W końcu spotkaliśmy się tutaj. To wyjątkowe spotkanie nie musi skończyć się tak
               szybko. Dlatego pozostań tu jeszcze chwilę i zobacz ile mamy Ci do zaoferowania.
            </TextDesc>
         </Wrapper>
      </Section>
   );
};
