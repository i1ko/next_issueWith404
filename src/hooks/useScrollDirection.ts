import React from 'react';

interface HookI {
  callbackSetIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
export function useScrollDirection({ callbackSetIsMenuOpen }: HookI) {
  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  React.useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const isDownScroll: boolean = scrollY < lastScrollY;
      const enoughMoveForAction =
        scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10;
      if (isDownScroll !== isVisible && enoughMoveForAction) {
        setIsVisible(isDownScroll);
        callbackSetIsMenuOpen && callbackSetIsMenuOpen(false);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [isVisible, callbackSetIsMenuOpen]);

  return isVisible;
}
