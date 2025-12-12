import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';


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
      const duration = 1.5;
      const tl = gsap.timeline();

      const scrambleObj = { val: 0 };
      const textLength = text.length;

      tl.to(scrambleObj, {
        val: textLength,
        duration: duration,
        ease: "power2.out",
        onUpdate: () => {
          const progress = Math.floor(scrambleObj.val);
          let result = "";
          for (let i = 0; i < textLength; i++) {
            if (i < progress) {
              result += text[i];
            } else {
              result += chars[Math.floor(Math.random() * chars.length)];
            }
          }
          if (elementRef.current) {
            elementRef.current.innerText = result;
          }
        }
      });
    }, elementRef);

    return () => ctx.revert();
  }, [text, triggerKey]);

  return <span ref={elementRef} className={className}>{text}</span>;
};

export default GlitchText;