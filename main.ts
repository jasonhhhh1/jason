input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # # . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("Hello!")
    basic.clearScreen()
})
basic.forever(function () {
	
})
