// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('turbolinks:load', function() {

  var app7 = new Vue({
    el: '#app-7',
    data: {
      grocerylist: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever' }
      ]
    }
  })

});
