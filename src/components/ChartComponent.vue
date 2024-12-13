<script setup lang="ts">
import HistoricalChart from "@/components/HistoricalChart.vue";
import { ref } from "vue";

// Define props for the chart
const props = defineProps({
  coins: {
    type: Array<string>,
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
  <article>
    <section>
      <h2>Bitcoin, Ethereum, DogeCoin</h2>
      <ul>
        <li>
          <button @click="handleTimeRange(3)" :disabled="timeRange == 3">
            3D
          </button>
        </li>
        <li>
          <button @click="handleTimeRange(7)" :disabled="timeRange == 7">
            1W
          </button>
        </li>
        <li>
          <button @click="handleTimeRange(30)" :disabled="timeRange == 30">
            1M
          </button>
        </li>
        <li>
          <button @click="handleTimeRange(90)" :disabled="timeRange == 90">
            3M
          </button>
        </li>
        <li>
          <button @click="handleTimeRange(180)" :disabled="timeRange == 180">
            6M
          </button>
        </li>
        <li>
          <button @click="handleTimeRange(364)" :disabled="timeRange == 364">
            1Y
          </button>
        </li>
      </ul>
    </section>
    <HistoricalChart :coinIds="props.coins" :days="timeRange" />
  </article>
</template>
<style scoped>
article {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  background: var(--color-background-soft);
  padding: var(--padding) var(--padding-small);
  min-height: 0;
}

section {
  display: flex;
  justify-content: space-between;
}

ul {
  display: flex;
  list-style: none;
  gap: 0.2rem;
  padding: 0;
  margin: 0;
}

button {
  cursor: pointer;
  background-color: var(--color-text-soft);
  color: var(--color-secondary);
  border: none;
  border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;
  opacity: 0.8;
  transition: opacity 0.4s;
}

button:disabled {
  opacity: 0.4;
  cursor: default;
}

button:disabled:hover {
  opacity: 0.4;
}

button:hover {
  opacity: 1;
}

@media (min-width: 768px) {
  article {
    padding: var(--padding);
  }
}
</style>
