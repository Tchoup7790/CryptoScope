<template>
  <!-- Main container for the coin output -->
  <div class="coin-card">
    <!-- Coin details section -->
    <div class="coin-details">
      <div class="coin-informations">
        <img :src="coin" alt="coin" class="coin-image" />
        <h3>{{ state.coin.name }}</h3>
      </div>
      <!-- Display the converted value in USD -->
      <p>{{ state.coin.price.toFixed(2) }}$</p>
    </div>
    <!-- Coin value section -->
    <div class="coin-value">
      <h2>{{ state.value.toFixed(2) }}</h2>
      <h2>{{ state.coin.symbol }}</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue'
import coin from '@/assets/coin.jpeg'
import type { Coin } from '@/models/interfaces/coin'

// Define the state interface
interface CoinInputState {
  coin: Coin
  value: number
}

// Initialize the state
const state: CoinInputState = reactive({
  coin: {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    price: 3206.56,
    image: {
      thumb: 'string',
      small: 'string',
      large: 'string',
    },
  },
  value: 0,
})

// Define props
const props = defineProps<{
  value: number
}>()

// Watch for changes in the prop value and update the state
watch(
  () => props.value,
  (newVal) => {
    state.value = parseFloat((newVal / state.coin.price).toFixed(2))
  },
)
</script>
