import type { TooltipItem } from 'chart.js'

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 2,
  elements: {
    line: {
      borderColor: 'rgba(248, 249, 244, 1)',
      borderWidth: 3,
      tension: 0.2,
    },
    point: {
      borderColor: 'rgba(248, 249, 244,1)',
      backgroundColor: 'rgba(248, 249, 244, 1)',
      radius: 1,
      hoverRadius: 5,
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        title: function (tooltipItems: TooltipItem<'line'>[]) {
          return tooltipItems[0].dataset.label || 'Price'
        },
        label: function (tooltipItem: TooltipItem<'line'>) {
          const value = tooltipItem.raw as number
          return [
            `${tooltipItem.label}`,
            `${value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}$`,
          ]
        },
      },
      backgroundColor: 'rgba(22, 23, 12, 1)',
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
        color: 'rgba(248, 249, 244, 1)',
        padding: 15,
      },
    },
    y: {
      grid: {
        color: 'rgba(124, 124, 124, 0.4)',
      },
      border: { display: false },
      ticks: {
        font: {
          size: 12,
        },
        color: 'rgba(248, 249, 244, 1)',
        callback: function (tickValue: number | string): string | null {
          if (typeof tickValue === 'number') {
            return `${tickValue.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}$`
          }
          return null
        },
      },
    },
  },
}
