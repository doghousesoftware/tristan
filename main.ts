let alamState = 0
let bookIsGone = 0
input.onPinPressed(TouchPin.P0, function () {
    switchTripped()
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
        alarmMe(1)
    } else {
        alarmMe(0)
        alamState = receivedNumber
    }
})
// Turns System ON
input.onButtonPressed(Button.A, function () {
    systemState(1)
})
function systemState (state: number) {
    powerLED(state)
    radio.sendNumber(state)
}
// Turns System OFF
input.onButtonPressed(Button.B, function () {
    systemState(0)
})
function switchTripped () {
    if (bookIsGone == 0) {
        bookIsGone = 1
        radio.sendNumber(4)
    } else {
        bookIsGone = 0
    }
}
function powerLED (onoff: number) {
    if (onoff == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
}
function alarmMe (num: number) {
    if (num == 1) {
        music.playMelody("C5 E C5 E C5 E C5 E ", 120)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
}
