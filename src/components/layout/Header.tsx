import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import logoIcon from "@/assets/logo-icon.png";

const navItems = [
  { label: "Supply", href: "/supply" },
  { label: "Cultivation", href: "/cultivation" },
  { label: "Innovation", href: "/innovation" },
  { label: "Resources", href: "/resources" },
  { label: "Support", href: "/support" },
  { label: "Order", href: "/order" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border" 
        : "bg-background/0 backdrop-blur-none border-b border-transparent"
    )}>
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 group"
          >
            <div className="h-8 md:h-9 w-8 md:w-9 rounded-lg overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img src={logoIcon} alt="ZizaniaStem" className="h-full w-full object-cover scale-110" />
            </div>
            <span className="text-xl md:text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
              ZizaniaStem
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-200 relative group",
                  location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t(`nav.${item.label.toLowerCase()}`)}
                <span className={cn(
                  "absolute bottom-0 left-0 right-0 h-0.5 bg-primary transition-all duration-300",
                  location.pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Search"
            >
              <Search size={20} />
            </Button>
            <ThemeToggle />
            <LanguageSelector />
            <Button 
              variant="industrial" 
              size="sm" 
              asChild
              className="btn-glow"
            >
              <Link to="/contact">{t('nav.contact')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-slide-down">
            <div className="px-4 mb-4 flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Search"
              >
                <Search size={20} />
              </Button>
              <ThemeToggle />
              <LanguageSelector />
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base font-medium transition-all duration-200 flex items-center gap-3",
                    location.pathname === item.href
                      ? "text-foreground bg-muted/50 border-l-4 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  )}
                >
                  {t(`nav.${item.label.toLowerCase()}`)}
                </Link>
              ))}
              <div className="px-4 pt-4 mt-2 border-t border-border">
                <Button 
                  variant="industrial" 
                  className="w-full btn-3d" 
                  asChild
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    {t('nav.contact')}
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
