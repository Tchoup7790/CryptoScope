<template>
  <!-- Main container for the coin input -->
  <div class="coin-card">
    <!-- Coin details section -->
    <div class="coin-details">
      <div class="coin-informations">
        <img :src="coin" alt="coin" class="coin-image" />
        <h3>{{ state.coin.name }}</h3>
      </div>
      <!-- Display the value in USD -->
      <p>{{ state.coin.price.toFixed(2) }}$</p>
    </div>
    <!-- Coin value input section -->
    <div class="coin-value">
      <input type="number" min="1" max="99" aria-controls="none" inputmode="numeric" pattern="/d+" v-model="inputValue"
        @input="updateValue" />
      <h2>{{ state.coin.symbol }}</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import coin from '@/assets/coin.jpeg'
import type { Coin } from '@/models/interfaces/coin'

// Define the state interface
interface CoinCardState {
  coin: Coin
}

// Initialize the state
const state: CoinCardState = reactive({
  coin: {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    price: 106109.71,
    image: {
      thumb: 'string',
      small: 'string',
      large: 'string',
    },
  },
})

// Define emits
const emit = defineEmits<{
  (e: 'update:value', value: number): void
}>()

// Initialize the input value
const inputValue = ref<number>(0)

// Method to update the value and emit the event
const updateValue = () => {
  // iflenght is more than 6, keep the first 6 digits
  if (inputValue.value.toString().length > 6) {
    inputValue.value = parseFloat(inputValue.value.toString().slice(0, 6))
  }
  emit('update:value', inputValue.value * state.coin.price)
}
</script>
