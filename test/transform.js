var tape = require("tape")
  , transform = require("../")

tape("transform", function(test){
  var foo = transform(function(value, fn){ return fn(value) })
  foo(function(value){
    test.equal(value, 1, "gets value at index 0")
    test.end()
  })(1)
})

tape("transform (custom index)", function(test){
  var foo = transform(function(fn, value){ return fn(value) }, 1)
  foo(function(value){
    test.equal(value, 1, "gets value at index 1")
    test.end()
  })(1)
})

tape("transform (defined 0 index)", function(test){
  var foo = transform(function(value, fn){ return fn(value) }, 0)
  foo(function(value){
    test.equal(value, 1, "gets value at index 0")
    test.end()
  })(1)
})

tape("transform (parses integers)", function(test){
  var foo = transform(function(fn, value){ return fn(value) }, "1")
  foo(function(value){
    test.equal(value, 1, "gets value at index 1")
    test.end()
  })(1)
})

tape("transform (more arguments)", function(test){
  var foo = transform(function(fn, fn2, value){ return fn(fn2(value)) }, 2)
  foo(function(value){
    test.equal(value, 2, "gets value at index 1")
    test.end()
  }, function(value){
    return value * 2
  })(1)
})

tape("transform (correctly splices more arguments)", function(test){
  var foo = transform(function(fn, value, fn2){ return fn(fn2(value)) }, 1)
  foo(function(value){
    test.equal(value, 2, "gets value at index 1")
    test.end()
  }, function(value){
    return value * 2
  })(1)
})

tape("transform (custom thisValue)", function(test){
  var o = {}
  , foo = transform(function(){
      test.equal(this, o, "gets thisValue")
      test.end()
    }, 1, o)
  foo()()
})
