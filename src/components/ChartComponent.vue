<template>
  <!-- Main container for the chart -->
  <article class="chart-card">
    <!-- Loading animation -->
    <l-mirage v-show="state.showLoading" size="70" speed="6" color="rgb(194, 222, 70)"></l-mirage>
    <!-- coin badge -->
    <div v-if="!state.showLoading" class="coin-badge small">
      coin badge
    </div>
    <!-- Line chart component -->
    <Line v-if="!state.showLoading" :data="data" :options="options(true)" />
  </article>
</template>

<script setup lang="ts">
import { data, options } from '@/utils/chart-config'
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
import { mirage } from 'ldrs'
import { onMounted, reactive } from 'vue'

// state
interface chartState {
  showLoading: boolean
}

const state: chartState = reactive({
  showLoading: true,
})


// Register the loading animation
mirage.register()

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

onMounted(() => {
  // Simulate loading
  setTimeout(() => {
    state.showLoading = false
  }, 2000)

})
</script>

<style scoped>
.chart-card {
  padding-top: var(--spacing-xl);
  background-color: var(--c-pine);
  border: var(--border-lemon);
  position: relative;
}

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
