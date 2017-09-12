//= require lodash
//= require lodash-extension
describe("Lodash extension", function() {

  var object1 = {
    'name': 'foo',
    'id': 123,
    'items' : ['bar', 'baz'],
    'test': {
      'number': 1
    }
  };

  var object2 = {
    'name': 'bar',
    'items' : ['bar', 'asdad'],
    'id': 234,
    'test': {
      'numbers': 2
    }
  };

  var object3 = {
    'test': {
      'number': 2
    },   
    'name': 'bar',
    'items' : ['bu', 'bo'],
    'id': 2344,
  };

  var object4 = {
    'test': {
      'number': 2,
      'stuff': 'thing'
    },   
    'name': 'bar',
    'items' : ['bu', 'bo'],
    'id': 2344,
  };

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

  it("_.isArrayEqual", function() {
    expect(_.isArrayEqual).toBeDefined();
    expect(_.isArrayEqual([], [])).toEqual(true);
    expect(_.isArrayEqual(['a', 'b'], ['a', 'b'])).toEqual(true);
    expect(_.isArrayEqual(['b', 'a'], ['a', 'b'])).toEqual(true);
    expect(_.isArrayEqual(['b', 'a', 'z' , 'f'], ['f', 'a' ,'z', 'b'])).toEqual(true);
    expect(_.isArrayEqual()).toEqual(false);
    expect(_.isArrayEqual(null, null)).toEqual(false);
    expect(_.isArrayEqual(new Date(), new RegExp())).toEqual(false);
    expect(_.isArrayEqual([], ['b'])).toEqual(false);
    expect(_.isArrayEqual(['a', 'b', 'c'], ['a', 'b'])).toEqual(false);
  });

  describe("_.hasSameJsonKeys", function() {
    it ("Should be defined", function() {
      expect(_.hasSameJsonKeys).toBeDefined();
    });
    it ("Should ({}, {}) === true ", function() {
      expect(_.hasSameJsonKeys({}, {})).toEqual(true);
    });
    it ("Should ({a:12}, {a:'e'}) === true ", function() {
      expect(_.hasSameJsonKeys({}, {})).toEqual(true);
    });
    it ("Should (object1, object3) === true ", function() {
      expect(_.hasSameJsonKeys(object1, object3)).toEqual(true);
    });
    it ("Should (object3, object1) === true ", function() {
      expect(_.hasSameJsonKeys(object3, object1)).toEqual(true);
    });
    it ("Should (object3, object3) === true ", function() {
      expect(_.hasSameJsonKeys(object3, object3)).toEqual(true);
    });
    var theDate = new Date();
    it ("Should (theDate, theDate) === false ", function() {
      expect(_.hasSameJsonKeys(theDate, theDate)).toEqual(false);
    });
    it ("Should (/^/, /^/) === false ", function() {
      expect(_.hasSameJsonKeys(/^/, /^/)).toEqual(false);
    });
    it ("Should (null, null) === false ", function() {
      expect(_.hasSameJsonKeys(null, null)).toEqual(false);
    });
    it ("Should (undefined, undefined) === false ", function() {
      expect(_.hasSameJsonKeys(null, null)).toEqual(false);
    });
    it ("Should (null, {}) === false ", function() {
      expect(_.hasSameJsonKeys(null, {})).toEqual(false);
    });
    it ("Should ({a:12}, {b:12}) === false ", function() {
      expect(_.hasSameJsonKeys({a:12}, {b:12})).toEqual(false);
    });
    it ("Should ({a:12}, {b:'e'}) === false ", function() {
      expect(_.hasSameJsonKeys({a:12}, {b:'e'})).toEqual(false);
    });
    it ("Should (object1, object2) === false ", function() {
      expect(_.hasSameJsonKeys(object1, object2)).toEqual(false);
    });
    it ("Should (object2, object1) === false ", function() {
      expect(_.hasSameJsonKeys(object2, object1)).toEqual(false);
    });
    it ("Should (object1, object4) === false ", function() {
      expect(_.hasSameJsonKeys(object1, object4)).toEqual(false);
    });
    it ("Should (object2, object4) === false ", function() {
      expect(_.hasSameJsonKeys(object2, object4)).toEqual(false);
    });
    it ("Should (object3, object4) === false ", function() {
      expect(_.hasSameJsonKeys(object3, object4)).toEqual(false);
    });
    it ("Should (object4, object1) === false ", function() {
      expect(_.hasSameJsonKeys(object4, object1)).toEqual(false);
    });
    it ("Should (object4, object2) === false ", function() {
      expect(_.hasSameJsonKeys(object4, object2)).toEqual(false);
    });
    it ("Should (object4, object3) === false ", function() {
      expect(_.hasSameJsonKeys(object4, object3)).toEqual(false);
    });
    it ("Should (object2, object3) === false ", function() {
      expect(_.hasSameJsonKeys(object2, object3)).toEqual(false);
    });
    it ("Should (object3, object2) === false ", function() {
      expect(_.hasSameJsonKeys(object3, object2)).toEqual(false);
    });
    it ("Should () === false ", function() {
      expect(_.hasSameJsonKeys()).toEqual(false);
    });
  });

});
