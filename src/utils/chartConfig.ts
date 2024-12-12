import type { ChartOptions, TooltipItem } from "chart.js";

export function options(large: boolean): ChartOptions<"line"> {
  return {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        borderColor: "rgba(21, 52, 223, 1)",
        borderWidth: 3,
        tension: 0.4,
      },
      point: {
        borderColor: "rgba(255, 255, 255, 1)",
        backgroundColor: "rgba(255, 255, 255, 1)",
        radius: large ? 3 : 0,
        hoverRadius: 5,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: TooltipItem<"line">) {
            const value = tooltipItem.raw as number;
            return `${value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}$`;
          },
        },
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          font: {
            size: 12,
          },
          padding: 15,
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        border: { display: false },
        ticks: {
          font: {
            size: 12,
          },
          padding: 15,
          callback: function (tickValue: number | string): string | null {
            if (typeof tickValue === "number") {
              return `${tickValue.toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}$`;
            }
            return null;
          },
        },
      },
    },
  };
}
