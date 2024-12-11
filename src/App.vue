<script setup lang="ts">
import CoinConverter from "./components/CoinConverter.vue";
import ChartComponents from "./components/ChartComponents.vue";
// import { CoinGeckoApi } from "./services/CoinGeckoApi";

// if connexion succed, get CoinsList
// CoinGeckoApi.ping().then(() => {
//   CoinGeckoApi.getCoinsList();
// });
</script>

<template>
  <main>
    <ChartComponents />
    <CoinConverter />
    <ChartComponents />
  </main>
</template>

<style scoped>
main {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
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
  grid-column: 1/3;
}
</style>
