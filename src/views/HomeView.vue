<template>
  <div class="home">
    <Counter />
    <div class="buttons">
      <button class="button" @click="counterStore.decreaseCount()">-</button>
      <button class="button" @click="counterStore.increaseCount()">+</button>
    </div>

    <hr />
    <div class="status">This counter is: {{ counterStore.oddOrEven }}</div>

    <hr />

    <div class="edit-counter">
      <h3>Edit counter:</h3>
      <input v-model="counterStore.count" type="number" class="input" />
    </div>
  </div>
</template>

<script setup>
import Counter from "@/components/Counter.vue";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.buttons {
  margin: 20px 0;
}

.button {
  font-size: 24px;
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}

.status {
  font-size: 18px;
  margin: 20px 0;
}

.edit-counter {
  margin: 20px 0;
}

.input {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
