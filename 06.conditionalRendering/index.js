app = new Vue({
  el: "#app",
  data: {
    showFirst: true,
    showSecond: true,
    showThird: 0
  },
  methods: {
    changeFirst() {
      this.showFirst = !this.showFirst;
    },
    changeSecond() {
      this.showSecond = !this.showSecond;
    },
    nextBro() {
      this.showThird++;
    }
  }
});
