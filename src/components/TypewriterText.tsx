import { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  texts: string[];
  loop?: boolean;
  className?: string;
  speed?: number;
  delay?: number;
  highlights?: {
    [key: string]: string; // text: color class
  };
  cursorStyle?: 'bar' | 'block' | 'underline';
}

export function TypewriterText({ 
  texts, 
  loop = false, 
  className = "", 
  speed = 60,
  delay = 500,
  highlights = {},
  cursorStyle = 'bar'
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Start after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Cursor blinking - 530ms cycle (300ms on, 230ms off for natural feel)
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!hasStarted) return;

    const currentText = texts[currentTextIndex];
    
    if (!isDeleting && currentCharIndex < currentText.length) {
      // Typing - with slight randomization for natural feel
      const randomSpeed = speed + (Math.random() * 30 - 15);
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
      }, randomSpeed);
    } else if (!isDeleting && currentCharIndex === currentText.length) {
      // Finished typing current text
      if (loop && texts.length > 1) {
        // Pause before deleting
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, 2500);
      }
    } else if (isDeleting && currentCharIndex > 0) {
      // Deleting - faster than typing
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(prev => prev - 1);
      }, 25);
    } else if (isDeleting && currentCharIndex === 0) {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentTextIndex(prev => (prev + 1) % texts.length);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [hasStarted, currentCharIndex, currentTextIndex, isDeleting, texts, loop, speed]);

  // Highlight keywords in text with proper styling
  const highlightText = (text: string) => {
    if (!text || Object.keys(highlights).length === 0) {
      return text;
    }

    let result = text;
    Object.entries(highlights).forEach(([keyword, colorClass]) => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      result = result.replace(regex, `<span class="font-semibold ${colorClass}">$1</span>`);
    });
    
    return result;
  };

  // Cursor styles
  const cursorClasses = {
    bar: `w-0.5 h-[1.2em] bg-current`,
    block: `w-[0.65em] h-[1.2em] bg-current opacity-75`,
    underline: `w-[0.65em] h-1 bg-current bottom-0`
  };

  const currentCursorClass = cursorClasses[cursorStyle];

  return (
    <span className={`inline relative ${className}`}>
      <span 
        className="inline"
        dangerouslySetInnerHTML={{ 
          __html: highlightText(displayText) 
        }} 
      />
      {showCursor && (
        <span 
          className={`inline-block ml-0.5 align-middle transition-opacity duration-75 ${currentCursorClass}`}
          style={{ animation: 'none' }}
          aria-hidden="true"
        />
      )}
    </span>
  );
}