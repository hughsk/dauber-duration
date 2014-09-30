var now  = require('right-now')
var daub = require('dauber')
var noop = (function(){})

module.exports = timed

function timed(duration, fn, done) {
  var start = now()

  done = done || noop

  return daub(function() {
    var currTime = now() - start
    var t = currTime / duration

    fn(t > 1 ? 1 : t)

    if (t >= 1) {
      done()
      return false
    }
  })
}
