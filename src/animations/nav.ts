import type { MotionProps } from 'framer-motion';

export const desktopAnimation = (idx: number | undefined = 5) => ({
   initial: { x: 100, opacity: 0 },
   animate: { x: 0, opacity: 1, transition: { delay: idx * 0.2, duration: 0.7 } },
});

export const activeDesktopPathAnimation: MotionProps = {
   initial: { opacity: 0, height: 0, width: 0 },
   animate: {
      opacity: 1,
      height: '100%',
      width: '100%',
      transition: { type: 'spring', stiffness: 95 },
   },
   exit: { opacity: 0, height: 0, width: 0 },
};

export const dropdownAnimation: MotionProps = {
   initial: { opacity: 0 },
   animate: { opacity: 1 },
   exit: { opacity: 0 },
};
export const mobileMenuAnimation: MotionProps = {
   initial: { height: 0, opacity: 0 },
   animate: { height: '100%', opacity: 1 },
   exit: { height: 0, opacity: 0 },
};
