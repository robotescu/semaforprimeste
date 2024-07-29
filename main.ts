radio.onReceivedString(function (receivedString) {
    if (receivedString == "rosu") {
        strip.clear()
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    } else if (receivedString == "galben") {
        strip.clear()
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    } else if (receivedString == "verde") {
        strip.clear()
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    }
    strip.show()
})
let strip: neopixel.Strip = null
basic.showString("S")
strip = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
radio.setGroup(1)
