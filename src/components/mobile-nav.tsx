
import { Link, useLocation } from "react-router-dom";
import { Home, Users, BarChart3, Bell, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Experts",
    href: "/experts",
    icon: Users,
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: BarChart3,
  },
  {
    name: "Alerts",
    href: "/alerts",
    icon: Bell,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function MobileNav() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border h-16 flex items-center">
      <div className="w-full max-w-md mx-auto grid grid-cols-5 h-full">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex flex-col items-center justify-center h-full text-xs font-medium transition-colors",
                isActive
                  ? "text-octo-green"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className={cn(
                "flex items-center justify-center mb-1",
                isActive && "bg-gradient-to-r from-octo-green to-octo-blue bg-clip-text text-transparent"
              )}>
                <Icon size={24} className={isActive ? "stroke-[2.5px]" : ""} />
              </div>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
