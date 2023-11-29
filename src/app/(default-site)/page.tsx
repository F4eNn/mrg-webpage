import { Suspense } from 'react';

import { Header } from '@/components/home/Header';
import { Greeting } from '@/components/home/Greeting';
import { WeekReview } from '@/components/home/WeekReview';
import { ProjectStatistics } from '@/components/home/ProjectStatistics';
import Loading from '@/components/ui/Loading';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

export default function Home() {
   return (
      <>
         <Header />
         <main>
            <Greeting />
            <ErrorBoundary>
               <Suspense fallback={<Loading />}>
                  <WeekReview />
               </Suspense>
            </ErrorBoundary>
            <ProjectStatistics />
         </main>
      </>
   );
}
