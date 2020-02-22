app = new Vue({
  el: "#app",
  data: {
    changed: false
  },
  methods: {
    changeFirst() {
      this.changed = !this.changed;
    }
  }
});
appAddKey = new Vue({
  el: "#appAddKey",
  data: {
    changed: false
  },
  methods: {
    changeFirst() {
      this.changed = !this.changed;
    }
  }
});
