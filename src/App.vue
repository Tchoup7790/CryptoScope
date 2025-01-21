<template>
  <h1>CryptoScope</h1>
  <div class="card-parser">
    <div class="card-parser">
      <chart-component />
      <coin-converter-component />
    </div>
    <chart-component />
  </div>
</template>

<script setup lang="ts">
import CoinConverterComponent from '@/components/CoinConverterComponent.vue'
import ChartComponent from '@/components/ChartComponent.vue';

console.log('Hello World!')
</script>

<style scoped>
.card-parser {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: var(--padding-medium);
}

@media screen and (min-width: 768px) {
  .card-parser:first-child {
    flex-direction: row;
  }

  .card-parser {
    gap: var(--padding-large);
  }
}
</style>
