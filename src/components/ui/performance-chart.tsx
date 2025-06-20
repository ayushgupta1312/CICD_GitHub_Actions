
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { cn } from "@/lib/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface PerformanceChartProps {
  data: number[];
  labels: string[];
  title: string;
  percentage: number;
  className?: string;
}

export function PerformanceChart({
  data,
  labels,
  title,
  percentage,
  className,
}: PerformanceChartProps) {
  const isPositive = percentage >= 0;

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Performance',
        data: data,
        borderColor: isPositive ? '#10B981' : '#F43F5E',
        backgroundColor: isPositive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(244, 63, 94, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const, // Use const assertion to fix the type error
        intersect: false,
        backgroundColor: '#1F2937',
        titleFont: {
          size: 13,
        },
        bodyFont: {
          size: 12,
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        beginAtZero: false,
      },
    },
  };

  return (
    <Card className={cn("overflow-hidden border-border", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{title}</CardTitle>
          <div className={cn(
            "text-lg font-bold",
            isPositive ? "text-octo-green" : "text-rose-500"
          )}>
            {isPositive ? "+" : ""}{percentage.toFixed(2)}%
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-32">
          <Line data={chartData} options={chartOptions} />
        </div>
      </CardContent>
    </Card>
  );
}
