<template>
  <select v-model="selectedCoin" @change="emitSelectedCoin">
    <option v-for="coin in coinStore.coinList" :key="coin" :value="coin">
      {{ coin }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCoinStore } from '@/stores/coin.store'

const coinStore = useCoinStore()
const selectedCoin = ref(coinStore.coinList[0]) // Initialize with the first coin

const emit = defineEmits(['coin-selected'])

const emitSelectedCoin = () => {
  emit('coin-selected', selectedCoin.value)
}
</script>
