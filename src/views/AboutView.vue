<template>
  <div class="about">
    <h1>ABOUT</h1>
    <button @click="counterStore.increaseCount()" class="counter-button">
      {{ counterStore.count }}
    </button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
</script>

<style scoped>
.about {
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.counter-button {
  font-size: 50px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.counter-button:hover {
  background-color: #218838;
}
</style>
