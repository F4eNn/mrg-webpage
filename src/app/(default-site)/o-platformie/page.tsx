import React from 'react';
import Image from 'next/image';

import { Heading } from '@/components/ui/Heading';
import { Wrapper } from '@/components/ui/Wrapper';
import { TextDesc } from '@/components/ui/TextDesc';
import { Backdrop } from '@/components/ui/Backdrop';

const AboutPlatformPage = () => {
   return (
      <main>
         <div className='relative'>
            <picture>
               <Image
                  src='/assets/o-platformie/hero-o-platformie.webp'
                  alt=''
                  width={6000}
                  height={4000}
                  className='xl:h-[600px] h-[500px] w-full object-cover'
               />
               <Backdrop className='z-20'/>
            </picture>
         </div>
         <Wrapper className='my-32 space-y-20 '>
            <Heading as='h1' title='O platformie' />
            <TextDesc>
               <em >
                  Platforma powstała z inicjatywy młodych, ambitnych, kreatywnych osób, które nie boją się wyjść poza
                  ramy narzucone przez otoczenie. Poniżej przedstawiamy idee jakie nam od początku towarzyszyły.
               </em>
            </TextDesc>
            <Heading
               as='h2'
               title='Rzetelna informacja młodzieżowa prawem młodych osób.
            '
            />
            <TextDesc>
               Młodzi ludzie często nie mają świadomości, jakie możliwości daje im współczesne społeczeństwo, dlatego
               potrzebny jest rzetelny, skoordynowany, gminny system informacji młodzieżowej, który ułatwiłby
               przekazywanie młodym ludziom wiedzy niezbędnej do rozwijania swojego potencjału i osiągania celów. Według
               Europejskiej Karty Informacji Młodzieżowej:{' '}
               <em>
                  informacja młodzieżowa ma pomagać młodym ludziom w realizowaniu ich aspiracji oraz we włączaniu się w
                  aktywne uczestnictwo w życiu społecznym
               </em>
               . Łącząc te dwa aspekty informacji młodzieżowej (aspekt rozwojowy oraz aspekt partycypacyjny)
               stwierdzamy, że bez nas młodzi mieszkańcy Gminy Kościelisko nie wykorzystają szansy na efektywne życie i
               aktywne uczestnictwo w społeczeństwie
            </TextDesc>
            <Heading
               as='h2'
               title='Polityka młodzieżowa ma służyć młodym, a nie dorosłym
            '
            />
            <TextDesc>
               Polityka młodzieżowa to wszelkie działania organów państwowych na rzecz młodzieży. Dla nas, młodych to
               niezwykle istotne narzędzie, dzięki któremu indywidualnie bądź za pośrednictwem grup nacisku
               (młodzieżowych rad, organizacji, stowarzyszeń, grup nieformalnych) możemy realizować swoje pomysły oraz
               marzenia. 
               <strong>
                  Głosimy idee społeczeństwa obywatelskiego, w którym młodzi ludzie mogą realnie uczestniczyć w
                  decyzjach i przedsięwzięciach na szczeblu lokalnym i regionalnym
               </strong>
               . Nie zgadzamy się na pozorne realizowanie polityki młodzieżowej przez dorosłych tzn. wykorzystywanie
               młodzieży do osiągania politycznych celów oraz traktowanie młodych osób jako dekorację dla podkreślenia
               swej wiarygodności i dobrych zamiarów.
            </TextDesc>
            <Heading
               as='h2'
               title='Partycypacja w życiu publicznym jest obowiązkiem każdego z nas, niezależnie od wieku.
'
            />
            <TextDesc>
               Działalność społeczno- polityczna daje nam, młodym możliwość wyrażenia własnych poglądów, kreowania
               miejsca, w którym dorastamy na takie w jakim chcielibyśmy dorastać, osiedlić się na stałe oraz założyć
               rodzinę, a także stanowi doskonałą okazję do poznawania ciekawych, inspirujących, godnych naśladowania
               osób. Naszym celem jest uświadamianie, że angażowanie się w życie społeczno-polityczne to przede
               wszystkim obowiązek każdego obywatela i obywatelki niezależnie od wieku. W końcu nie chcemy by przyszłe
               pokolenia patrzyły na nas jak na biernych, bezużytecznych, ciągle narzekających obywateli, lecz jak na
               liderów swoich społeczności, którzy nie bali się mówić, kiedy wszyscy wokół ich uciszali, marzyć o
               lepszej przyszłości, kiedy wszyscy żyli przeszłością, wyjść poza ramy, które wszyscy próbowali im
               narzucić.
            </TextDesc>
            <Heading
               as='h2'
               title='Świat mediów ma być otwarty dla młodych.
'
            />
            <TextDesc>
               Dajemy szansę młodym ludziom poznać realia pracy w mediach, dlatego osoby z nami współpracujące mogą
               sprawdzić się w roli dziennikarza, fotografa, kamerzysty czy też grafika. W ten sposób pomagamy młodzieży
               w wyborze ich przyszłej drogi zawodowej. W ramach wykonywania swojej pracy mogą uzyskać różne profity.
            </TextDesc>
            <Heading
               as='h2'
               title='Każdy ma posiadać możliwość rozwoju w dowolnym kierunku.

'
            />
            <TextDesc>
               W ramach naszej działalności powstają różne kluby naukowe czy kluby pasjonatów, do których można się
               łatwo i za darmo zapisać. Młodzi ludzie mogą sami tworzyć takie kluby odpowiadające ich potrzebom, a my
               zrobimy wszystko by pomóc takiej osobie stworzyć go, zachęcić innych do dołączenia, organizować ciekawe
               aktywności w ramach jego działalności itd. Ponadto sami prowadzimy akademię filmową oraz dziennikarską, w
               ramach której organizujemy warsztaty i tworzymy filmy krótkometrażowe, kampanie społeczne, artykuły lub
               inne tekst prasowe, z którymi później dzielimy się z naszymi odbiorcami.
            </TextDesc>
         </Wrapper>
      </main>
   );
};

export default AboutPlatformPage;
