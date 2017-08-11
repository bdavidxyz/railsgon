// See https://vuejs.org/v2/guide/components.html#One-Way-Data-Flow
var TodoItem = Vue.component('todo-item', {
  props: ['todo'],
  template: '<div class="todo-item">' +
              '<li>{{ todo.text }}</li>' +
              '<button v-on:click="reverseMessage">Reverse Message</button>' +
            '</div>',
  methods: {
    reverseMessage: function () {
      this.todo.text = this.todo.text.split('').reverse().join('');
    }
  }
});
