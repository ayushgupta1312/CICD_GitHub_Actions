
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import { TradeCard } from "@/components/ui/card-trade";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { useState } from "react";

const tradeAlertsMock = [
  {
    id: "1",
    expertName: "Sarah Johnson",
    stockSymbol: "AAPL",
    stockName: "Apple Inc.",
    action: "BUY" as const,
    price: 178.32,
    change: 1.24,
    time: "2h ago"
  },
  {
    id: "2",
    expertName: "Michael Chen",
    stockSymbol: "NVDA",
    stockName: "NVIDIA Corporation",
    action: "BUY" as const,
    price: 924.75,
    change: 3.52,
    time: "4h ago"
  },
  {
    id: "3",
    expertName: "David Wilson",
    stockSymbol: "META",
    stockName: "Meta Platforms Inc.",
    action: "SELL" as const,
    price: 472.95,
    change: -0.87,
    time: "5h ago"
  },
  {
    id: "4",
    expertName: "Emily Rodriguez",
    stockSymbol: "MSFT",
    stockName: "Microsoft Corporation",
    action: "BUY" as const,
    price: 417.55,
    change: 0.83,
    time: "Yesterday"
  },
  {
    id: "5",
    expertName: "Kevin Zhang",
    stockSymbol: "AMZN",
    stockName: "Amazon.com Inc.",
    action: "BUY" as const,
    price: 182.05,
    change: 1.52,
    time: "Yesterday"
  }
];

const notificationsMock = [
  {
    id: "1",
    type: "expert_joined",
    content: "Sarah Johnson added a new strategy: Tech Growth Alpha",
    time: "1h ago"
  },
  {
    id: "2",
    type: "performance",
    content: "Your portfolio is up 3.2% this week!",
    time: "5h ago"
  },
  {
    id: "3",
    type: "system",
    content: "New version of Octo Mimic is available with enhanced features",
    time: "Yesterday"
  }
];

const Alerts = () => {
  const [visibleAlerts, setVisibleAlerts] = useState<string[]>(tradeAlertsMock.map(alert => alert.id));
  
  const handleAccept = (id: string) => {
    // In a real app, we would make an API call to accept the trade
    console.log(`Accepting trade alert ${id}`);
    setVisibleAlerts(visibleAlerts.filter(alertId => alertId !== id));
  };
  
  const handleDecline = (id: string) => {
    // In a real app, we would make an API call to decline the trade
    console.log(`Declining trade alert ${id}`);
    setVisibleAlerts(visibleAlerts.filter(alertId => alertId !== id));
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <Header title="Alerts" showSearch={false} />
      
      {/* Main Content */}
      <main className="px-4 pb-6">
        <Tabs defaultValue="trades" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="trades">Trade Alerts</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          
          {/* Trade Alerts Tab */}
          <TabsContent value="trades">
            {tradeAlertsMock
              .filter(alert => visibleAlerts.includes(alert.id))
              .map((alert) => (
                <div key={alert.id} className="mb-4">
                  <TradeCard {...alert} />
                  <div className="flex space-x-2 mt-1">
                    <Button 
                      variant="outline" 
                      className="flex-1 bg-white dark:bg-card border-octo-green text-octo-green"
                      onClick={() => handleAccept(alert.id)}
                    >
                      <Check className="mr-1 h-4 w-4" /> Mimic Trade
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 bg-white dark:bg-card border-rose-500 text-rose-500"
                      onClick={() => handleDecline(alert.id)}
                    >
                      <X className="mr-1 h-4 w-4" /> Ignore
                    </Button>
                  </div>
                </div>
              ))
            }
            
            {visibleAlerts.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No pending trade alerts
              </div>
            )}
          </TabsContent>
          
          {/* Notifications Tab */}
          <TabsContent value="notifications">
            {notificationsMock.map((notification) => (
              <Card key={notification.id} className="mb-3">
                <CardContent className="p-4">
                  <div className="flex justify-between">
                    <div className="flex-1">
                      <p className="text-sm">{notification.content}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
      
      {/* Bottom Navigation */}
      <MobileNav />
    </div>
  );
};

export default Alerts;
