
import { useState } from "react";
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PerformanceChart } from "@/components/ui/performance-chart";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

const portfolioData = {
  value: 25678.42,
  change: 458.32,
  changePercentage: 1.82,
  chart: {
    data: [22000, 22400, 22800, 23200, 23600, 24000, 24200, 23800, 24400, 24800, 25200, 25600],
    labels: Array.from({ length: 12 }, (_, i) => i.toString()),
  }
};

const positionsMock = [
  {
    id: "1",
    symbol: "AAPL",
    name: "Apple Inc.",
    shares: 12,
    avgPrice: 167.89,
    currentPrice: 178.32,
    value: 2139.84,
    return: 124.32,
    returnPercentage: 6.18
  },
  {
    id: "2",
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    shares: 8,
    avgPrice: 880.45,
    currentPrice: 924.75,
    value: 7398.00,
    return: 354.40,
    returnPercentage: 5.03
  },
  {
    id: "3",
    symbol: "MSFT",
    name: "Microsoft Corporation",
    shares: 15,
    avgPrice: 405.12,
    currentPrice: 417.55,
    value: 6263.25,
    return: 186.45,
    returnPercentage: 3.07
  },
  {
    id: "4",
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    shares: 20,
    avgPrice: 175.23,
    currentPrice: 182.05,
    value: 3641.00,
    return: 136.40,
    returnPercentage: 3.89
  },
  {
    id: "5",
    symbol: "META",
    name: "Meta Platforms Inc.",
    shares: 10,
    avgPrice: 485.65,
    currentPrice: 472.95,
    value: 4729.50,
    return: -127.00,
    returnPercentage: -2.62
  },
];

const mimicsActiveMock = [
  {
    id: "1",
    expertName: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    allocation: 10000,
    return: 1270,
    returnPercentage: 12.7,
  },
  {
    id: "2",
    expertName: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    allocation: 12000,
    return: 1836,
    returnPercentage: 15.3,
  },
];

const mimicsHistoryMock = [
  {
    id: "3",
    expertName: "Emily Rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    allocation: 8000,
    return: 816,
    returnPercentage: 10.2,
    endDate: "Mar 15, 2023"
  }
];

const Portfolio = () => {
  const isPortfolioPositive = portfolioData.changePercentage >= 0;
  
  return (
    <div className="pb-20">
      {/* Header */}
      <Header title="Portfolio" />
      
      {/* Main Content */}
      <main className="px-4 pb-6">
        {/* Portfolio Overview */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Total Value</h2>
              <div className={cn(
                "flex items-center",
                isPortfolioPositive ? "text-octo-green" : "text-rose-500"
              )}>
                {isPortfolioPositive ? (
                  <TrendingUp className="h-4 w-4 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 mr-1" />
                )}
                <span className="text-sm font-medium">
                  {isPortfolioPositive ? "+" : ""}{portfolioData.changePercentage.toFixed(2)}%
                </span>
              </div>
            </div>
            <div className="mb-2">
              <div className="text-2xl font-bold">${portfolioData.value.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
              <div className={cn(
                "text-sm",
                isPortfolioPositive ? "text-octo-green" : "text-rose-500"
              )}>
                {isPortfolioPositive ? "+" : "-"}${Math.abs(portfolioData.change).toFixed(2)} today
              </div>
            </div>
            <div className="h-32">
              <PerformanceChart
                data={portfolioData.chart.data}
                labels={portfolioData.chart.labels}
                title=""
                percentage={portfolioData.changePercentage}
                className="border-none shadow-none p-0"
              />
            </div>
          </CardContent>
        </Card>
        
        {/* Tabs for Holdings and Mimics */}
        <Tabs defaultValue="positions" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="positions">Positions</TabsTrigger>
            <TabsTrigger value="mimics">Mimics</TabsTrigger>
          </TabsList>
          
          {/* Positions Tab Content */}
          <TabsContent value="positions">
            {positionsMock.map((position) => {
              const isPositive = position.returnPercentage >= 0;
              
              return (
                <Card key={position.id} className="mb-3">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h3 className="font-bold">{position.symbol}</h3>
                        <p className="text-xs text-muted-foreground">{position.name}</p>
                      </div>
                      <div className={cn(
                        "text-right",
                        isPositive ? "text-octo-green" : "text-rose-500"
                      )}>
                        <div className="font-bold">${position.currentPrice.toFixed(2)}</div>
                        <div className="text-xs flex items-center justify-end">
                          {isPositive ? (
                            <TrendingUp className="h-3 w-3 mr-1" />
                          ) : (
                            <TrendingDown className="h-3 w-3 mr-1" />
                          )}
                          {isPositive ? "+" : ""}{position.returnPercentage.toFixed(2)}%
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <div className="text-muted-foreground">Shares</div>
                        <div>{position.shares}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Avg Price</div>
                        <div>${position.avgPrice.toFixed(2)}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Value</div>
                        <div>${position.value.toFixed(2)}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>
          
          {/* Mimics Tab Content */}
          <TabsContent value="mimics">
            <Tabs defaultValue="active" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              
              {/* Active Mimics */}
              <TabsContent value="active">
                {mimicsActiveMock.map((mimic) => (
                  <Card key={mimic.id} className="mb-3">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 overflow-hidden rounded-full bg-gradient-to-br from-octo-green-light to-octo-blue-light p-[2px]">
                          <div className="w-full h-full rounded-full overflow-hidden bg-card">
                            <img 
                              src={mimic.avatar} 
                              alt={mimic.expertName}
                              className="w-full h-full object-cover" 
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold">{mimic.expertName}</h3>
                          <p className="text-xs text-muted-foreground">Expert</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center p-2 bg-muted/50 rounded-lg">
                          <div className="text-xs text-muted-foreground">Allocated</div>
                          <div className="font-bold">${mimic.allocation.toLocaleString()}</div>
                        </div>
                        <div className="text-center p-2 bg-muted/50 rounded-lg">
                          <div className="text-xs text-muted-foreground">Return</div>
                          <div className="font-bold text-octo-green">+${mimic.return.toLocaleString()}</div>
                        </div>
                        <div className="text-center p-2 bg-muted/50 rounded-lg">
                          <div className="text-xs text-muted-foreground">Percentage</div>
                          <div className="font-bold text-octo-green">+{mimic.returnPercentage}%</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              {/* Mimic History */}
              <TabsContent value="history">
                {mimicsHistoryMock.map((mimic) => (
                  <Card key={mimic.id} className="mb-3">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 overflow-hidden rounded-full bg-gradient-to-br from-gray-300 to-gray-400 p-[2px]">
                          <div className="w-full h-full rounded-full overflow-hidden bg-card">
                            <img 
                              src={mimic.avatar} 
                              alt={mimic.expertName}
                              className="w-full h-full object-cover grayscale" 
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold">{mimic.expertName}</h3>
                          <p className="text-xs text-muted-foreground">Until {mimic.endDate}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center p-2 bg-muted/50 rounded-lg">
                          <div className="text-xs text-muted-foreground">Allocated</div>
                          <div className="font-bold">${mimic.allocation.toLocaleString()}</div>
                        </div>
                        <div className="text-center p-2 bg-muted/50 rounded-lg">
                          <div className="text-xs text-muted-foreground">Return</div>
                          <div className="font-bold text-octo-green">+${mimic.return.toLocaleString()}</div>
                        </div>
                        <div className="text-center p-2 bg-muted/50 rounded-lg">
                          <div className="text-xs text-muted-foreground">Percentage</div>
                          <div className="font-bold text-octo-green">+{mimic.returnPercentage}%</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {mimicsHistoryMock.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    No historical mimic data yet
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </main>
      
      {/* Bottom Navigation */}
      <MobileNav />
    </div>
  );
};

export default Portfolio;
