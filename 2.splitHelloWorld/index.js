var app = new Vue({
  el: "#app",
  data: {
    message: "Hello World!"
  }
});
var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString()
  }
});
var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true
  }
});
var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [{ text: "ola ola" }, { text: "ko no dio da" }, { text: "na ni" }]
  }
});
var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js!"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split(" ")
        .reverse()
        .join(" ");
    }
  }
});
var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "O la O la"
  }
});

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{todo.text}}</li>"
});
var app7 = new Vue({
  el: "#app-7",
  data: {
    todolist: [
      { id: 0, text: "aaaaaaaaa" },
      { id: 2, text: "naniiiiiiii" },
      { id: 1, text: "olololololololo" }
    ]
  }
});
