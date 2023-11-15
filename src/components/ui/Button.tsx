import { ComponentProps } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const buttonVariants = cva(
   "active:scale-95 transition-all border-[1px] duration-300 relative after:absolute z-0 after:bottom-0 overflow-hidden rounded-[10px] hover:after:h-full after:left-0 after:-z-10 after:h-0 after:w-full  after:transition-all after:duration-500 after:content-[''] ",
   {
      variants: {
         variant: {
            primary: ' border-yellow hover:border-white hover:text-lightblack after:bg-white',
            secondary: ' border-lightGrey hover:border-lightblack hover:text-white after:bg-lightblack',
         },
         size: {
            default: 'px-10 py-3.5 text-lg font-bold',
         },
      },
      defaultVariants: {
         variant: 'primary',
         size: 'default',
      },
   },
);

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {}

const Button = ({ className, size, variant, ...props }: ButtonProps) => {
   return <button {...props} className={cn(buttonVariants({ size, variant, className }))} />;
};

export { Button, buttonVariants };
