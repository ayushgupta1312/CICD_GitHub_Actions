
import { useState } from "react";
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import { TradeCard } from "@/components/ui/card-trade";
import { ExpertCard } from "@/components/ui/expert-card";
import { PerformanceChart } from "@/components/ui/performance-chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const recentTradesMock = [
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
  }
];

const topExpertsMock = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    profession: "Options Specialist",
    followers: 24563,
    winRate: 87,
    monthlyReturn: 12.7,
    followed: true
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Day Trader",
    followers: 18921,
    winRate: 82,
    monthlyReturn: 15.3,
    followed: false
  }
];

const performanceData = {
  daily: {
    data: [12, 14, 13, 15, 18, 19, 22, 25, 27, 29, 28, 30, 28, 29, 31, 33, 35, 39, 41, 40, 42],
    labels: Array.from({ length: 21 }, (_, i) => i.toString()),
    percentage: 3.24
  },
  weekly: {
    data: [210, 230, 215, 240, 250, 265, 280, 290, 285, 295, 310, 305],
    labels: Array.from({ length: 12 }, (_, i) => i.toString()),
    percentage: 5.98
  },
  monthly: {
    data: [2400, 2500, 2700, 2600, 2800, 3000, 3200, 3300, 3500, 3700, 3800, 4000],
    labels: Array.from({ length: 12 }, (_, i) => i.toString()),
    percentage: 12.45
  }
};

const Index = () => {
  const [performanceTab, setPerformanceTab] = useState("daily");

  return (
    <div className="pb-20">
      {/* Header */}
      <Header title="Octo Mimic" />
      
      {/* Main Content */}
      <main className="px-4 pb-6">
        {/* Performance Chart */}
        <div className="mb-6">
          <Tabs defaultValue="daily" value={performanceTab} onValueChange={setPerformanceTab} className="w-full">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Your Performance</h2>
              <TabsList className="bg-muted/50">
                <TabsTrigger value="daily" className="text-xs">1D</TabsTrigger>
                <TabsTrigger value="weekly" className="text-xs">1W</TabsTrigger>
                <TabsTrigger value="monthly" className="text-xs">1M</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="daily">
              <PerformanceChart 
                data={performanceData.daily.data} 
                labels={performanceData.daily.labels}
                title="Daily Return"
                percentage={performanceData.daily.percentage}
              />
            </TabsContent>
            <TabsContent value="weekly">
              <PerformanceChart 
                data={performanceData.weekly.data} 
                labels={performanceData.weekly.labels}
                title="Weekly Return"
                percentage={performanceData.weekly.percentage}
              />
            </TabsContent>
            <TabsContent value="monthly">
              <PerformanceChart 
                data={performanceData.monthly.data} 
                labels={performanceData.monthly.labels}
                title="Monthly Return"
                percentage={performanceData.monthly.percentage}
              />
            </TabsContent>
          </Tabs>
        </div>

        {/* Recent Trade Signals */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Recent Signals</h2>
            <Link to="/alerts" className="text-octo-blue flex items-center text-sm">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          {recentTradesMock.map((trade) => (
            <TradeCard key={trade.id} {...trade} />
          ))}
        </div>

        {/* Top Experts */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Top Experts</h2>
            <Link to="/experts" className="text-octo-blue flex items-center text-sm">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          {topExpertsMock.map((expert) => (
            <ExpertCard key={expert.id} {...expert} />
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <MobileNav />
    </div>
  );
};

export default Index;
