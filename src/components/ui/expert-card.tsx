
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ExpertCardProps {
  id: string;
  name: string;
  avatar: string;
  profession: string;
  followers: number;
  winRate: number;
  monthlyReturn: number;
  followed?: boolean;
  className?: string;
}

export function ExpertCard({
  id,
  name,
  avatar,
  profession,
  followers,
  winRate,
  monthlyReturn,
  followed = false,
  className,
}: ExpertCardProps) {
  const [isFollowed, setIsFollowed] = useState(followed);
  const [followerCount, setFollowerCount] = useState(followers);
  
  const handleFollowToggle = () => {
    setIsFollowed(!isFollowed);
    setFollowerCount(isFollowed ? followerCount - 1 : followerCount + 1);
    // In a real app, we would make an API call here
  };

  return (
    <Card className={cn("overflow-hidden border-border mb-4", className)}>
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-14 h-14 overflow-hidden rounded-full bg-gradient-to-br from-octo-green-light to-octo-blue-light p-[2px]">
              <div className="w-full h-full rounded-full overflow-hidden bg-card">
                <img 
                  src={avatar} 
                  alt={name}
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            {monthlyReturn > 10 && (
              <div className="absolute -top-1 -right-1 bg-octo-green text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                🔥
              </div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{profession}</p>
          </div>
          <Button 
            variant={isFollowed ? "outline" : "default"}
            className={cn(
              isFollowed ? "border-octo-green text-octo-green hover:bg-octo-green/10" : "bg-gradient-to-r from-octo-green to-octo-blue text-white"
            )}
            onClick={handleFollowToggle}
          >
            {isFollowed ? "Following" : "Follow"}
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="text-center p-2 bg-muted/50 rounded-lg">
            <div className="text-xl font-bold">{followerCount.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Followers</div>
          </div>
          <div className="text-center p-2 bg-muted/50 rounded-lg">
            <div className="text-xl font-bold">{winRate}%</div>
            <div className="text-xs text-muted-foreground">Win Rate</div>
          </div>
          <div className="text-center p-2 bg-muted/50 rounded-lg">
            <div className={cn(
              "text-xl font-bold",
              monthlyReturn >= 0 ? "text-octo-green" : "text-rose-500"
            )}>
              {monthlyReturn > 0 ? "+" : ""}{monthlyReturn}%
            </div>
            <div className="text-xs text-muted-foreground">Monthly</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
