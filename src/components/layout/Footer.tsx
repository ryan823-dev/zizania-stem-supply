import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const footerLinks = {
  supply: [
    { label: "Product Forms", href: "/supply#forms" },
    { label: "Specifications", href: "/supply#specs" },
    { label: "Logistics", href: "/supply#logistics" },
    { label: "Order Now", href: "/order" },
  ],
  cultivation: [
    { label: "Production Base", href: "/cultivation#base" },
    { label: "Technical Guidance", href: "/cultivation#guidance" },
    { label: "Planting Materials", href: "/cultivation#materials" },
  ],
  resources: [
    { label: "Product Knowledge", href: "/resources#knowledge" },
    { label: "Market Applications", href: "/resources#applications" },
    { label: "Cultivation Insights", href: "/resources#insights" },
  ],
  support: [
    { label: "Customer Support", href: "/support" },
    { label: "FAQs", href: "/support#faqs" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-lg overflow-hidden flex-shrink-0">
                <img src={logoIcon} alt="ZizaniaStem" className="h-full w-full object-cover scale-110" />
              </div>
              <span className="text-2xl font-semibold tracking-tight">
                ZizaniaStem
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Origin-based production and supply of edible Zizania latifolia stem. We are committed to delivering high-quality products to customers worldwide while supporting sustainable farming practices.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
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

          {/* Support Links */}
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
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
              © {new Date().getFullYear()} ZizaniaStem. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/about"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Contact
              </Link>
              <a
                href="#"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
