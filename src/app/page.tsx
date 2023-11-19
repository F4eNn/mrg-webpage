import { Header } from '@/components/home/Header';
import { PreLoader } from '@/components/ui/PreLoader';
import { Greeting } from '@/components/home/Greeting';
import { WeekReview } from '@/components/home/WeekReview';
import { ProjectStatistics } from '@/components/home/ProjectStatistics';
import { BACKEND_URL, API_TOKEN } from '@/constants/config';

export interface IResponseData {
   id: number;
   attributes: {
      tytul: string;
      krotki_opis: string;
      slug: string;
      publishedAt: string;
      zdjecie_glowne: {
         data: {
            id: number;
            attributes: {
               alternativeText: string;
               hash: string;
               url: string;
            };
         };
      };
   };
}

const getArticles = async () => {
   const URL = `${BACKEND_URL}/home-posts?sort[0]=id:asc&populate[zdjecie_glowne][fields][0]=url&populate[zdjecie_glowne][fields][1]=alternativeText&populate[zdjecie_glowne][fields][2]=hash&fields[0]=tytul&fields[1]=krotki_opis&fields[2]=slug&fields[3]=publishedAt&pagination[pageSize]=7`;

   const res = await fetch(URL, { cache: 'no-cache', headers: { Authorization: `Bearer ${API_TOKEN}` } });
   const { data }: { data: IResponseData[] } = await res.json();
   return data;
};

export default async function Home() {
   const data = await getArticles();
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
