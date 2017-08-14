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
  isArrayEqual: function (obj) {
    if (!(_.isArray(arr1) && _.isArray(arr2))) {
      return false;
    } else {
      return _.isEqual(_.sort(arr1), _.sort(arr2));
    }
  } 

});
