<template>
  <!-- Main title -->
  <h1>CryptoScope</h1>
  <!-- Container for the card parser -->
  <div class="card-parser">
    <div class="card-parser">
      <!-- Chart component -->
      <chart-component />
      <!-- Coin converter component -->
      <coin-converter-component />
    </div>
    <!-- Another chart component -->
    <chart-component />
  </div>
</template>

<script setup lang="ts">
import CoinConverterComponent from '@/components/CoinConverterComponent.vue'
import ChartComponent from '@/components/ChartComponent.vue';

// Log a message to the console
console.log('Hello World!')
</script>

<style scoped>
.card-parser {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: var(--spacing-s);
}

@media screen and (min-width: 768px) {
  .card-parser:first-child {
    flex-direction: row;
  }

  .card-parser {
    gap: var(--spacing-l);
  }
}
</style>
