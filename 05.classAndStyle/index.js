app = new Vue({
  el: "#app",
  data: {
    isRed: true,
    isBig: true,
    isBigger: false,
    classObject: {
      red: true,
      big: false
    },
    backgroundColor: "yellow",
    fontSize: 25,
    styleObject: {
      backgroundColor: "blue",
      fountSize: 18
    }
  },
  computed: {
    computedClassObject() {
      return {
        red: this.isRed,
        big: this.isBig && !this.isBigger,
        bigger: this.isBigger
      };
    }
  },
  methods: {
    Bigger() {
      this.isBigger = true;
    }
  }
});
