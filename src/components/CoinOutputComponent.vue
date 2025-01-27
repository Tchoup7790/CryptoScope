<template>
  <!-- Main container for the coin output -->
  <div class="coin-card">
    <!-- Coin details section -->
    <div v-if="state.coin" class="coin-details">
      <div class="coin-informations">
        <img :src="state.coin.image.small" alt="coin" class="coin-image" />
        <h3>{{ state.coin.name || 'Unknown' }}</h3>
      </div>
      <!-- Display the converted value in USD -->
      <p class="small">{{ state.coin.market_data.current_price.usd.toFixed(2) || '0.00' }}$</p>
    </div>
    <!-- Coin value section -->
    <div v-if="state.coin" class="coin-value">
      <h2>{{ state.value.toFixed(2) }}</h2>
      <h2>{{ state.coin.symbol || 'N/A' }}</h2>
    </div>
    <l-jelly v-show="!state.coin" style="width: 100%;" size="60" speed="0.9" color="rgb(66, 98, 84)"></l-jelly>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue'
import type { Coin } from '@/models/interfaces/coin'
import { useCoinStore } from '@/stores/coin.store'

// Access the coin store
const coinStore = useCoinStore()

// Define the state interface
interface CoinInputState {
  coin: Coin | null
  value: number
}

// Initialize the state
const state: CoinInputState = reactive({
  value: 0,
  coin: coinStore.coins.find((coin) => coin.id === props.coinId) || null
})

// Define props
const props = defineProps<{
  value: number
  coinId: string
}>()

// Watch for changes in the props value and coinId
watch([() => props.value, () => props.coinId], ([value, coinId]) => {
  state.value = value
  state.coin = coinStore.coins.find((coin) => coin.id === coinId) || null
})

</script>
