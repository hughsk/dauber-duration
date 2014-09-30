var now  = require('right-now')
var test = require('tape')
var daub = require('./')

test('dauber-duration', function(t) {
  var goal = now() + 500
  var last = 0

  daub(500, function(time) {
    t.ok(time > last, 'time is greater than before')
    t.ok(time > 0 && time <= 1, 'time is between 0 and 1')
    last = time
  }, function() {
    t.ok(Math.abs(goal - now()) < 30, 'ended around the right time')
    t.end()
  })
})
