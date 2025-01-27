import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  CSSProperties,
  ReactNode,
} from 'react';

interface LazyLoadProps {
  style?: CSSProperties;
  children: ReactNode;
}

const LazyLoad = forwardRef<HTMLElement, LazyLoadProps>(
  ({ style, children }, ref) => {
    const [load, setLoad] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => containerRef.current as HTMLElement);

    useEffect(() => {
      const scrollListener = () => {
        const containerEl = containerRef.current;

        if (containerEl) {
          const elBound = containerEl.getBoundingClientRect();

          if (
            elBound.top >= 0 &&
            elBound.left >= 0 &&
            elBound.top < window.innerHeight &&
            elBound.left < window.innerWidth
          ) {
            setLoad(true);
          }
        }
      };

      if (!load) {
        scrollListener();

        window.addEventListener('scroll', scrollListener, { passive: true });

        return () => {
          window.removeEventListener('scroll', scrollListener);
        };
      } else {
        window.removeEventListener('scroll', scrollListener);
      }
    }, [load, style]);

    return load ? (
      <>{children}</>
    ) : (
      <div ref={containerRef} style={style} />
    );
  }
);

LazyLoad.displayName = 'LazyLoad';

export default LazyLoad;