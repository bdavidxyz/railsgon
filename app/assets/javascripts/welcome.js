// // Place all the behaviors and hooks related to the matching controller here.
// // All this logic will automatically be available in application.js.
// var vm;
// var structure;
// // $(document).on('turbolinks:load', function() {

// //   if ($('#app-7').length) {

// //     vm = new Vue({
// //       el: '#app-7',
// //       data: gon,
// //       methods: {
// //         toggleLight: function () {
// //           this.display_light = !this.display_light;
// //         }
// //       }

// //     });

// //   }

// // });

//   document.addEventListener('turbolinks:load', function() {
//     if ($('#app-7').length) {

//       // var vueapp = new Vue({
//       //   el: "#hello",
//       //   template: '<App/>',
//       //   mixins: [TurbolinksAdapter],
//       //   components: { App }
//       // });

//     vm = new Vue({
//       el: '#app-7',
//       data: function() {
//         return {
//           grocery_list: [{'id' : 0, 'text' : 'Vegetables'}, {'id' : 1, 'text' : 'Cheese'}, {'id' : 2, 'text' : 'Whatever'}, ],
//           display_light: false
//         }
//       },
//       mixins: [TurbolinksAdapter],
//       methods: {
//         toggleLight: function () {
//           this.display_light = !this.display_light;
//         }
//       }
//     });


//     }
//   })

$(document).on('turbolinks:load', function() {
   console.log('turbolinks loaded at ' + new Date());
   if ($('#app-7').length) {
    
    var vm = new Vue({
      el: '#app-7',
      data: function() {
        return {
          // grocery_list: the_grocery_list,
          grocery_list: [{'id' : 0, 'text' : 'Vegetables'}, {'id' : 1, 'text' : 'Cheese'}, {'id' : 2, 'text' : 'Whatever'}, ],
          display_light: false
        }
      },
      mixins: [TurbolinksAdapter],
      methods: {
        toggleLight: function () {
          this.display_light = !this.display_light;
        }
      }
    });
  }

});
