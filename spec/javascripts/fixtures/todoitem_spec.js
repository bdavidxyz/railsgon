//= require vue
//= require jquery
//= require todo-list
//= require todo-item
describe("TodoItem", function() {

  var sut;

  beforeEach(function() {
    var Constructor = Vue.extend(TodoItem);
    sut = new Constructor({
      propsData: {
        todo: {text:'word'}
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
});
