import { Header } from '@/components/home/Header';
import { PreLoader } from '@/components/ui/PreLoader';
import {Greeting} from '@/components/home/Greeting'

export default function Home() {
   return (
      <>
         <Header />
         <main className='h-[700px]' >
            <PreLoader />
            <Greeting />
         </main>
      </>
   );
}
