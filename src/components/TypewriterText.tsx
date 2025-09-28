import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  loop?: boolean;
  className?: string;
  speed?: number;
  delay?: number;
  highlights?: {
    [key: string]: string; // text: color class
  };
}

export function TypewriterText({ 
  texts, 
  loop = false, 
  className = "", 
  speed = 50,
  delay = 500,
  highlights = {}
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  // Start after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!hasStarted) return;

    const currentText = texts[currentTextIndex];
    
    if (!isDeleting && currentCharIndex < currentText.length) {
      // Typing
      const randomSpeed = speed + Math.random() * 20 - 10; // 40-70ms range
      const timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
      }, randomSpeed);
      return () => clearTimeout(timer);
    } else if (!isDeleting && currentCharIndex === currentText.length) {
      // Finished typing current text
      if (loop && texts.length > 1) {
        // Wait before deleting
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else if (isDeleting && currentCharIndex > 0) {
      // Deleting
      const timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(prev => prev - 1);
      }, 30);
      return () => clearTimeout(timer);
    } else if (isDeleting && currentCharIndex === 0) {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentTextIndex(prev => (prev + 1) % texts.length);
    }
  }, [hasStarted, currentCharIndex, currentTextIndex, isDeleting, texts, loop, speed]);

  // Highlight keywords in text
  const highlightText = (text: string) => {
    let result = text;
    
    Object.entries(highlights).forEach(([keyword, colorClass]) => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      result = result.replace(regex, `<span class="${colorClass}">$1</span>`);
    });
    
    return result;
  };

  return (
    <span className={`inline-block ${className}`}>
      <span 
        dangerouslySetInnerHTML={{ 
          __html: highlightText(displayText) 
        }} 
      />
      {(currentCharIndex < texts[currentTextIndex]?.length || isDeleting) && (
        <span 
          className={`inline-block w-0.5 h-8 bg-gray-900 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
        >
          |
        </span>
      )}
    </span>
  );
}