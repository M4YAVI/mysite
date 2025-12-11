import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

interface GlitchTextProps {
  text: string;
  className?: string;
  triggerKey?: string; // Change this to re-trigger animation
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className, triggerKey }) => {
  const elementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const chars = "!<>-_\\/[]{}—=+*^?#________";

    const ctx = gsap.context(() => {
      gsap.to(elementRef.current, {
        duration: 1.5,
        text: {
          value: text,
          delimiter: "",
          scrambleText: {
            text: text,
            chars: chars,
            revealDelay: 0.2,
            speed: 0.3
          }
        },
        ease: "power2.out",
      });
    }, elementRef);

    return () => ctx.revert();
  }, [text, triggerKey]);

  return <span ref={elementRef} className={className}>{text}</span>;
};

export default GlitchText;