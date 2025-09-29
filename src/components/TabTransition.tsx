import { useEffect, useState } from "react";

interface TabTransitionProps {
  children: React.ReactNode;
  activeKey: string | number;
}

export function TabTransition({ children, activeKey }: TabTransitionProps) {
  const [displayKey, setDisplayKey] = useState(activeKey);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (activeKey !== displayKey) {
      setIsTransitioning(true);
      
      const timer = setTimeout(() => {
        setDisplayKey(activeKey);
        setIsTransitioning(false);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [activeKey, displayKey]);

  return (
    <div 
      key={displayKey}
      className={isTransitioning ? "tab-fade-out" : "tab-slide-in"}
    >
      {children}
    </div>
  );
}
