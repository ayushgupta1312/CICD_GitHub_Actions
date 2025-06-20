
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Shield, Bell, DollarSign, HelpCircle, LogOut } from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [autoMimicEnabled, setAutoMimicEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  
  return (
    <div className="pb-20">
      {/* Header */}
      <Header title="Settings" showSearch={false} showNotification={false} />
      
      {/* Main Content */}
      <main className="px-4 pb-6">
        {/* User Profile Section */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 overflow-hidden rounded-full bg-gradient-to-br from-octo-green-light to-octo-blue p-[2px]">
                <div className="w-full h-full rounded-full overflow-hidden bg-card flex items-center justify-center">
                  <img 
                    src="https://randomuser.me/api/portraits/men/45.jpg" 
                    alt="User Avatar"
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-sm text-muted-foreground">john.doe@example.com</p>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">
              Edit Profile
            </Button>
          </CardContent>
        </Card>
        
        {/* App Preferences */}
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle>App Preferences</CardTitle>
            <CardDescription>Customize your experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive alerts for trade signals
                </p>
              </div>
              <Switch 
                checked={notificationsEnabled} 
                onCheckedChange={setNotificationsEnabled} 
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto Mimic</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically mimic followed experts
                </p>
              </div>
              <Switch 
                checked={autoMimicEnabled} 
                onCheckedChange={setAutoMimicEnabled} 
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Toggle dark theme
                </p>
              </div>
              <Switch 
                checked={darkModeEnabled} 
                onCheckedChange={setDarkModeEnabled} 
              />
            </div>
          </CardContent>
        </Card>
        
        {/* Account Settings */}
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 p-0">
            <Button variant="ghost" className="w-full justify-between py-6 px-4">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-3 text-octo-blue" />
                <span>Security Settings</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Button>
            
            <Separator />
            
            <Button variant="ghost" className="w-full justify-between py-6 px-4">
              <div className="flex items-center">
                <Bell className="h-5 w-5 mr-3 text-octo-green" />
                <span>Notification Preferences</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Button>
            
            <Separator />
            
            <Button variant="ghost" className="w-full justify-between py-6 px-4">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-3 text-amber-500" />
                <span>Payment Methods</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Button>
          </CardContent>
        </Card>
        
        {/* Support */}
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle>Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 p-0">
            <Button variant="ghost" className="w-full justify-between py-6 px-4">
              <div className="flex items-center">
                <HelpCircle className="h-5 w-5 mr-3 text-purple-500" />
                <span>Help Center</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Button>
            
            <Separator />
            
            <Button variant="ghost" className="w-full justify-between py-6 px-4">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-3 text-slate-500" />
                <span>Terms and Privacy</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Button>
          </CardContent>
        </Card>
        
        {/* Logout Button */}
        <Button variant="outline" className="w-full border-rose-500 text-rose-500 hover:bg-rose-50 hover:text-rose-600">
          <LogOut className="mr-2 h-4 w-4" /> Sign Out
        </Button>
      </main>
      
      {/* Bottom Navigation */}
      <MobileNav />
    </div>
  );
};

export default Settings;
