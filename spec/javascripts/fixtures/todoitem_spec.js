//= require vue
//= require jquery
//= require todo-list
//= require todo-item
describe("TodoItem", function() {

  var sut;
  var message = {text:'word'}

  beforeEach(function() {

    var Constructor = Vue.extend(TodoItem);
    sut = new Constructor({
      propsData: {
        todo: message,
      },
      data: {display_light : 'blabladisplay'} ,
      methods: {
        toggleLight: function () {
          this.display_light = 'toggled'
        }
      }
    }).$mount();
  });

  it("Exists", function() {
    expect(TodoItem).toBeDefined();
  });

  it("Should render a todo-item", function() {
    expect($(sut.$el).hasClass( 'todo-item' )).toBe(true);
  });

  it("Should render the given word", function() {
    expect($(sut.$el).find('li').text()).toEqual('word');
  });

  it("Should be able to reverse the given word", function(done) {
    // Given
    expect(sut.todo.text).toEqual('word');
    expect($(sut.$el).find('li').text()).toEqual('word');

    //When
    sut.reverseMessage();

    // Then
    expect(sut.todo.text).toEqual('drow');
    
    // read https://vuejs.org/v2/guide/unit-testing.html#Asserting-Asynchronous-Updates
    Vue.nextTick(function() {
      expect($(sut.$el).find('li').text()).toEqual('drow');
      done();
    });

  });
});
