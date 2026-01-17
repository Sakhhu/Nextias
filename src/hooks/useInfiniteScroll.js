import { useState, useEffect, useCallback, useRef } from 'react';

const useInfiniteScroll = (fetchMore, hasMore = true, threshold = 100) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const observerRef = useRef(null);
  const loadingRef = useRef(false);

  const lastElementRef = useCallback((node) => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !loadingRef.current) {
          loadingRef.current = true;
          setIsLoading(true);
          fetchMore()
            .finally(() => {
              loadingRef.current = false;
              setIsLoading(false);
            });
        }
      },
      {
        threshold,
        rootMargin: '100px'
      }
    );

    if (node) observerRef.current.observe(node);
  }, [isLoading, hasMore, fetchMore, threshold]);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const resetInfiniteScroll = useCallback(() => {
    setIsLoading(false);
    setError(null);
    loadingRef.current = false;
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
  }, []);

  return {
    lastElementRef,
    isLoading,
    error,
    resetInfiniteScroll
  };
};

export default useInfiniteScroll;
