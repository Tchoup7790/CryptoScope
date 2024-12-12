<script setup lang="ts">
import HistoricalChart from "@/components/HistoricalChart.vue";
import { ref } from "vue";

// Create ref for handle the time range (time is in days)
const timeRange = ref(3);

// Function to handle the time range
const handleTimeRange = (time: number) => {
  timeRange.value = time;
};
</script>
<template>
  <article>
    <section>
      <h3>Bitcoin</h3>
      <ul>
        <li><button @click="handleTimeRange(3)">3D</button></li>
        <li><button @click="handleTimeRange(7)">1W</button></li>
        <li><button @click="handleTimeRange(30)">1M</button></li>
        <li><button @click="handleTimeRange(90)">3M</button></li>
        <li><button @click="handleTimeRange(180)">6M</button></li>
        <li><button @click="handleTimeRange(364)">1Y</button></li>
      </ul>
    </section>
    <HistoricalChart coinId="bitcoin" :days="timeRange" />
  </article>
</template>
<style scoped>
article {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  background: var(--color-background-soft);
  padding: var(--padding-small);
  min-height: 0;
}

section {
  display: flex;
  justify-content: space-between;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

button {
  cursor: pointer;
}

@media (min-width: 768px) {
  article {
    padding: var(--padding);
  }
}
</style>
