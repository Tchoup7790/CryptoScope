<template>
  <h1>CrypoScope</h1>
  <div class="card-parser">
    <div class="card-parser">
      <card-component />
      <chart-component />
    </div>
    <card-component />
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
  gap: var(--padding-large);
}

.card-parser:last-child {
  flex-direction: column;
}
</style>
