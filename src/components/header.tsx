
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfileButton } from "./ProfileButton";

interface HeaderProps {
  title: string;
  showSearch?: boolean;
  showNotification?: boolean;
  className?: string;
}

export function Header({ 
  title,
  showSearch = true,
  showNotification = true,
  className 
}: HeaderProps) {
  return (
    <header className={cn("flex items-center justify-between px-4 py-4 bg-background", className)}>
      <h1 className="text-2xl font-bold bg-gradient-to-r from-octo-green to-octo-blue bg-clip-text text-transparent">
        {title}
      </h1>
      <div className="flex items-center space-x-2">
        {showSearch && (
          <Button variant="ghost" size="icon" className="text-foreground">
            <Search size={24} />
          </Button>
        )}
        {showNotification && (
          <Link to="/alerts">
            <Button variant="ghost" size="icon" className="text-foreground relative">
              <Bell size={24} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-octo-green rounded-full"></span>
            </Button>
          </Link>
        )}
        <ProfileButton />
      </div>
    </header>
  );
}
