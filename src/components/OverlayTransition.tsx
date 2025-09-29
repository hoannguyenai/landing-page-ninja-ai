import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface OverlayTransitionProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function OverlayTransition({ to, children, className, onClick }: OverlayTransitionProps) {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Handle back button
    const handlePopState = () => {
      setIsAnimating(true);
      const overlay = document.querySelector(".overlay-reveal");
      if (overlay) {
        overlay.classList.remove("overlay-reveal-in", "overlay-reveal-out");
        overlay.classList.add("overlay-reverse-in", "overlay-reverse-out");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (onClick) {
      onClick();
    }

    setIsAnimating(true);

    // Create overlay element
    const overlay = document.createElement("div");
    overlay.className = "overlay-reveal overlay-reveal-in overlay-reveal-out";
    document.body.appendChild(overlay);

    // Navigate after overlay animation
    setTimeout(() => {
      navigate(to);
      
      // Remove overlay after navigation
      setTimeout(() => {
        overlay.remove();
        setIsAnimating(false);
      }, 400);
    }, 300);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
}
