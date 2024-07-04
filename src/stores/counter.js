// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },

  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return "event";
      return "odd";
    }
  },

  actions: {
    increaseCount() {
      console.log('aqui');
      this.count++
    },

    decreaseCount() {
      console.log('aqui');

      this.count--

    },
  },


})