import React, { PropsWithChildren } from 'react';

import { Wrapper } from '../ui/Wrapper';
import { Heading } from '../ui/Heading';
import { Section } from '../ui/Section';
import CalendarIcon from '../../../public/assets/home/calendar.svg';
import CakeIcon from '../../../public/assets/home/cake.svg';
import DashIcon from '../../../public/assets/home/dashIcon.svg';

export const ProjectStatistics = () => {
   return (
      <Section>
         <Wrapper >
            <Heading as='h2' title='Statystyki Projektu' className='mb-16 lg:mb-24' />
            <div className='flex items-center gap-y-24 flex-wrap justify-around'>
               <StasticItem>
                  <CakeIcon />
                  <Heading as='h3' title='46' />
                  <span>Ile razem mamy lat</span>
               </StasticItem>
               <StasticItem>
                  <DashIcon />
                  <Heading as='h3' title='128' />
                  <span>Ilość opublikowanych postów</span>
               </StasticItem>
               <StasticItem>
                  <CalendarIcon />
                  <Heading as='h3' title='216' />
                  <span>Upłynięte dni od początku projektu</span>
               </StasticItem>
            </div>
         </Wrapper>
      </Section>
   );
};

const StasticItem = ({ children }: PropsWithChildren) => {
   return <div className='flex flex-col justify-center items-center gap-5 w-full md:w-[300px]'>{children}</div>;
};
