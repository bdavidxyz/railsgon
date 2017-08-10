// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('turbolinks:load', function() {

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

  Vue.component('todo-list', {
    props: ['eee'],
    template: '<div><todo-item' +
                ' v-for="item in eee"' +
                ' v-bind:todo="item"' +
                ' v-bind:key="item.id">' +
              ' </todo-item></div>'
  });

  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  })

});
