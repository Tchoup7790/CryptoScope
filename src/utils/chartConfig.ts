import type { TooltipItem } from "chart.js";

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  datasets: {
    line: {
      borderColor: "rgba(21, 52, 223, 1)",
      backgroundColor: "rgba(21, 52, 223, 0.2)",
      pointBorderColor: "rgba(255, 255, 255, 1)",
      pointBackgroundColor: "rgba(255, 255, 255, 1)",
      borderWidth: 3,
      pointRadius: 2,
      pointHoverRadius: 5,
      tension: 0.4,
      fill: true,
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: function (tooltipItem: TooltipItem<"line">) {
          const value = tooltipItem.raw as number;
          return `$${value.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`;
        },
      },
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      titleFont: { size: 14 },
      bodyFont: { size: 12 },
      displayColors: false,
    },
  },
  scale: {
    x: {
      grid: { display: false },
      border: { display: false },
      ticks: {
        color: "rgba(255, 255, 255, 0.8)",
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
        color: "rgba(255, 255, 255, 0.8)",
        font: {
          size: 12,
        },
        padding: 15,
        callback: (value: number) =>
          `$${value.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}`,
      },
    },
  },
};
