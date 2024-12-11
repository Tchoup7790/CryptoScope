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
      <p>{{ sellAmount }} $</p>
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
      <p>{{ sellAmount }} $</p>
    </article>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: start;
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
  padding: var(--padding);
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
  height: 5rem;
  width: 5rem;
}

select {
  height: 100%;
  border-radius: var(--border-radius);
  font-size: 1rem;
  background: transparent;
  border: none;
}

button {
  width: 100%;
  padding: var(--padding);
  color: white;
  border: none;
  background: transparent;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

p {
  font-size: 1.2rem;
}
</style>
