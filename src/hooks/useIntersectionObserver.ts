import { useState, useEffect, useRef, RefObject } from 'react';

// PUBLIC_INTERFACE
/**
 * useIntersectionObserver Hook
 * 
 * A custom hook that uses the Intersection Observer API to detect when an element
 * enters the viewport
 * 
 * @param options - IntersectionObserver options
 * @param triggerOnce - Whether to disconnect the observer after the element enters the viewport
 * @returns [ref, isIntersecting] - A ref to attach to the element and a boolean indicating if the element is intersecting
 */
export const useIntersectionObserver = <T extends HTMLElement>(
  options: IntersectionObserverInit = {},
  triggerOnce = true
): [RefObject<T>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    // Skip if IntersectionObserver is not supported
    if (!('IntersectionObserver' in window)) {
      setIsIntersecting(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        // Disconnect observer if element is intersecting and triggerOnce is true
        if (entry.isIntersecting && triggerOnce) {
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Start loading when element is 100px from viewport
        threshold: 0.01,
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options, triggerOnce]);

  return [elementRef, isIntersecting];
};

export default useIntersectionObserver;