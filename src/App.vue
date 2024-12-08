<script setup lang="ts">
import { CoinGeckoApi } from "./services/CoinGeckoApi";

// if connexion succed, get CoinsList
// CoinGeckoApi.ping().then(() => {
//   CoinGeckoApi.getCoinsList();
// });
</script>

<template>
  <header>
    <h1>Welcome to CryptoScope</h1>
  </header>
  <main>
    <div></div>
    <div></div>
    <div></div>
  </main>
</template>

<style scoped>
header {
  background-color: var(--vt-c-blue);
  display: flex;
}

main {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

div {
  height: 100%;
  width: 100%;
  border-radius: 12px;
  background-color: var(--vt-c-purple);
}

main > *:last-child {
  grid-column: 1/3;
}
</style>
