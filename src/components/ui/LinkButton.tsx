'use client';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import { motion } from 'framer-motion';

import { cn } from '@/utils/cn';
import { tapAnimate } from '@/animations/general';

type LinkButtonProps = Pick<LinkProps, 'href'> &
   AnchorHTMLAttributes<HTMLAnchorElement> &
   PropsWithChildren & { className?: string };

export const LinkButton = ({ children, className, ...rest }: LinkButtonProps) => {
   return (
      <motion.div {...tapAnimate} className='flex items-center justify-center'>
         <Link
            {...rest}
            className={cn(
               " colors-300 relative z-0 overflow-hidden rounded-[10px] border-[1px] border-yellow bg-transparent p-3  after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-0 after:w-full after:bg-white after:transition-all after:duration-500 after:content-[''] hover:border-white hover:text-lightblack hover:after:h-full",
               className,
            )}
         >
            {children}
         </Link>
      </motion.div>
   );
};
