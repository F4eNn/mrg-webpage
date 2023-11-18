import { Header } from '@/components/home/Header';
import { PreLoader } from '@/components/ui/PreLoader';
import { Greeting } from '@/components/home/Greeting';
import { WeekReview } from '@/components/home/WeekReview';
import { ProjectStatistics } from '@/components/home/ProjectStatistics';

export default function Home() {
   return (
      <>
         <Header />
         <main>
            <PreLoader />
            <Greeting />
            <WeekReview />
            <ProjectStatistics />
         </main>
      </>
   );
}
