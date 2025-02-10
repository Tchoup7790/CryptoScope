<template>
  <!-- Main container for the coin input -->
  <div v-if="state.coin" class="coin-card">
    <!-- Coin details section -->
    <div class="coin-details">
      <div class="coin-informations">
        <img :src="state.coin.image.small" alt="coin" class="coin-image" />
        <h3>{{ state.coin.name || 'Unknown' }}</h3>
      </div>
      <!-- Display the value in USD -->
      <p class="small">{{ state.coin.market_data.current_price.usd.toFixed(2) || '0.00' }}$</p>
    </div>
    <!-- Coin value input section -->
    <div class="coin-value">
      <input
        type="number"
        min="1"
        max="99"
        aria-controls="none"
        inputmode="numeric"
        pattern="/d+"
        v-model="inputValue"
        @input="updateValue"
      />
      <h2>{{ state.coin.symbol || 'N/A' }}</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { useCoinStore } from '@/stores/coin.store'
import type { Coin } from '@/models/interfaces/coin'

// Define props
const props = defineProps<{
  coinId: string
}>()

// Access the coin store
const coinStore = useCoinStore()

// Define the state interface
interface CoinInputState {
  coin: Coin | null
}

// Initialize the state
const state: CoinInputState = reactive({
  coin: coinStore.getCoinById(props.coinId) || null,
})
// Define emits
const emit = defineEmits<{
  (e: 'update:value', value: number): void
}>()

// Initialize the input value
const inputValue = ref<number>(0)

// Method to update the value and emit the event
const updateValue = () => {
  if (inputValue.value.toString().length > 6) {
    inputValue.value = parseFloat(inputValue.value.toString().slice(0, 6))
  }
  if (state.coin) {
    emit('update:value', inputValue.value * state.coin.market_data.current_price.usd)
  }
}

// Watch for changes in the prop value and update the input value
watch(
  () => props.coinId,
  ([coinId]) => {
    state.coin = coinStore.getCoinById(coinId) || null
  },
)
</script>
