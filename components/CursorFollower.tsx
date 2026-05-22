'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * A subtle ring + dot that follows the mouse with smooth lerp easing.
 * - The small dot tracks the cursor exactly.
 * - The ring lags slightly, settling with ease.
 * - Both grow when hovering interactive elements.
 * - Hidden on touch devices and when the user prefers reduced motion.
 */
export default function CursorFollower() {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  // Effect 1 — feature-detect once. If supported, enable the follower
  // (which causes the elements to render).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (fine && !reduced) setEnabled(true);
  }, []);

  // Effect 2 — runs only after `enabled` flips to true and the refs are mounted.
  useEffect(() => {
    if (!enabled) return;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    // Position immediately so we don't flash from (0,0)
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const isInteractive = (el: Element | null): boolean => {
      if (!el) return false;
      return !!el.closest(
        'a, button, input, textarea, select, label, [role="button"], [data-cursor="grow"]'
      );
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (isInteractive(target)) ring.classList.add('cursor-grow');
      else ring.classList.remove('cursor-grow');
    };

    const onLeave = () => {
      ring.style.opacity = '0';
      dot.style.opacity = '0';
    };

    const onEnter = () => {
      ring.style.opacity = '1';
      dot.style.opacity = '1';
    };

    const tick = () => {
      // Lerp the ring toward the cursor for smooth tracking
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseenter', onEnter);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
