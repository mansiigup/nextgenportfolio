import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const trailRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, [data-interactive]');
      setIsPointer(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Smooth trail animation
    const animateTrail = () => {
      trailRef.current.x += (position.x - trailRef.current.x) * 0.15;
      trailRef.current.y += (position.y - trailRef.current.y) * 0.15;
      rafRef.current = requestAnimationFrame(animateTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafRef.current = requestAnimationFrame(animateTrail);

    // Add cursor-none to body
    document.body.style.cursor = 'none';
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      (el as HTMLElement).style.cursor = 'none';
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.body.style.cursor = '';
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full bg-primary-foreground transition-all duration-150 ease-out ${
            isClicking ? 'w-2 h-2' : isPointer ? 'w-3 h-3' : 'w-2.5 h-2.5'
          }`}
        />
      </div>

      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9998] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s, height 0.3s, opacity 0.3s',
        }}
      >
        <div
          className={`rounded-full border border-primary-foreground/50 transition-all duration-300 ease-out ${
            isClicking
              ? 'w-6 h-6 opacity-50'
              : isPointer
              ? 'w-10 h-10 opacity-80'
              : 'w-8 h-8 opacity-40'
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
