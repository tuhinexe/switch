import { useEffect, useState } from 'react';

export const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();

      const mobileReges =
        /iphone|ipad|ipod|android|blackberry|windows phone|webos|iemobile|opera mini/i;

      setIsMobile(mobileReges.test(userAgent));
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return { isMobile };
};
