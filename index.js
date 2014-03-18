var splice = [].splice

module.exports = function(fn){
  var argIndex = parseInt(arguments[1], 10) || 0
    , thisValue = arguments[2]
  return function(){
    var args = arguments
    return function(value){
      splice.call(args, argIndex, 0, value)
      return fn.apply(thisValue, args)
    }
  }
}
