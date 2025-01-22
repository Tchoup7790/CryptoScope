import type { ChartOptions, TooltipItem } from 'chart.js'

export const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
  ],
  datasets: [{ data: [23, 20, 20, 24, 29, 24, 20, 29, 24, 23] }],
}

export const options = (dot: boolean) => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    elements: {
      line: {
        borderColor: 'rgba(248, 249, 244, 1)',
        borderWidth: 3,
        tension: 0.3,
      },
      point: {
        borderColor: 'rgba(248, 249, 244,1)',
        backgroundColor: 'rgba(248, 249, 244, 1)',
        radius: dot ? 3 : 0,
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
}
