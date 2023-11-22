import { DesktopNav } from '@/components/navigation/DesktopNav';
import { MobileNav } from '@/components/navigation/MobileNav';
import { Footer } from '@/components/footer/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <nav>
            <DesktopNav />
            <MobileNav />
         </nav>
         {children}
         <Footer />
      </>
   );
}
