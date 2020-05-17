//initialize variables
let A: number = 0
let B: number = 0
let outB

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

    //pause to give time for gate to be set
    basic.pause(10)
    //reads the input and maps its value to an LED  brightness
    let inPin = pins.analogReadPin(AnalogPin.P2)
    outB = pins.map(inPin, 0, 1023, 0, 255)
    led.plotBrightness(2, 0, outB)

    //pause for half a second before next loop
    basic.pause(1000)
})
