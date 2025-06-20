
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogIn, UserCircle } from "lucide-react";

export function ProfileButton() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  
  if (!user) {
    return (
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-foreground"
        onClick={() => navigate("/auth/login")}
      >
        <LogIn size={24} />
      </Button>
    );
  }
  
  return (
    <div className="relative group">
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-foreground relative"
      >
        <UserCircle size={24} className="text-octo-green" />
      </Button>
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-card ring-1 ring-black ring-opacity-5 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
        <div className="py-1">
          <div className="px-4 py-2 text-sm text-muted-foreground border-b border-border">
            {user.email}
          </div>
          <button
            onClick={() => navigate("/settings")} 
            className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left"
          >
            Settings
          </button>
          <button
            onClick={() => signOut()} 
            className="px-4 py-2 text-sm text-rose-500 hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
