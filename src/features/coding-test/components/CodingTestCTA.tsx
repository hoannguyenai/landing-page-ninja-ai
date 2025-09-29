import { Button } from "@/components/ui/button";
import { OverlayTransition } from "@/components/OverlayTransition";

interface CodingTestCTAProps {
  label?: string;
  href?: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "xl";
  variant?: "default" | "hero" | "cta" | "cta-power" | "secondary" | "outline";
  useOverlay?: boolean;
}

export function CodingTestCTA({ 
  label = "Làm Bài Test Ngay – Miễn phí",
  href = "/test",
  className,
  size = "xl",
  variant = "cta-power",
  useOverlay = true
}: CodingTestCTAProps) {
  const buttonContent = (
    <Button 
      size={size} 
      variant={variant} 
      className={className}
    >
      <span className="rocket-fly inline-block">🚀</span> {label}
    </Button>
  );

  if (useOverlay) {
    return (
      <OverlayTransition to={href}>
        {buttonContent}
      </OverlayTransition>
    );
  }

  return buttonContent;
}