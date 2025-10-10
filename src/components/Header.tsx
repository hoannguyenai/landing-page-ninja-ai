import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import rocketLogo from "@/assets/rocket-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-colors duration-300 border-b ${
        scrolled
          ? "bg-white text-black border-gray-200"
          : "bg-[#e3e3e3] text-black border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img
                src={rocketLogo}
                alt="Rocket Tech Academy Logo"
                className="w-8 h-8"
              />
            </div>
            <div>
              <h1 className="font-bold text-lg">Rocket Tech</h1>
              <p className="text-xs opacity-80">Academy</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-medium">
            <a
              href="#features"
              className="hover:text-primary transition-colors"
            >
              Khóa học
            </a>
            <a
              href="#instructors"
              className="hover:text-primary transition-colors"
            >
              Giảng viên
            </a>
            <a href="#pricing" className="hover:text-primary transition-colors">
              Học phí
            </a>
            <a
              href="#testimonials"
              className="hover:text-primary transition-colors"
            >
              Đánh giá
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Phone size={16} className="text-primary" />
              <span className="font-medium">0901.234.567</span>
            </div>
            <Button size="sm" variant="hero">
              Đăng ký ngay
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={20} />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <a href="#course" className="hover:text-primary py-2">
                Khóa học
              </a>
              <a href="#instructors" className="hover:text-primary py-2">
                Giảng viên
              </a>
              <a href="#pricing" className="hover:text-primary py-2">
                Học phí
              </a>
              <a href="#testimonials" className="hover:text-primary py-2">
                Đánh giá
              </a>
              <div className="pt-3 border-t flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <Phone size={16} className="text-primary" />
                  <span className="font-medium">0901.234.567</span>
                </div>
                <Button size="sm" variant="hero" className="w-fit">
                  Đăng ký ngay
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
