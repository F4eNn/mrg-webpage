import { PropsWithChildren } from '@/types/global';

export const CardInfoWrapper = ({ children }: PropsWithChildren) => {
   return <ul className='text-lg md:text-xl space-y-2'>{children}</ul>;
};
