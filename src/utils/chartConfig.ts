import type { TooltipItem } from "chart.js";

export const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  // labels: ["", "", "", "", "", "", ""],
  datasets: [
    {
      label: "test",
      data: [40, 32, 10, 47, 39, 80, 40],
      borderColor: "rgba(21, 52, 223, 1)",
      backgroundColor: "rgba(21, 52, 223, 0.2)",
      pointBorderColor: "rgba(255, 255, 255, 1)",
      pointBackgroundColor: "rgba(21, 52, 223, 1)",
      borderWidth: 3,
      pointRadius: 6,
      pointHoverRadius: 8,
      tension: 0.4,
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: function (tooltipItem: TooltipItem<"line">) {
          const value = tooltipItem.raw as number;
          return `$${value.toFixed(2)} (${value > 0 ? "+" : ""}${value}$)`;
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
        callback: (value: number) => `${value} $`,
      },
    },
  },
};
