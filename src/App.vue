<script setup lang="ts">
import { CoinGeckoApi } from "./services/CoinGeckoApi";

CoinGeckoApi.ping();
const coins = CoinGeckoApi.getCoinsList();
</script>

<template>
  <header></header>

  <main></main>
</template>

<style scoped></style>
