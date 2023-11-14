export const peaceHandAnimation = (isInView: boolean) => {
   return {
      initial: {
         opacity: 0,
         pathLength: 0,
      },
      animate: {
         opacity: 1,
         pathLength: isInView ? 1 : 0,
         strokeWidth: 3,
         transition: { duration: 2 },
      },
   };
};

export const wavePathAnimation = (isInView: boolean) => {
   return {
      initial: { pathLength: 0 },
      animate: {
         pathLength: isInView ? 1 : 0,
         strokeWidth: 13,
         transition: { duration: 5 },
      },
   };
};
