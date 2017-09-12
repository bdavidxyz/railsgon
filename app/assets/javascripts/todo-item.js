// See https://vuejs.org/v2/guide/components.html#One-Way-Data-Flow
var TodoItem = Vue.component('todo-item', {
  
  props: ['todo'],
  
  template: '#c-todo-item',
  
  methods: {
    reverseMessage: function () {
      this.todo.text = this.todo.text.split('').reverse().join('');
      this.$root.toggleLight();
    }
  }
  
});
