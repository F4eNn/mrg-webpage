import { ComponentProps } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const buttonVariants = cva(
   "active:scale-95 transition-all duration-300 relative after:absolute z-0 after:bottom-0 disabled:active:scale-100 disabled:text-lightblack/50 disabled:after:hover:h-0 overflow-hidden rounded-[10px] hover:after:h-full after:left-0 after:-z-10 after:h-0 after:w-full  after:transition-all after:duration-500 after:content-[''] ",
   {
      variants: {
         variant: {
            primary: ' border-yellow border-[1px] hover:border-white hover:text-lightblack after:bg-white',
            secondary: ' border-lightGrey border-[1px] hover:border-lightblack hover:text-white after:bg-lightblack ',
            borderTop:
               'border-t-[1px] border-lightGrey  hover:border-lightblack hover:text-white after:bg-lightblack rounded-none',
            borderOnHover: 'hover:border-yellow border-[2px] transition-all duration-300',
         },
         size: {
            default: 'px-10 py-3.5 text-lg font-bold',
            nonePadding: 'text-lg font-bold',
            tracking: 'font-normal tracking-[6px] text-sm phones:text-base px-4 py-5 md:px-6',
         },
      },
      defaultVariants: {
         variant: 'primary',
         size: 'nonePadding',
      },
   },
);

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {}

const Button = ({ className, size, variant, ...props }: ButtonProps) => {
   return <button {...props} className={cn(buttonVariants({ size, variant, className }))} />;
};

export { Button, buttonVariants };
