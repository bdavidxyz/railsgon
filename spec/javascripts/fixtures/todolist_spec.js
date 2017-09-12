//= require vue
//= require jquery
//= require todo-list
//= require todo-item
describe("TodoList", function() {

  it("Exists", function() {
    expect(TodoList).toBeDefined();
  });
  it("Create as much item as given", function() {
    var Constructor = Vue.extend(TodoList);
    var comp = new Constructor({
      propsData: {
        eee: ['thetext', 'er']
      }
    }).$mount();
    expect(comp).toBeDefined();
    expect(comp.$el).toBeDefined();
    
    expect($(comp.$el).length).toEqual(1);
    expect($(comp.$el).find( ".todo-item" ).length).toEqual(2);
  });
});
