import { Header } from '@/components/home/Header';
import { PreLoader } from '@/components/ui/PreLoader';
import { Greeting } from '@/components/home/Greeting';
import { WeekReview } from '@/components/home/WeekReview';
import { ProjectStatistics } from '@/components/home/ProjectStatistics';
import { BACKEND_URL_API, API_TOKEN } from '@/constants/config';

export interface RootDataType<T> {
   id: number;
   attributes: T;
}

export interface IPartialArticleData {
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
}

const getArticles = async () => {
   const URL = `${BACKEND_URL_API}/home-posts?sort[0]=id:desc&populate[zdjecie_glowne][fields][0]=url&populate[zdjecie_glowne][fields][1]=alternativeText&populate[zdjecie_glowne][fields][2]=hash&fields[0]=tytul&fields[1]=krotki_opis&fields[2]=slug&fields[3]=publishedAt&pagination[pageSize]=7`;

   const res = await fetch(URL, { cache: 'no-cache', headers: { Authorization: `Bearer ${API_TOKEN}` } });
   const { data }: { data: RootDataType<IPartialArticleData>[] } = await res.json();
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
            <WeekReview articleData={data} />
            <ProjectStatistics />
         </main>
      </>
   );
}
