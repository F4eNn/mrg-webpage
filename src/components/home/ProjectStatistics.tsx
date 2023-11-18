'use client';
import React, { PropsWithChildren } from 'react';
import CountUp from 'react-countup';

import { Wrapper } from '../ui/Wrapper';
import { Heading } from '../ui/Heading';
import { Section } from '../ui/Section';
import CalendarIcon from '../../../public/assets/home/calendar.svg';
import CakeIcon from '../../../public/assets/home/cake.svg';
import DashIcon from '../../../public/assets/home/dashIcon.svg';

export const ProjectStatistics = () => {
   return (
      <Section>
         <Wrapper>
            <Heading as='h2' title='Statystyki Projektu' className='mb-16 lg:mb-24' />
            <div className='flex flex-wrap items-center justify-around gap-y-24'>
               <StasticItem>
                  <CakeIcon />
                  <CountUp
                     end={46}
                     className='text-2xl font-bold'
                     duration={5}
                     enableScrollSpy={true}
                     scrollSpyOnce={true}
                  />
                  <span>Ile razem mamy lat</span>
               </StasticItem>
               <StasticItem>
                  <DashIcon />
                  <CountUp
                     end={128}
                     className='text-2xl font-bold'
                     duration={5}
                     enableScrollSpy={true}
                     scrollSpyOnce={true}
                  />
                  <span>Ilość opublikowanych postów</span>
               </StasticItem>
               <StasticItem>
                  <CalendarIcon />
                  <CountUp
                     end={216}
                     className='text-2xl font-bold'
                     duration={5}
                     enableScrollSpy={true}
                     scrollSpyOnce={true}
                  />
                  <span>Upłynięte dni od początku projektu</span>
               </StasticItem>
            </div>
         </Wrapper>
      </Section>
   );
};

const StasticItem = ({ children }: PropsWithChildren) => {
   return <div className='flex w-full flex-col items-center justify-center gap-5 md:w-[300px]'>{children}</div>;
};
