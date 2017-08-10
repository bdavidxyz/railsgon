Vue.component('todo-list', {
  props: ['eee'],
  template: '<div><todo-item' +
              ' v-for="item in eee"' +
              ' v-bind:todo="item"' +
              ' v-bind:key="item.id">' +
            ' </todo-item></div>'
});
