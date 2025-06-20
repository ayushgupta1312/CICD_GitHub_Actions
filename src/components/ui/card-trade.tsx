
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TradeCardProps {
  expertName: string;
  stockSymbol: string;
  stockName: string;
  action: "BUY" | "SELL";
  price: number;
  change: number;
  time: string;
  className?: string;
}

export function TradeCard({
  expertName,
  stockSymbol,
  stockName,
  action,
  price,
  change,
  time,
  className,
}: TradeCardProps) {
  const isPositive = change >= 0;

  return (
    <Card className={cn("overflow-hidden border-border mb-3", className)}>
      <CardContent className="p-0">
        <div className="flex items-center p-4 justify-between">
          <div className="flex items-center space-x-3">
            <div className={cn(
              "w-12 h-12 flex items-center justify-center rounded-full",
              action === "BUY" ? "bg-gradient-to-br from-octo-green-light to-octo-green" : "bg-gradient-to-br from-rose-500 to-rose-600"
            )}>
              {action === "BUY" ? (
                <TrendingUp className="h-6 w-6 text-white" />
              ) : (
                <TrendingDown className="h-6 w-6 text-white" />
              )}
            </div>
            <div>
              <div className="font-bold text-lg">{stockSymbol}</div>
              <div className="text-sm text-muted-foreground">{stockName}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-lg">${price.toFixed(2)}</div>
            <div className={cn(
              "text-sm",
              isPositive ? "text-octo-green" : "text-rose-500"
            )}>
              {isPositive ? "+" : ""}{change.toFixed(2)}%
            </div>
          </div>
        </div>
        <div className="px-4 pb-3 pt-0 flex justify-between text-sm">
          <div className="text-muted-foreground">
            Signal by <span className="text-octo-blue font-medium">{expertName}</span>
          </div>
          <div className="text-muted-foreground">{time}</div>
        </div>
      </CardContent>
    </Card>
  );
}
