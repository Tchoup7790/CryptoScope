<template>
  <!-- Main container for the chart -->
  <article class="chart-card">
    <!-- Loading animation -->
    <l-jelly v-if="state.showLoading" size="60" speed="0.9" color="rgb(194, 222, 70)"></l-jelly>
    <!-- coin badge -->
    <div v-if="!state.showLoading" class="coin-badge-div">
      <div class="coin-badge center small">{{ props.coinId }}</div>
      <CoinTimeSelectorComponent @days-selected="updateChart" />
    </div>
    <!-- Line chart component -->
    <Line v-if="!state.showLoading && state.coinChart" :data="state.coinChart" :options="options" />
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
import { onMounted, watch, ref } from 'vue'
import { useCoinStore } from '@/stores/coin.store'
import CoinTimeSelectorComponent from './CoinTimeSelectorComponent.vue'
import type { Data } from '@/models/interfaces/data'
import DAYS from '@/models/enums/days'

// Access the coin store
const coinStore = useCoinStore()

// Define props
const props = defineProps({
  coinId: {
    type: String,
    required: true,
  },
})

// Define the state interface
interface ChartState {
  showLoading: boolean
  coinChart: Data | null
}

// Initialize the state
const state = ref<ChartState>({
  showLoading: true,
  coinChart: coinStore.coinsChart[props.coinId]
    ? coinStore.coinsChart[props.coinId][DAYS.WEEK]
    : null,
})

// Watch for changes in coinId prop
watch(
  () => props.coinId,
  (newCoinId) => {
    state.value.showLoading = true
    state.value.coinChart = coinStore.coinsChart[newCoinId]
      ? coinStore.coinsChart[newCoinId][DAYS.WEEK]
      : null
    state.value.showLoading = false
  },
  { immediate: true },
)

// Register the loading animation
jelly.register()

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// Lifecycle hook to simulate loading
onMounted(() => {
  // Simulate loading
  setTimeout(() => {
    state.value.showLoading = false
  }, 2000)
})

const updateChart = async (days: number) => {
  state.value.showLoading = true
  // Access chart data for the selected coin and time period
  state.value.coinChart = coinStore.coinsChart[props.coinId]
    ? coinStore.coinsChart[props.coinId][days]
    : null
  state.value.showLoading = false
}
</script>

<style scoped>
/* Styles for the chart container */
.chart-card {
  padding-top: var(--spacing-xl);
  background-color: var(--c-pine);
  border: var(--border-lemon);
  position: relative;
}

/* Style for the coin badge container */
.coin-badge-div {
  position: absolute;
  top: var(--spacing-s);
  right: var(--spacing-s);
  left: var(--spacing-s);
  gap: var(--spacing-xs);
  padding-bottom: var(-spacing-xs);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
