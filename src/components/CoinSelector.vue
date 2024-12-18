<script setup lang="ts">
import { ref, watch, onMounted, computed } from "vue";
import { CoinGeckoApi } from "@/services/CoinGeckoApi";
import type Coin from "@/types/Coin";

const selectedCrypto = ref("");
const searchQuery = ref("");
const cryptos = ref<Array<Coin>>([]);

// Define emit events for parent component communication
const emit = defineEmits<{
  (e: "selectedCrypto", coinId: string | null): void;
}>();

// Computed property to handle selectedCrypto changes
watch(selectedCrypto, async () => {
  searchQuery.value = selectedCrypto.value;

  const selectedCoinId = selectedCrypto.value.split(" (")[0];

  const foundCoin = cryptos.value.find(
    (crypto) => crypto.id === selectedCoinId
  );

  emit("selectedCrypto", foundCoin ? foundCoin.id : null);
});

// Computed property for filtered and sorted cryptocurrencies
const filteredCryptos = computed(() => {
  if (!searchQuery.value) return cryptos.value;

  const query = searchQuery.value.toLowerCase();

  return filterData(query, cryptos.value);
});

// Function to fetch cryptocurrency list from Services
const filterData = (query: string, cryptos: Array<Coin>) => {
  return cryptos.filter((crypto) => {
    return (
      crypto.id.toLowerCase().includes(query) ||
      crypto.symbol.toLowerCase().includes(query)
    );
  });
};

// Function to fetch cryptocurrency list from Services
const fetchCryptoList = async () => {
  cryptos.value = await CoinGeckoApi.getCoinsList();
};

// Fetch cryptocurrency list when component is mounted
onMounted(() => {
  fetchCryptoList();
});
</script>

<template>
  <div>
    <input
      @focus="selectedCrypto = ''"
      type="text"
      list="crypto-select"
      v-model="selectedCrypto"
      placeholder="Select a Crypto"
    />
    <datalist id="crypto-select">
      <option value="" disabled>Select cryptocurrency...</option>
      <option
        v-for="crypto in filteredCryptos"
        :key="crypto.id"
        :value="crypto.id + ' (' + crypto.symbol.toUpperCase() + ')'"
      />
    </datalist>
  </div>
</template>

<style scoped>
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

datalist {
  display: none;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1000;
}

option {
  padding: 10px;
  cursor: pointer;
}
</style>
