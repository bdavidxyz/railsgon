// function isDictionary(obj) {
//     if(!obj) return false;
//     if(_.isArray(obj)) return false;
//     if(obj.constructor != Object) return false;
//     return true;
// }

_.mixin({ 
  isDictionary: function (obj) {
    if(!obj) return false;
    if(_.isArray(obj)) return false;
    if(obj.constructor != Object) return false;
    return true;
  },
  isArrayEqual: function (arr1, arr2) {
    if (!(_.isArray(arr1) && _.isArray(arr2))) {
      return false;
    } else {
      return _.isEqual(_(arr1).sort(), _(arr2).sort());
    }
  }, 
  hasSameJsonKeys: function (obj1, obj2) {
    if (!(_.isDictionary(obj1) && _.isDictionary(obj2))) {
      return false;
    } else if (!_.isArrayEqual(_.keys(obj1), _.keys(obj2))) {
      return false;
    } else {
      var all_dict_keys = _.filter(_.keys(obj1), function(key) { return _.isDictionary(obj1[key]);});
      if (all_dict_keys.length === 0) {
        return true;
      } else {
        return _.every(all_dict_keys, function(key) {return _.hasSameJsonKeys(obj1[key], obj2[key])});
      }
    }
  } 

});
