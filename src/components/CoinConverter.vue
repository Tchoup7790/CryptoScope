<script setup lang="ts">
import { ref } from "vue";
const sellCurrency = ref("ETH");
const buyCurrency = ref("BTC");
const sellAmount = ref(32.5);
</script>
<template>
  <form>
    <h2>Balance</h2>
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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--border-radius);
  background: var(--gradient);
  padding: var(--padding-small);
}

article {
  display: flex;
  width: 100%;
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
