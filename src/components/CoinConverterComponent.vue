<template>
  <!-- Main container for the converter -->
  <article>
    <!-- Input component for entering Bitcoin amount -->
    <coin-input-component @update:value="handleGetValue" />
    <!-- Output component for displaying converted Ethereum amount -->
    <coin-output-component :value="state.value" />
  </article>
</template>

<script setup lang="ts">
import CoinInputComponent from "@/components/CoinInputComponent.vue";
import CoinOutputComponent from "@/components/CoinOutputComponent.vue";
import { reactive } from "vue";

// Define the state interface
interface CoinConverterState {
  value: number
}

// Initialize the state
const state: CoinConverterState = reactive({
  value: 0
})

// Function to handle the updated value from the input component
function handleGetValue(value: number) {
  state.value = value
}
</script>
