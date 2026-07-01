import { useEffect, useRef, useCallback } from 'react';

/**
 * ScrollReveal — Reusable wrapper that uses IntersectionObserver to
 * animate children into view on scroll. Respects prefers-reduced-motion.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  as: Tag = 'div',
  ...rest
}) {
  const ref = useRef(null);

  const handleIntersection = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      el.classList.add('active');
      return;
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold });
    observer.observe(el);

    return () => observer.disconnect();
  }, [handleIntersection, threshold]);

  const delayClass = delay === 100
    ? 'reveal-delay-100'
    : delay === 200
      ? 'reveal-delay-200'
      : delay === 300
        ? 'reveal-delay-300'
        : '';

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
