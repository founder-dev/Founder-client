import { useState, useEffect, useCallback } from 'react';

const useDetectScroll = () => {
  const [scroll, setScroll] = useState(0);

  const handleProgressBar = useCallback(() => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = `${(totalScroll / windowHeight) * 100}%`;
    setScroll(scroll);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleProgressBar);
    return () => {
      window.removeEventListener('scroll', handleProgressBar);
    };
  }, [handleProgressBar]);
  return { scroll };
};

export default useDetectScroll;
