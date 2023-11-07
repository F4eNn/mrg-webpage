import { AnchorHTMLAttributes } from 'react';
import Link, { LinkProps } from 'next/link';

import { cn } from '@/utils/cn';

type LinkButtonProps = Pick<LinkProps, 'href'> &
   AnchorHTMLAttributes<HTMLAnchorElement> & { title: string; className: string };

export const LinkButton = ({ title, className, ...rest }: LinkButtonProps) => {
   return (
      <Link {...rest} className={cn('rounded-lg p-3 transition-colors duration-300 ', className)}>
         {title}
      </Link>
   );
};
