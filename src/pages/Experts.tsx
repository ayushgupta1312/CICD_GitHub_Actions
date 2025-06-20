
import { useState } from "react";
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import { ExpertCard } from "@/components/ui/expert-card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

const expertsMock = [
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
  },
  {
    id: "3",
    name: "David Wilson",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    profession: "Value Investor",
    followers: 15476,
    winRate: 79,
    monthlyReturn: 8.4,
    followed: false
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    profession: "Technical Analyst",
    followers: 12853,
    winRate: 75,
    monthlyReturn: 10.2,
    followed: true
  },
  {
    id: "5",
    name: "Kevin Zhang",
    avatar: "https://randomuser.me/api/portraits/men/57.jpg",
    profession: "Momentum Trader",
    followers: 10237,
    winRate: 72,
    monthlyReturn: 18.7,
    followed: false
  }
];

const topPerformersMock = [
  {
    id: "5",
    name: "Kevin Zhang",
    avatar: "https://randomuser.me/api/portraits/men/57.jpg",
    profession: "Momentum Trader",
    followers: 10237,
    winRate: 72,
    monthlyReturn: 18.7,
    followed: false
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
  },
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
];

const Experts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredExperts = expertsMock.filter(expert => 
    expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    expert.profession.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="pb-20">
      {/* Header */}
      <Header title="Experts" showSearch={false} />
      
      {/* Search Bar */}
      <div className="px-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search experts..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {/* Tabs and Content */}
      <Tabs defaultValue="all" className="px-4">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="all">All Experts</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
          <TabsTrigger value="top">Top Performers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          {searchQuery && filteredExperts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No experts found matching "{searchQuery}"
            </div>
          ) : (
            filteredExperts.map((expert) => (
              <ExpertCard key={expert.id} {...expert} />
            ))
          )}
        </TabsContent>
        
        <TabsContent value="following">
          {expertsMock
            .filter(expert => expert.followed)
            .filter(expert => 
              searchQuery ? (
                expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                expert.profession.toLowerCase().includes(searchQuery.toLowerCase())
              ) : true
            )
            .map((expert) => (
              <ExpertCard key={expert.id} {...expert} />
            ))
          }
          
          {expertsMock.filter(expert => expert.followed).length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              You're not following any experts yet
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="top">
          {topPerformersMock
            .filter(expert => 
              searchQuery ? (
                expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                expert.profession.toLowerCase().includes(searchQuery.toLowerCase())
              ) : true
            )
            .map((expert) => (
              <ExpertCard key={expert.id} {...expert} />
            ))
          }
        </TabsContent>
      </Tabs>
      
      {/* Bottom Navigation */}
      <MobileNav />
    </div>
  );
};

export default Experts;
