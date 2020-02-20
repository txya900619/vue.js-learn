vm = new Vue({
  el: "#app",
  data: {
    message: "pudding"
  },
  computed: {
    reverseMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});
