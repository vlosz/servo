basic.forever(function () {
    if (input.temperature() > 20) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        motors.dualMotorPower(Motor.M0, 100)
    } else {
        motors.motorCommand(MotorCommand.Break)
    }
})
