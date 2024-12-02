<script setup lang="ts">
import { CoinGeckoDao } from "@/data/CoinGeckoDao.ts";
const dao = new CoinGeckoDao()
dao.ping()
dao.getCoinsList()
</script>

<template>
  <header>
  </header>

  <main>
  </main>
</template>

<style scoped></style>
