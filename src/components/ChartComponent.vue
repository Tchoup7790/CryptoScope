<template>
  <article class="chart-card">
    <l-mirage size="70" speed="6" color="rgb(194, 222, 70)"></l-mirage>
    <Line v-show="false" :data="data" :options="options" />
  </article>
</template>

<script setup lang="ts">
import { data, options } from "@/utils/chart-config";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import { mirage } from 'ldrs'

mirage.register()

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);
</script>

<style scoped>
.chart-card {
  background-color: var(--c-pine);
  border: var(--border-lemon);
}
</style>
