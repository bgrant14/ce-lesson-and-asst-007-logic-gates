//initialize variables
let A: number = 0
let B: number = 0

basic.forever(function () {
    B++ //iterate B
    if (B > 1 && A == 1) { //A and B are 1 and 2, reset variables to zero
        B = 0
        A = 0
    } else if (B > 1) { //If first part of this is not true, but B is two...
        A++ //iterate A
        B = 0 //set B to zero
    }
    //set the leds in the top left corner
    //brightness is 0*250+5 = 5 or 1*250+5 = 255
    led.plotBrightness(0, 0, A * 250 + 5)
    led.plotBrightness(1, 0, B * 250 + 5)
    //writes the digital outputs to pins 12 and 14
    pins.digitalWritePin(DigitalPin.P12, A)
    pins.digitalWritePin(DigitalPin.P14, B)
    //pause for half a second before next loop
    basic.pause(500)
})
