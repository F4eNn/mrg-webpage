import { AnchorHTMLAttributes } from 'react';
import Link, { LinkProps } from 'next/link';

import { cn } from '@/utils/cn';

type LinkButtonProps = Pick<LinkProps, 'href'> &
   AnchorHTMLAttributes<HTMLAnchorElement> & { title: string; className: string };

export const LinkButton = ({ title, className, ...rest }: LinkButtonProps) => {
   return (
      <Link {...rest} className={cn('colors-300 rounded-lg p-3 ', className)}>
         {title}
      </Link>
   );
};
