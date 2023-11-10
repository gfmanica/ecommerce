'use client';

import { useLayoutEffect, useState } from 'react';

const getBreakpoint = () => {
  let innerWidth = Infinity;

  if (typeof window !== 'undefined') {
    innerWidth = window.innerWidth;
  }

  return {
    isDownMd: innerWidth < 768,
    isDownSm: innerWidth < 640,
    isDownLg: innerWidth < 1024,
    isDownXl: innerWidth < 1280,
  };
};

export default function useBreakpoint() {
  const [breakpoints, setBreakpoints] = useState(getBreakpoint());

  useLayoutEffect(() => {
    function handleResize() {
      setBreakpoints(getBreakpoint());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakpoints;
}
