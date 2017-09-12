// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var vm;
var structure;
$(document).on('turbolinks:load', function() {

  if ($('#app-7').length) {

    vm = new Vue({
      el: '#app-7',
      data: gon,
      methods: {
        toggleLight: function () {
          this.display_light = !this.display_light;
        }
      }

    });

  }

});
