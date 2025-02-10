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
      <chart-component class="mobile" />
    </div>
    <!-- Another chart component -->
    <chart-component class="no-mobile" />
  </div>
</template>

<script setup lang="ts">
import CoinConverterComponent from '@/components/CoinConverterComponent.vue'
import ChartComponent from '@/components/ChartComponent.vue'
</script>

<style scoped>
.card-parser {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: var(--spacing-s);
}

.mobile {
  display: flex;
}

.no-mobile {
  display: none;
}

@media screen and (min-width: 769px) {
  .card-parser:first-child {
    flex-direction: row;
  }

  .no-mobile {
    display: flex;
  }

  .mobile {
    display: none;
  }
}

@media screen and (min-width: 1025px) {
  .card-parser {
    gap: var(--spacing-l);
  }
}
</style>
