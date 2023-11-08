import type { MotionProps } from 'framer-motion';

export const desktopAnimation = (idx: number | undefined = 5) => ({
   initial: { x: 100, opacity: 0 },
   animate: { x: 0, opacity: 1, transition: { delay: idx * 0.2, duration: 0.7 } },
});

export const dropdownAnimation: MotionProps = {
   initial: { opacity: 0 },
   animate: { opacity: 1 },
   exit: { opacity: 0 },
};
