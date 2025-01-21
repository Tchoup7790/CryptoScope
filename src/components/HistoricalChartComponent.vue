<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartCanvas = ref(null)

onMounted(() => {
  chartInstance = new Chart(chartCanvas.value, {
    type: 'bar', // Change this to the type of chart you want
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  })
})
</script>

<style scoped>
canvas {
  max-width: 100%;
}
</style>
