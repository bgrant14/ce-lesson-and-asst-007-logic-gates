//initialize variables
let A: number = 0
let B: number = 0
let row: number = 1
let F: number[] = []
let Y: number[] = []
pins.digitalWritePin(DigitalPin.P15, 0)

function dispTT() {
    //set the leds row by row
    //brightness is 0*250+5 = 5 or 1*250+5 = 255
    led.plotBrightness(0, row, A * 250 + 5)
    led.plotBrightness(1, row, B * 250 + 5)
}
function writePins() {
    //writes the digital outputs to pins 12 and 14
    pins.digitalWritePin(DigitalPin.P12, A)
    pins.digitalWritePin(DigitalPin.P14, B)
}

function iterate() {
    B++ //iterate B
    row++
    if (B > 1 && A == 1) { //A and B are 1 and 2, reset variables to zero
        B = 0
        A = 0
        row = 1
        basic.pause(1000)
        //check whether the final row led is on first, then id the gate
        if (!led.point(4, 1) && idGate(F)) {
            pins.digitalWritePin(DigitalPin.P15, 1) //Switch the mux to xnor
            xnor()
            idGate(Y)
            pins.digitalWritePin(DigitalPin.P15, 0) //switch the mux back to xor
            row = 1
        }
        basic.clearScreen() //clear the current plot
    } else if (B > 1) { //If first part of this is not true, but B is two...
        A++ //iterate A
        B = 0 //set B to zero
    }
    basic.pause(1000)
}

function idGate(output: number[]) {
    if (output[0] == 0 && output[1] == 1 && output[2] == 1 && output[3] == 0) {
        basic.showString("XOR")
        return true
    }
    if (output[0] == 0 && output[1] == 0 && output[2] == 0 && output[3] == 1) basic.showString("AND")
    else if (output[0] == 0 && output[1] == 1 && output[2] == 1 && output[3] == 1) basic.showString("OR")
    else if (output[0] == 1 && output[1] == 0 && output[2] == 0 && output[3] == 0) basic.showString("NOR")
    else if (output[0] == 1 && output[1] == 0 && output[2] == 0 && output[3] == 1) basic.showString("XNOR")
    else if (output[0] == 1 && output[1] == 1 && output[2] == 1 && output[3] == 0) basic.showString("NAND")
    else basic.showString("No name")
    return false
}

function xnor() {
    for (let i = 0; i < 4; i++) {
        dispTT()
        writePins()
        basic.pause(10)
        //read from the same pin but store result in a separate array
        Y[row - 1] = pins.digitalReadPin(DigitalPin.P2)
        //display both output rows
        led.plotBrightness(3, row, F[row - 1] * 250 + 5)
        led.plotBrightness(4, row, Y[row - 1] * 250 + 5)
        iterate()
    }
}

basic.forever(function () {
    //display truth table function
    dispTT()
    //write output pins function
    writePins()

    //pause to give time for gate to be set
    basic.pause(10)
    //read the output and store the result in an array
    F[row - 1] = pins.digitalReadPin(DigitalPin.P2)
    //plot the LED
    led.plotBrightness(3, row, F[row - 1] * 250 + 5)

    iterate()
})
