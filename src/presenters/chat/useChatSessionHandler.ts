import { useRef, useState, useEffect, UIEventHandler } from 'react';

export const useChatSessionHandler = (children: React.ReactNode) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollDown, setShowScrollDown] = useState(false);

  // Scroll to bottom whenever children change
  useEffect(() => {
    // set slow timeout to allow for rendering
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  }, [children]);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
      setShowScrollDown(false);
    }
  };

  // Handle scrolling: show the "ScrollDown" if user is NOT scrolled to bottom
  const handleScroll: UIEventHandler<HTMLDivElement> = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const nearBottom = scrollHeight - clientHeight - scrollTop <= 10;
    setShowScrollDown(!nearBottom);
  };

  return {
    containerRef,
    showScrollDown,
    scrollToBottom,
    handleScroll,
  };
};
