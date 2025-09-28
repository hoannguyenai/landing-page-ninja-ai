import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CodingTestCTAProps {
  label?: string;
  href?: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "xl";
  variant?: "default" | "hero" | "cta" | "cta-power" | "secondary" | "outline";
}

export function CodingTestCTA({ 
  label = "Làm Bài Test Ngay – Miễn phí",
  href = "/test",
  className,
  size = "xl",
  variant = "cta-power"
}: CodingTestCTAProps) {
  return (
    <Button 
      size={size} 
      variant={variant} 
      className={className}
      asChild
    >
      <Link to={href}>
        <span className="rocket-fly inline-block">🚀</span> {label}
      </Link>
    </Button>
  );
}