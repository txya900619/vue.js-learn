Vue.component("todolist", {
  template:
    "\
  <li>\
    {{title}}\
    <button @click=\"$emit('rm')\">Remove</button>\
  </li>\
  ",
  props: ["title"]
});
app = new Vue({
  el: "#app",
  data: {
    newTodoText: "",
    todos: [
      {
        id: 1,
        title: "example"
      },
      { id: 2, title: "olaaaaa" }
    ],
    nextTodoId: 3
  },
  methods: {
    addTodo: function() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = "";
    }
  }
});
