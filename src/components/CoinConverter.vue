<script setup lang="ts">
import { ref } from "vue";
const sellCurrency = ref("ETH");
const buyCurrency = ref("BTC");
const sellAmount = ref(32.5);
</script>
<template>
  <form>
    <h2>Swap</h2>
    <article>
      <div>
        <img src="/test.jpeg" alt="test" />
        <section>
          <label for="sell">{{ sellCurrency }}</label>
          <select v-model="sellCurrency">
            <option value="ETH">Ethereum (ETH)</option>
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="USDT">Tether (USDT)</option>
          </select>
        </section>
      </div>
      <p>{{ sellAmount }}$</p>
    </article>
    <article>
      <div>
        <img src="/test.jpeg" alt="test" />
        <section>
          <label for="buy">You Buy</label>
          <select v-model="buyCurrency">
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="USDT">Tether (USDT)</option>
          </select>
        </section>
      </div>
      <p>{{ sellAmount }}$</p>
    </article>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 45vh;
  min-width: 30vh;
  justify-content: space-between;
  padding: var(--padding);
  border-radius: var(--border-radius);
  background: var(--gradient);
}

article {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

div {
  display: flex;
  gap: var(--padding-small);
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
</style>
