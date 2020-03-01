Vue.component("alert", {
  props: ["message"],
  template: `<div><button @click="alert">click me!</button>
  <p>{{message}}</p></div>`,
  methods: {
    alert() {
      alert(this.message);
    }
  }
});
Vue.component("alertplus", {
  template: `<button @click="alert">click me!</button>`,
  methods: {
    alert() {
      alert(this.$slots.default[0].text);
    }
  }
});
Vue.component("smaller", {
  props: ["message"],
  template: `<div><p>{{message}}</p>
  <button @click="$emit('smaller-font')">small!!!</button></div>`
});
app = new Vue({
  el: "#app",
  data: {
    FontSize: 10,
    messages: [
      { id: 1, text: "owo" },
      { id: 2, text: "ouo" },
      { id: 3, text: "oAo" }
    ]
  }
});
