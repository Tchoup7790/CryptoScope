<script setup lang="ts">
import CoinSelector from "./CoinSelector.vue";
import { ref } from "vue";
import type Coin from "@/types/Coin";
import { CoinGeckoApi } from "@/services/CoinGeckoApi";

const selectedFromCoin = ref<Coin | null>(null);
const selectedToCoin = ref<Coin | null>(null);

const handleFromCoinSelected = async (coinId: string | null) => {
  selectedFromCoin.value = coinId
    ? await CoinGeckoApi.getCoinById(coinId)
    : null;
};
const handleToCoinSelected = async (coinId: string | null) => {
  selectedToCoin.value = coinId ? await CoinGeckoApi.getCoinById(coinId) : null;
};

const sellAmount = 33;
</script>
<template>
  <form>
    <h2>Balance</h2>
    <article>
      <div>
        <img
          v-if="selectedFromCoin"
          :src="selectedFromCoin?.image.large"
          :alt="selectedFromCoin?.id + ' image'"
        />
        <section>
          <p>{{ selectedFromCoin?.symbol }}</p>
          <CoinSelector @selected-crypto="handleFromCoinSelected" />
        </section>
      </div>
      <p>{{ sellAmount }}$</p>
    </article>
    <article>
      <div>
        <img
          v-if="selectedToCoin"
          :src="selectedToCoin.image.large"
          :alt="selectedToCoin.id + ' image'"
        />
        <section>
          <p>{{ selectedToCoin?.symbol }}</p>
          <CoinSelector @coin-selected="handleToCoinSelected" />
        </section>
      </div>
      <p>{{ sellAmount }}$</p>
    </article>
  </form>
</template>

<style scoped>
form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  border-radius: var(--border-radius);
  background: var(--gradient);
  padding: var(--padding-small);
}

article {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--border-radius-inner);
  padding: var(--padding-small);
  background: var(--color-background-soft);
}

div {
  display: flex;
}

section {
  display: flex;
  flex-direction: column;
}

h2 {
  font-weight: bolder;
  font-size: 1.5rem;
}

img {
  height: 5%;
  width: 5%;
}

select {
  height: 100%;
  border-radius: var(--border-radius);
  font-size: 1rem;
  background: transparent;
  border: none;
}

p {
  font-size: 1.2rem;
}

@media (min-width: 768px) {
  form {
    padding: var(--padding);
  }
}
</style>
