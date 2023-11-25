import { PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = PropsWithChildren & { selector: string };

export const Portal = ({ selector, children }: PortalProps) => {
   const [isMount, setIsMount] = useState(false);

   useEffect(() => {
      setIsMount(true);

      return () => {
         setIsMount(true);
      };
   }, []);

   return isMount ? createPortal(children, document.getElementById(selector)!) : null;
};
