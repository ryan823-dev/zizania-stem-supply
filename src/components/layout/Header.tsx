import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
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
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="h-8 md:h-9 w-8 md:w-9 rounded-lg overflow-hidden flex-shrink-0">
              <img src={logoIcon} alt="ZizaniaStem" className="h-full w-full object-cover scale-110" />
            </div>
            <span className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
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
                  "px-4 py-2 text-sm font-medium transition-colors",
                  location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t(`nav.${item.label.toLowerCase()}`)}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSelector />
            <Button variant="industrial" size="sm" asChild>
              <Link to="/contact">{t('nav.contact')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t border-border py-4">
              <div className="px-4 mb-4">
                <LanguageSelector />
              </div>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 text-base font-medium transition-colors",
                      location.pathname === item.href
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {t(`nav.${item.label.toLowerCase()}`)}
                  </Link>
                ))}
                <div className="px-4 pt-4 mt-2 border-t border-border">
                  <Button variant="industrial" className="w-full" asChild>
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
