(function() {
  var radians = function (deg) {
    return deg * Math.PI / 180
  }

  var applyStyles = function (el, styles) {
    for (var s in styles) {
      el.style[s] = styles[s]
    }
    return el
  }

  var dotborder = function (options) {
    if (!options) {
      options = {}
    }

    // The degrees of the button you want to draw
    var degrees = options.degrees || 360

    // The size of the button
    var buttonSize = options.buttonSize || 200

    // The offset of the circleRadius
    var offset = options.offset || 10

    // The rate at which you get dots
    var rate = options.rate || 10

    // The size of the dots
    var dotSize = options.dotSize || 4

    // The class of the dots, use selector without a '.'
    var dotClass = options.dotClass || 'dot'

    // The class of the button, use selector without a '.'
    var buttonClass = options.buttonClass || 'button'

    // The radius of the button
    var buttonRadius = buttonSize / 2

    // The radius of the circle of dot
    var circleRadius = buttonRadius + offset

    // The buttons
    var buttons = document.body.querySelectorAll('.' + buttonClass)

    // Calculate the position of x or y
    var position = function (base) {
      return ((base * circleRadius + circleRadius) - dotSize / 2) + (buttonRadius - circleRadius)
    }

    for (var i = 0; i < buttons.length; i++) {
      var el = applyStyles(buttons[i], {
        height: buttonSize + 'px',
        width: buttonSize + 'px'
      })

      // Draw dots as a circle
      // Starts on 270 to start on top of the curve
      for (var j = 271; j <= degrees + 270; j += rate) {
        var r = radians(j)
        var x = position(Math.cos(r))
        var y = position(Math.sin(r))

        // Create dot
        var dot = applyStyles(document.createElement('div'), {
          height: dotSize + 'px',
          width: dotSize + 'px',
          left: x + 'px',
          top: y + 'px'
        })
        dot.className = dotClass
        el.appendChild(dot)
      }
    }
  }
  window.dotborder = dotborder
}())
