import React, { useState, memo } from 'react';
import { LazyImageContainer } from './LazyImage.styles';
import { useIntersectionObserver } from '../../../hooks';

// PUBLIC_INTERFACE
/**
 * LazyImage Component
 * 
 * A component that lazily loads images when they enter the viewport
 * using the Intersection Observer API
 */
interface LazyImageProps {
  src: string;
  alt: string;
  placeholderSrc?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholderSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZWVlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzk5OTk5OSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=',
  className,
  style,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, inView] = useIntersectionObserver<HTMLDivElement>();

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <LazyImageContainer ref={ref} className={className} style={style}>
      {!isLoaded && (
        <div className="placeholder">
          <img
            src={placeholderSrc}
            alt={`${alt} placeholder`}
            className="placeholder-image"
          />
        </div>
      )}
      <img
        src={inView ? src : placeholderSrc}
        alt={alt}
        onLoad={handleLoad}
        className={`image ${isLoaded ? 'loaded' : 'loading'}`}
      />
    </LazyImageContainer>
  );
};

export default memo(LazyImage);
