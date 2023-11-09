import { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';

import { cn } from '@/utils/cn';

type LinkButtonProps = Pick<LinkProps, 'href'> &
   AnchorHTMLAttributes<HTMLAnchorElement> &
   PropsWithChildren & { className?: string };

export const LinkButton = ({ children, className, ...rest }: LinkButtonProps) => {
   return (
      <Link {...rest} className={cn('colors-300 rounded-lg p-3 ', className)}>
         {children}
      </Link>
   );
};
