import React, { useEffect, useState } from 'react';
import { ModelSelected } from './model-selected';
import { ModelMenu } from './model-menu';
import { ModalState } from '@/store/app.store';
import { cn } from '@/lib/utils';
import { createPortal } from 'react-dom';

export const ModelDropdown2: React.FC<object> = () => {
  const [menuState, setMenuState] = useState(ModalState.CLOSED);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (menuState === ModalState.OPEN) {
      setShouldRender(true);
      // Small delay to ensure DOM is ready before animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
      console.log('SHOULD OPEN', menuState);
    } else {
      console.log('SHOULD CLOSE', menuState);
      setIsAnimating(false);
      // Wait for animation to finish before removing from DOM
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 200); // Match this with your animation duration
      return () => clearTimeout(timer);
    }
  }, [menuState]);

  const handleClose = () => {
    console.log('HANDLE CLOSE');
    setMenuState('hidden' as ModalState);
  };

  const toggleMenu = () => {
    setMenuState((prevState: ModalState) => {
      console.log('TOGGLE:', prevState);
      return prevState === ModalState.CLOSED
        ? ModalState.OPEN
        : ModalState.CLOSED;
    });
  };

  return (
    <>
      <ModelSelected text="llama3.1:latest" onClick={toggleMenu} />
      {shouldRender &&
        createPortal(
          <div
            className={cn(
              'fixed inset-0 z-[9999]',
              'transition-all duration-200 ease-in-out',
              isAnimating ? 'bg-black/20 opacity-100' : 'bg-black/0 opacity-0'
            )}
          >
            <div
              role="menu"
              className={cn(
                'absolute z-[9999]', // This won't work without position
                // 'relative', // Add this to create new stacking context
                'w-[32rem] max-w-[calc(100vw-1rem)]',
                'bg-white dark:bg-gray-900',
                'shadow-lg border border-gray-300/30 dark:border-gray-700/40',
                'rounded-xl',
                'transition-all duration-200',
                isAnimating
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-4 opacity-0'
              )}
              style={{
                top: '0px',
                left: '0px',
              }}
            >
              <ModelMenu onClose={handleClose} />
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
