<script setup lang="ts">
import CoinConverter from "@/components/CoinConverter.vue";
import ChartComponent from "@/components/ChartComponent.vue";
</script>

<template>
  <main>
    <ChartComponent :last="false" />
    <CoinConverter />
    <ChartComponent :last="true" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--gap);
  margin: 0;
  padding: var(--gap);
  border-radius: var(--border-radius);
  height: 100vh;
  width: 100%;
}
@media (min-width: 768px) {
  main {
    padding: var(--padding);
    gap: var(--padding);
  }
}
</style>
