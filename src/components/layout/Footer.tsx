import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const footerLinks = {
  supply: [
    { label: "Product Forms", href: "/supply#forms" },
    { label: "Specifications", href: "/supply#specs" },
    { label: "Logistics", href: "/supply#logistics" },
  ],
  cultivation: [
    { label: "Production Base", href: "/cultivation#base" },
    { label: "Technical Guidance", href: "/cultivation#guidance" },
    { label: "Planting Materials", href: "/cultivation#materials" },
  ],
  resources: [
    { label: "Product Knowledge", href: "/resources" },
    { label: "Market Applications", href: "/resources" },
    { label: "Cultivation Insights", href: "/resources" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img src={logoIcon} alt="ZizaniaStem" className="h-9 w-auto brightness-0 invert" />
              <span className="text-2xl font-semibold tracking-tight">
                ZizaniaStem
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Origin-based production and supply of edible Zizania latifolia stem.
            </p>
          </div>

          {/* Supply Links */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
              Supply
            </h4>
            <ul className="space-y-3">
              {footerLinks.supply.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cultivation Links */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
              Cultivation
            </h4>
            <ul className="space-y-3">
              {footerLinks.cultivation.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} ZizaniaStem. Production and supply system.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/contact"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/about"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
