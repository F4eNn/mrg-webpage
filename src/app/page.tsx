import { Header } from '@/components/home/Header';
import { PreLoader } from '@/components/ui/PreLoader';

export default function Home() {
   return (
      <>
         <Header />
         <main className='h-[700px]' >
            <PreLoader />
            <p>MAIN</p>
         </main>
      </>
   );
}
