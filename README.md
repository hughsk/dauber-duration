# dauber-duration [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Pooled requestedAnimationFrame tool for running multiple short bursts of animation

## Usage

[![NPM](https://nodei.co/npm/dauber-duration.png)](https://nodei.co/npm/dauber-duration/)

### `dauber(duration, loopfn[, done])`

Calls `loopfn(t)` every frame for `duration` milliseconds, where `t` is a value
between 0 and 1 describing the progress through the animation. When complete,
calls `done` if passed.

For example, to animate between two values over 500 millisconds:

``` js
var animate = require('dauber-duration')

animate(500, function(t) {
  var a = 10
  var b = 50
  var r = a + (b - a) * t // (linear interpolation)

  circle.setAttribute('r', r)
})
```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/dauber-duration/blob/master/LICENSE.md) for details.
