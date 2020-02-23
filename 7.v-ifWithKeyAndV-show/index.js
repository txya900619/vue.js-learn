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
appShow = new Vue({
  el: "#appShow",
  data: {
    show: true
  },
  methods: {
    change() {
      this.show = !this.show;
    }
  }
});
