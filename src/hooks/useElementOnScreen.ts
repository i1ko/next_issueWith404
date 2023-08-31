import { RefObject, useEffect, useState } from 'react';

export const useElementOnScreen = (
  ref: RefObject<Element>,
  rootMargin = '0px',
  threshold = 0.5,
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      {
        rootMargin,
        threshold,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
};
