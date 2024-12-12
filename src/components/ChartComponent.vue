<script setup lang="ts">
import HistoricalChart from "@/components/HistoricalChart.vue";
import { ref } from "vue";

// Prop for style
const props = defineProps({
  last: {
    type: Boolean,
    required: true,
  },
});

// Create ref for handle the time range (time is in days)
const timeRange = ref(3);

// Function to handle the time range
const handleTimeRange = (time: number) => {
  timeRange.value = time;
};
</script>
<template>
  <div :style="props.last ? 'order: 2;flex: 1 0 100%;' : null">
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
  </div>
</template>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 45vh;
  width: 100%;
  padding: var(--padding);
  border-radius: var(--border-radius);
  background: var(--color-background-soft);
}

section {
  display: flex;
  padding: 0 var(--padding-small);
  justify-content: space-between;
}

ul {
  display: flex;
  list-style: none;
  gap: var(--gap);
}

button {
  cursor: pointer;
}
</style>
