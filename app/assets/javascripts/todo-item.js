// See https://vuejs.org/v2/guide/components.html#One-Way-Data-Flow
Vue.component('todo-item', {
  props: ['todo'],
  template: '<div>' +
              '<li>{{ text }}</li>' +
              '<button v-on:click="reverseMessage">Reverse Message</button>' +
            '</div>',
  methods: {
    reverseMessage: function () {
      this.text = this.text.split('').reverse().join('');
    }
  },
  data: function() {
    return {
      text: this.todo.text,
    };
  }
});
