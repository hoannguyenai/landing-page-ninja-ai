import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      // Determine direction based on path
      const isForward = shouldAnimateForward(prevPathRef.current, location.pathname);
      
      setTransitionStage(isForward ? "fadeOut" : "fadeOutReverse");
      
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage(isForward ? "fadeIn" : "fadeInReverse");
        prevPathRef.current = location.pathname;
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  const shouldAnimateForward = (from: string, to: string) => {
    // Define route order for direction detection
    const routes = ["/", "/test"];
    const fromIndex = routes.indexOf(from);
    const toIndex = routes.indexOf(to);
    
    return toIndex > fromIndex;
  };

  const getAnimationClass = () => {
    switch (transitionStage) {
      case "fadeOut":
        return "page-slide-up-out";
      case "fadeIn":
        return "page-slide-up-in";
      case "fadeOutReverse":
        return "page-slide-down-out";
      case "fadeInReverse":
        return "page-slide-down-in";
      default:
        return "";
    }
  };

  return (
    <div key={displayLocation.pathname} className={getAnimationClass()}>
      {children}
    </div>
  );
}
