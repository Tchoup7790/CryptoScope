<template>
  <!-- Main container for the chart -->
  <article class="chart-card">
    <!-- Loading animation -->
    <l-jelly v-if="state.showLoading" size="60" speed="0.9" color="rgb(194, 222, 70)"></l-jelly>
    <!-- coin badge -->
    <div v-else class="coin-badge center small">bitcoin</div>
    <!-- Line chart component -->
    <Line
      v-if="!state.showLoading && coinStore.coinsChart.length > 0"
      :data="coinStore.coinsChart[0]"
      :options="options"
    />
  </article>
</template>

<script setup lang="ts">
// Import necessary modules and components
import { options } from '@/utils/chart-config'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { jelly } from 'ldrs'
import { onMounted, reactive } from 'vue'
import { useCoinStore } from '@/stores/coin.store'

// Define the state interface
interface chartState {
  showLoading: boolean
}

// Initialize the state
const state: chartState = reactive({
  showLoading: true,
})

// Register the loading animation
jelly.register()

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// Access the coin store
const coinStore = useCoinStore()

// Lifecycle hook to simulate loading
onMounted(() => {
  // Simulate loading
  setTimeout(() => {
    state.showLoading = false
  }, 2000)
})
</script>

<style scoped>
/* Styles for the chart container */
.chart-card {
  padding-top: var(--spacing-xl);
  background-color: var(--c-pine);
  border: var(--border-lemon);
  position: relative;
}

/* Styles for the coin badge */
.coin-badge {
  position: absolute;
  top: var(--spacing-s);
  left: var(--spacing-s);
  padding: var(--spacing-xxs) var(--spacing-xs);
  background-color: var(--c-background);
  color: var(--c-black);
  border: var(--border-lemon);
  border-radius: var(--spacing-xs);
  font-family: 'Monoska';
}
</style>
