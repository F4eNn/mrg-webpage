import { PropsWithChildren } from '@/types/global';
import { cn } from '@/utils/cn';

type TextDescProps = PropsWithChildren & {
   className?: string;
};

export const TextDesc = ({ children, className }: TextDescProps) => {
   return <p className={cn('text-center text-sm mx-auto text-lightGrey phones:text-lg', className)}>{children}</p>;
};
