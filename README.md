# transform

[![browser support](https://ci.testling.com/bloodyowl/transform.png)
](https://ci.testling.com/bloodyowl/transform)

creates partial functions that take one argument

useful for APIs like promises `.then` which let functions you pass in it take one argument only. 

e.g.

```javascript
var transform = require("bloody-transform")
  , foo = function(fn, value){
      return fn(value)
    }
  , partialFoo = transform(foo, 1, console)

partialFoo(console.log)("value")
// logs "value"
```

## install

```sh
$ npm install bloody-transform
```

## require

```javascript
var transform = require("bloody-transform")
```

## api 

### transform(fn[, index=0, [thisValue]]) -> fn

returns a function that will take all the prefilled arguments and will return a function that takes just one argument and fill the `index` arguments when executed. 
