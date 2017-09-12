//= require vue
//= require jquery
//= require todo-list
//= require todo-item
describe("TodoItem", function() {

  var sut;
  var message = {text:'word'}

  beforeEach(function() {

    MagicLamp.load('shared/c-todo-item');

    var Constructor = Vue.extend(TodoItem);
    sut = new Constructor({
      propsData: {
        todo: message,
      },
      data: {called_toggled_light : false},
      methods: {
        toggleLight: function () {
          this.called_toggled_light = true;
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

  it("Should be able to reverse the given word, and toggle light", function(done) {
    // Given
    expect(sut.todo.text).toEqual('word');
    expect($(sut.$el).find('li').text()).toEqual('word');
    expect(sut.called_toggled_light).toEqual(false);

    //When
    sut.reverseMessage();

    // Then
    expect(sut.todo.text).toEqual('drow');
    expect(sut.called_toggled_light).toEqual(true);
    
    // read https://vuejs.org/v2/guide/unit-testing.html#Asserting-Asynchronous-Updates
    Vue.nextTick(function() {
      expect($(sut.$el).find('li').text()).toEqual('drow');
      done();
    });

  });
});
