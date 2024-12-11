<script setup lang="ts">
import CoinConverter from "@/components/CoinConverter.vue";
import HistoricalChart from "@/components/HistoricalChart.vue";
import ChartComponent from "@/components/ChartComponent.vue";
</script>

<template>
  <main>
    <div>
      <HistoricalChart coinId="bitcoin" :days="30" />
    </div>
    <CoinConverter />
    <ChartComponent />
  </main>
</template>

<style scoped>
main {
  flex: 1;
  display: grid;
  width: 100%;
  padding: 0;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: var(--gap);
}

div {
  flex: 1;
  width: 100%;
  padding: var(--padding);
  border-radius: var(--border-radius);
  background: var(--color-background-soft);
}

main *:last-child {
  grid-column: 1;
}

@media only screen and (min-width: 490px) {
  main {
    padding: var(--padding);
  }
}

@media only screen and (min-width: 769px) {
  main {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  main *:last-child {
    grid-column: 1/3;
  }
}
</style>
