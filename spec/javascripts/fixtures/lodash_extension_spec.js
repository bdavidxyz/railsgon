//= require lodash
//= require lodash-extension
describe("Lodash extension", function() {

  it("Launches, with version 4.17.4", function() {
    expect(_).toBeDefined();
    expect(_.VERSION).toEqual('4.17.4')
  });

  it("_.isDictionary", function() {
    expect(_.isDictionary).toBeDefined();
    expect(_.isDictionary({})).                toEqual(true);
    expect(_.isDictionary({abc:123, def:456})).toEqual(true);
    expect(_.isDictionary([])).                toEqual(false);
    expect(_.isDictionary([123, 456])).        toEqual(false);
    expect(_.isDictionary(null)).              toEqual(false);
    expect(_.isDictionary(NaN)).               toEqual(false);
    expect(_.isDictionary('hello')).           toEqual(false);
    expect(_.isDictionary(0)).                 toEqual(false);
    expect(_.isDictionary(123)).               toEqual(false);
  });

  // it("_.isArrayEqual", function() {
  //   expect(_.isArrayEqual).toBeDefined();
  //   expect(_.isArrayEqual([], [])).            toEqual(true);
  //   expect(_.isDictionary(['a', 'b'], ['a', 'b'])).toEqual(true);
  // });


});
