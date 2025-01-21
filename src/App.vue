<template>
  <h1>CrypoScope</h1>
  <div class="card-parser">
    <div class="card-parser">
      <chart-component />
      <card-component />
    </div>
    <chart-component />
  </div>
</template>

<script setup lang="ts">
import CardComponent from './components/CardComponent.vue'
import ChartComponent from './components/ChartComponent.vue';

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
