<script setup lang="ts">
import CoinConverter from "@/components/CoinConverter.vue";
import ChartComponent from "@/components/ChartComponent.vue";
</script>

<template>
  <main>
    <div>
      <ChartComponent />
      <CoinConverter />
    </div>
    <ChartComponent />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  padding: var(--gap);
  margin: 0;
  border-radius: var(--border-radius);
  height: 100vh;
  width: 100vw;
}

div {
  width: 100%;
  flex: 2;
  display: flex;
  gap: var(--gap);
  flex-direction: column;
  min-height: 0;
}

@media (min-width: 768px) {
  main {
    padding: var(--padding);
    gap: var(--padding);
  }
  div {
    flex-direction: row;
    gap: var(--padding);
    flex: 1;
  }

  .lastBox {
    grid-column: 1 / 3;
  }
}
</style>
