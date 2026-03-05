import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const routeLabels: Record<string, string> = {
  '/': 'Home',
  '/supply': 'Supply',
  '/cultivation': 'Cultivation',
  '/innovation': 'Innovation',
  '/resources': 'Resources',
  '/support': 'Support',
  '/order': 'Order',
  '/contact': 'Contact',
  '/about': 'About',
};

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const location = useLocation();

  const defaultItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
  ];

  if (items) {
    defaultItems.push(...items);
  } else {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      defaultItems.push({
        label: routeLabels[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1),
        href: isLast ? currentPath : currentPath,
      });
    });
  }

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center space-x-2 text-sm", className)}>
      {defaultItems.map((item, index) => {
        const isLast = index === defaultItems.length - 1;
        
        return (
          <div key={item.href} className="flex items-center">
            {index === 0 && (
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                <Home size={16} />
              </Link>
            )}
            {index > 0 && (
              <>
                <ChevronRight size={14} className="text-muted-foreground mx-2" />
                {isLast ? (
                  <span className="text-foreground font-medium">{item.label}</span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
}