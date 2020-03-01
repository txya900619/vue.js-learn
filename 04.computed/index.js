vm = new Vue({
  el: "#app",
  data: {
    message: "pudding"
  },
  computed: {
    reverseMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});
