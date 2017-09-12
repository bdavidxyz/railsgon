var TodoLight = Vue.component('todo-light', {
  props: ['ison'],
  template: '<div class="todo-light">' + 
              '<div v-if="ison">' +
                'on' +
              '</div>' +
              '<div v-else>' +
                'off' +
              '</div>' +
            '</div>'
});
